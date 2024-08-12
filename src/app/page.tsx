import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import SnowConeLogo from '@/images/logos/snowcone.svg';
import HeliusLogo from '@/images/logos/helius.svg';
import RamifyLogo from '@/images/logos/ramify.svg';
import EazyInvLogo from '@/images/logos/eazyinv.svg';
import EthmintLogo from '@/images/logos/ethmint.svg';

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { CanvasRevealEffectDemo } from '@/components/canvas-reveal-effect-demo'
import { CanvasRevealWithMask } from '@/components/ui/reveal-with-mask'
import { SnowconeCard, HeliusCard, RamifiCard } from '@/components/CompanyCards'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

const resume = [
  {
    company: 'SnowCone',
    title: 'Lead Developer',
    logo: SnowConeLogo,
    start: 'Feb 2022',
    end: 'Feb 2024',
    highlights: [
      'Led development of a DAO web app using Next.js, and smart contracts with a lighthouse score of 97.',
      'Integrated The Graph for real-time on-chain data management with a GraphQL interface.',
      'Implemented file uploads via Supabase and Pinata for IPFS, ensuring open-source principles.',
      'Managed 2 junior developers, performed code reviews, and set up a CI/CD pipeline.',
      'Designed a highly praised responsive UI using MUI React, Jotai, and Redux.',
      'Authored Snowcone Kit for wallet connections and transactions, and created documentation.'
    ],
  },
  {
    company: 'Ramify',
    title: 'Lead Developer',
    logo: RamifyLogo,
    start: 'Aug 2020',
    end: 'Jan 2022',
    highlights: [
      'Designed and architected the Ramify app and landing page, integrating smart contracts.',
      'Developed and deployed smart contracts and a GraphQL interface using The Graph.',
      'Implemented a recurring function to airdrop tokens to users, enhancing engagement.',
    ],
  },
  {
    company: 'Helius',
    title: 'Lead Developer',
    logo: HeliusLogo,
    start: 'Apr 2018',
    end: 'Aug 2020',
    highlights: [
      'Led the design and development of a fractional land investment app using React.',
      'Architected smart contracts and ensured legal compliance with securities laws.',
      'Conducted design reviews using Figma and Zeplin, achieving a user-friendly interface.',
      'Implemented a smart contract redesign, saving $70,000.',
      'Oversaw remote team’s development and integration of smart contracts.'
    ],
  },
  {
    company: 'Ethmint',
    title: 'Fundraiser',
    logo: EthmintLogo,
    start: 'Apr 2017',
    end: 'Mar 2018',
    highlights: [
      'Founded Ethimint, providing turnkey services for SEC-compliant ICOs and fundraising.',
      'Developed brand identity, website, and marketing strategies to enhance visibility.',
      'Managed a team of 4, including an accountant, marketer, developer, and designer.',
      'Represented the company at national conferences, securing investor relationships.'
    ],
  },
];


function Resume() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full stack developer / designer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Experienced in creating efficient, scalable web applications with a keen eye for design.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://x.com/theesehands"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/sirbenchalot757?tab=repositories"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/feed/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-16 space-y-4">
        {/*       <CanvasRevealWithMask
        svgUrl="/logos/cosmos.svg"  // Your SVG file
        animationSpeed={0.4}              // Example of passing other props
        dotSize={2}
        opacities={[0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
      /> */}
        <SnowconeCard />
        <HeliusCard />
        <RamifiCard />
      </Container>
      <Container className="mt-12 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/*           <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <Resume />
        </div>
      </Container>
    </>
  )
}
