'use client'

import { type Metadata } from 'next';
import ResumeTemplate from '@/components/resume-template';
import DeveloperData from './resume-type/developer';
import FlatfileData from './resume-type/flatfile';
import DownloadPdfButton from './_components/download-button';
import { Tailwind } from '@fileforge/react-print';

export default function Projects() {
  return (
    <Tailwind>
      <div className="flex justify-end mt-15 pt-15">
        <DownloadPdfButton resumeData={FlatfileData} />
      </div>
      <ResumeTemplate {...FlatfileData} />
    </Tailwind>
  );
}
