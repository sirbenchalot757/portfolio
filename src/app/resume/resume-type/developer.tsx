import SnowConeLogo from '@/images/logos/snowcone.svg';
import HeliusLogo from '@/images/logos/helius.svg';
import RamifyLogo from '@/images/logos/ramify.svg';
import EazyInvLogo from '@/images/logos/eazyinv.svg';
import EthmintLogo from '@/images/logos/ethmint.svg';
import TCCLogo from '@/images/logos/tcc.svg';
import ODULogo from '@/images/logos/odu.svg';

const personalInfo = {
    name: 'Kyle Forkey',
    title: 'Full Stack Developer',
    email: 'xforkey@gmail.com',
    phone: '+1 (561) 313-9856',
    github: 'github.com/sirbenchalot757',
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


const skills = [
    'Front-End: Next/React, Typescript, Tailwind, HTML, CSS, JavaScript, React, Redux, ',
    'Back-End Technologies: Node.js, Python, web3, Solidity',
    'Database Management: Supabase, PostgreSQL, Airtable',
    'DevOps Tools: Docker',
    'Version Control: Git, GitHub',
    'Other: RESTful APIs, GraphQL, CI/CD pipelines',
];

const projects = [
    {
        title: 'EazyInv',
        description: 'An invoice management system for small businesses',
        logo: EazyInvLogo,
        highlights: ['Developed a full-stack web application using React, Node.js, and MongoDB.'],
    },
];

const summary = `Results-driven Full Stack Web Developer with 7+ years of experience in designing, developing, and deploying scalable web applications. Proficient in modern web technologies including JavaScript, React, Node.js, and Python. Adept at collaborating with cross-functional teams and implementing agile methodologies to deliver high-quality software solutions.`;

export default { personalInfo, education, resume, skills, projects, summary };
