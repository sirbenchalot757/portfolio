'use client'

import Link from 'next/link'
import {
    useMotionValue,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { SnowConePattern } from './SnowconePattern'
import { RamifiPattern } from './RamifiPattern'
import { HeliusIcon } from '@/images/logoIcons/helius-icon'
import { SnowconeIcon } from '@/images/logoIcons/snowcone-icon'
import { RamifiIcon } from '@/images/logoIcons/ramifi-icon'

function CompanyLogo({ icon: Icon, className }: { icon: React.ComponentType<{ className?: string }>, className: string }) {
    return (
        <div className="flex h-min w-min items-start justify-start ">
            <Icon className={cn('h-14 w-auto', className)} />
        </div>
    )
}

export function SnowconeCard() {
    return (
        <div
            className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 my-6"
        >
            {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
            <div className="relative rounded-2xl px-4 pb-4 pt-16">
                <SnowconeIcon className={"h-auto transition-colors duration-300"} />
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {'An all in one DAP creation and management tool.'}
                </p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-fuchsia-500" />
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
                <SnowConePattern />
            </div>
        </div >
    )
}

export function HeliusCard() {
    return (
        <div
            className="group relative flex items-center rounded-2xl h-[160px] transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
        >
            {/* Left side content */}
            <div className="flex-grow relative rounded-2xl px-4 pb-4 pt-16">
                <CompanyLogo icon={HeliusIcon} className='' />
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {'An all in one DAP creation and management tool.'}
                </p>
            </div>

            {/* Right side image with grayscale-to-color effect */}
            <div className="relative inset-0 rounded-2xl transition duration-300">
                <div className="rounded-2xl overflow-hidden  [mask-image:linear-gradient(white,transparent)]">
                    <Image
                        src={'/images/neighborhoods.png'}
                        alt="House"
                        width={600}
                        height={147}
                        className="filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                    />
                </div>
            </div>

            {/* Ring effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-emerald-400" />
        </div >
    )
}


export function RamifiCard() {
    return (
        <div
            className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 my-6"
        >
            {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
            <div className="relative rounded-2xl px-4 pb-4 pt-16">
                <RamifiIcon className={"h-12 transition-colors duration-300"} />
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {'An all in one DAP creation and management tool.'}
                </p>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-amber-100" />
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
                <RamifiPattern className='filter grayscale transition duration-300 ease-in-out group-hover:filter-none' />
            </div>
        </div >
    )
}
