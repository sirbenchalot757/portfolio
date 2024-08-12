import Image from 'next/image'
import avatarImage from '@/images/avatar.jpg'
import clsx from 'clsx'
import { GitHubIcon } from '@/components/SocialIcons'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid'

export const Heading = () => (

    <div className="flex justify-between">
        <div className="flex space-x-4 justify-start items-end">
            <Image
                src={avatarImage}
                alt=""
                sizes={'8rem'}
                className={clsx(
                    'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
                    'h-20 w-20',
                )}
                priority
            />
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Kyle Forkey
                </h1>
                <p className=" text-zinc-600 dark:text-zinc-400">
                    Full stack developer / designer
                </p>

            </div>
        </div>
        <div className='flex flex-col justify-end text-xs font-medium'>
            <p className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span className="ml-auto">+1 (561) 313-9856</span>
            </p>
            <p className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span className="ml-auto">
                    Xforkey@gmail.com
                </span>
            </p>
            <p className="flex items-center">
                <GitHubIcon className="h-4 w-4 fill-zinc-800 mr-2" />
                <span className="ml-auto">
                    github.com/sirbenchalot757
                </span>
            </p>
        </div>
    </div>
)