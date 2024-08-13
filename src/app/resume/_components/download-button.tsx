'use client';

import React from 'react';
import { Button } from '@/components/Button';
import { ResumeProps } from '@/types';

interface DownloadPdfButtonProps {
    resumeData: ResumeProps;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ resumeData }) => {
    const handleDownloadPDF = async () => {
        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resumeData),
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Failed to generate PDF');
            }
        } catch (error) {
            console.error('Error fetching PDF:', error);
        }
    };

    return (
        <Button type="button" onClick={handleDownloadPDF} variant='primary' className='bg-blue-700 font-semibold text-white hover:bg-blue-500 active:bg-blue-400 active:text-white/40 border mb-4'>
            Download PDF
        </Button>
    );
};

export default DownloadPdfButton;
