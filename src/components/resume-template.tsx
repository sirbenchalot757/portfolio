import React from 'react';
import { ResumeProps } from '@/types'
import Link from 'next/link';
import TCCLogo from '@/images/logos/tcc.svg';
import ODULogo from '@/images/logos/odu.svg';
import { Tailwind } from '@fileforge/react-print';


const personalInfo = {
  name: 'Kyle Forkey',
  title: 'Full Stack Developer',
  email: 'xforkey@gmail.com',
  phone: '+1 (561) 313-9856',
  github: 'github.com/sirbenchalot757',
  portfolio: 'kyleforkey.com',
};

const education = [
  {
    school: 'Old Dominion University',
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
  },
];


const ResumeTemplate = ({
  resume,
  skills,
  projects,
  summary,
}: ResumeProps) => {

  const GithubLink = () => (
    <a href={`https://${personalInfo.github}`}>
      {personalInfo.github}
    </a>
  );

  const PortfolioLink = () => (
    <a href={`https://${personalInfo.portfolio}`}>
      {personalInfo.portfolio}
    </a>
  );

  return (
    <Tailwind>
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-lg text-sm">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">{personalInfo.name}</h1>
            <p className="text-base font-semibold tracking-tight text-zinc-800">{personalInfo.title}</p>
            <p>{personalInfo.email} | {personalInfo.phone}</p>
          </div>
          <div className='flex flex-col justify-start'>

            <div className='flex'>
              <p className='mr-2 font-semibold'>Github:</p>
              <GithubLink />
            </div>
            <div className='flex'>
              <p className='mr-2 font-semibold'>Portfolio:</p>
              <PortfolioLink />
            </div>
          </div>
        </div>

        <section className='mt-3'>
          <h2 className="font-semibold">Professional Summary</h2>
          <p className=" mt-2 text-sm text-zinc-600">{summary}</p>
        </section>
        <section className='mt-3'>
          <h2 className="font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className=" mt-1 text-sm text-zinc-600">{skill}</li>
            ))}
          </ul>
        </section>
        <section className='mt-3 text-sm'>
          <h2 className="font-semibold">Work Experience</h2>
          {resume.map((job, index) => (
            <div key={index} className='mt-3'>
              <div className='flex space-x-2'>
                <p className="font-bold">{job.company}</p>
                <p className='mx-2 text-sm'>|</p>
                <p >{job.title}</p>
                <p className='mx-2 text-sm'>|</p>
                <p className="mb- flex items-center text-sm text-zinc-400">{job.start} - {job.end}</p>
              </div>
              <ul className="list-disc list-inside mt-2">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="mt-1 text-sm text-zinc-600">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>


        <section className='mt-2'>
          <h2 className="font-semibold">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="flex space-x-1 mt-1">
              <p className="text-sm font-semibold">{edu.school}</p><p className='mx-2 text-sm'>|</p>
              <p className="text-sm">{edu.degree}</p><p className='mx-2 text-sm'>|</p>
              <p className="flex items-center text-xs text-zinc-400">{edu.start} - {edu.end}</p>
            </div>
          ))}
        </section>
      </div >
    </Tailwind>
  );
};

export default ResumeTemplate;