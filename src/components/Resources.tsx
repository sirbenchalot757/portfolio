'use client'

import Link from 'next/link'
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { cn } from '@/lib/utils'

import { GridPattern } from '@/components/GridPattern'
import { SnowConePattern } from './SnowconePattern'
import { HeliusIcon } from '@/images/logoIcons/helius-icon'
import { SnowconeIcon } from '@/images/logoIcons/snowcone-icon'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  className: string
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

export const resources: Array<Resource> = [
  {
    href: '/contacts',
    name: 'Contacts',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: HeliusIcon,
    className: "fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",
    pattern: {
      y: 50,
      squares: [
        [0, 1],
        [1, 3],
        [1, 1],
        [2, 1]
      ],
    },
  },
  {
    href: '/contacts',
    name: 'Snowcone',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: SnowconeIcon,
    className: '',
    pattern: {
      y: 50,
      squares: [
        [0, 1],
        [1, 3],
        [1, 1],
        [2, 1]
      ],
    },
  }
]

function ResourceIcon({ icon: Icon, className }: { icon: Resource['icon'], className: string }) {
  return (
    <div className="flex h-min w-min items-start justify-start ">
      <Icon className={cn('h-14 w-14', className)} />
    </div>
  )
}

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Resource['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/[0.02] stroke-white/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/50 stroke-white/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

export function Resource({ resource }: { resource: Resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} className={resource.className} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
        <SnowConePattern />
      </div>
    </div >
  )
}

/* 
    name: 'Snowcone',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: SnowconeIcon,
     */
export function SnowconeCard() {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <SnowconeIcon className={"h-auto"} />
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {'An all in one DAP creation and management tool.'}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
        <SnowConePattern />
      </div>
    </div >
  )
}

export function HeliusCard() {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={HeliusIcon} className={"transition-colors duration-300 w-50 fill-zinc-700/10 stroke-zinc-700  group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"} />
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {'An all in one DAP creation and management tool.'}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
        <SnowConePattern />
      </div>
    </div >
  )
}

export function Resources() {
  return (
    <div>
      {resources.map((resource) => (
        <Resource key={resource.href} resource={resource} />
      ))}
    </div>
  )
}
