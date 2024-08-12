import TCCLogo from '@/images/logos/tcc.svg'
import ODULogo from '@/images/logos/odu.svg'
import { ImageProps } from 'next/image'
import { AcademicCapIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const education = [
    {
        school: 'Old dominion university',
        degree: 'Bachelor of Civil Engineering',
        logo: ODULogo,
        start: '2011',
        end: '2013',
    },
    {
        school: 'Tidewater Community College',
        degree: 'Associates of Science',
        logo: TCCLogo,
        start: '2009',
        end: '2011',
    }
] as School[]

interface School {
    school: string
    degree: string
    logo: ImageProps['src']
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
}

function School({ school }: { school: School }) {
    let startLabel =
        typeof school.start === 'string' ? school.start : school.start.label
    let startDate =
        typeof school.start === 'string' ? school.start : school.start.dateTime

    let endLabel = typeof school.end === 'string' ? school.end : school.end.label
    let endDate = typeof school.end === 'string' ? school.end : school.end.dateTime

    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={school.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">College</dt>
                <dd className="w-full flex-none text-sm font-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {school.school}
                </dd>
                <dt className="sr-only">Degree</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400 leading-0">
                    {school.degree}
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

export default function Education() {

    return (
        <div>
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <AcademicCapIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-3 space-y-2">
                {education.map((school, schoolIndex) => (
                    <School key={schoolIndex} school={school} />
                ))}
            </ol>
        </div>
    )
}