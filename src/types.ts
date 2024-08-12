interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
}

interface Education {
    school: string;
    degree: string;
    start: string;
    end: string;
}

interface Experience {
    company: string;
    title: string;
    start: string;
    end: string;
    highlights: string[];
}

interface Project {
    title: string;
    description: string;
    highlights: string[];
}

export type ResumeProps = {
    personalInfo: PersonalInfo;
    education: Education[];
    resume: Experience[];
    skills: string[];
    projects: Project[];
    summary: string;
};
