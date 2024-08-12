import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { compile } from '@fileforge/react-print';
import ResumeTemplate from '@/components/resume-template';
import React from 'react';

export async function POST(request: NextRequest) {
    try {
        const resumeData = await request.json();
        const html = await compile(<ResumeTemplate { ...resumeData } />);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
        await browser.close();

        return new NextResponse(pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="resume.pdf"`,
                'Content-Length': pdfBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Error generating PDF:', error);
        return new NextResponse('Error generating PDF', { status: 500 });
    }
}
