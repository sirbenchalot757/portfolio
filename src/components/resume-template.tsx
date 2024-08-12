import React from 'react';
import { ResumeProps } from '@/types'
import { Tailwind } from "@fileforge/react-print";


const ResumeTemplate = ({
  personalInfo,
  education,
  resume,
  skills,
  projects,
  summary,
}: ResumeProps) => {
  return (
    <Tailwind>
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-lg text-sm">
        <div className="text-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <p className="text-base font-semibold tracking-tight text-zinc-800">{personalInfo.title}</p>
          <p>{personalInfo.email} | {personalInfo.phone} | <a href={`https://${personalInfo.github}`} className="text-blue-600">{personalInfo.github}</a></p>
        </div>

        <section className='mt-3'>
          <h2 className="font-semibold">Professional Summary</h2>
          <p className=" mt-2 text-sm text-zinc-600">{summary}</p>
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

        <section className='mt-3'>
          <h2 className="font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className=" mt-2 text-sm text-zinc-600">{skill}</li>
            ))}
          </ul>
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
        {/* 
        <section className='mt-4'>
          <h2 className="text-xl font-semibold">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mt-4">
              <p className="font-bold">{project.title}</p>
              <p className=" mt-2 text-sm text-zinc-600">{project.description}</p>
              <ul className="list-disc list-inside mt-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className=" mt-2 text-sm text-zinc-600">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section> */}
      </div>
    </Tailwind>
  );
};

export default ResumeTemplate;