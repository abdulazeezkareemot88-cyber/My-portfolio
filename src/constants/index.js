import {
  backend,
  creator,
  mobile,
  web,
  linkedin,
  github,
  leetcode,
  kaggle,
  git,
  java,
  javascript,
  mysql,
  python,
  reactjs,
  tailwind,
  docker,
  ansible,
  jenkins,
  k8,
  linux,
  springboot,
  gochanakya,
  suvidha,
  bnp,
} from '../assets';

import {
  CalendarClock,
  DatabaseZap,
  ServerCog,
  MessagesSquare,
  ArrowLeftRight,
  ChartLine,
} from 'lucide-react';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const profileLinks = [
  {
    name: 'LinkedIn',
    icon: linkedin,
    website: 'https://www.linkedin.com/in/umang-lodaya/',
  },
  {
    name: 'Github',
    icon: github,
    website: 'https://www.github.com/Umang-Lodaya',
  },
  {
    name: 'LeetCode',
    icon: leetcode,
    website: 'https://leetcode.com/u/UmangLodaya/',
  },
  {
    name: 'Kaggle',
    icon: kaggle,
    website: 'https://www.kaggle.com/umanglodaya',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: creator,
  },
  {
    title: 'DevOps Engineer',
    icon: backend,
  },
  {
    title: 'AI / ML Engineer',
    icon: mobile,
  },
  {
    title: 'Data Engineer & Analyst',
    icon: web,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'BNP Paribas ISPL',
    icon: bnp,
    iconBg: '#E6DEDD',
    date: 'Jun 2024 - Present',
    points: [
      'Built and maintained DEV environment from scratch to support QA automation, ensuring isolation from development workflows and improving release reliability.',
      'Acted as Release Manager for multiple critical releases, coordinating deployments, validations, and rollback readiness across environments.',
      'Designated as Local DevOps Champion for the team; drove adoption of Jenkins, Docker, and Kubernetes through internal enablement and hands-on support.',
      'Developed and maintained internal applications including CDUS, contributing to both feature development and production support.',
      'Led MQ migration as part of Project Commission, ensuring minimal disruption and compliance with enterprise standards.',
      'Contributed to AI initiatives by building RASA-based FAQ chatbots and experimenting with AI-powered SQL generation for internal use cases.',
      'Provided L3-level production support and actively collaborated with cross-functional teams during incidents and onshore stakeholder visits.',
      'Tech Stack: Java, Python, Spring Boot, Docker, Ansible, Jenkins, AI.',
    ],
  },
  {
    title: 'Data Science Engineer',
    company_name: 'GoChanakya',
    icon: gochanakya,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 - May 2024',
    points: [
      'Developed an Full Stack Website using Bubble.io for the company.',
      "I undertook the responsibility of designing, developing, and testing individual modules, and worked on building a financial database for Equity Market with the functionalities for managing users' portfolios.",
      'I developed statistical models leveraging deep learning techniques on historical data to enhance portfolio returns. ',
      'Tech Stack: Python, REST API, Tensorflow, Bubble.io, MS Excel.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company_name: 'Suvidha Foundation',
    icon: suvidha,
    iconBg: '#383E56',
    date: 'Feb 2023 - Mar 2023',
    points: [
      'I undertook a project centered on leveraging Natural Language Processing (NLP) to address the task of summarizing interconnected documents.',
      'By utilizing Python and libraries such as NLTK, I developed algorithms that could comprehend and condense the content while retaining its essential meaning.',
      'This tool had potential applications in various domains, including creating insightful summaries of articles on specific subjects.',
      'Tech Stack: Python, NLP, Tensorflow.',
    ],
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'Ansible',
    icon: ansible,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: k8,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
];

const projects = [
  {
    name: 'Calendar Reader & Scheduler Automation',
    description:
      'Designed and built a backend-driven application that reads calendar data and exposes DAY, WEEK, and MONTH APIs, automatically grouping schedules by meeting types. Integrated with Jenkins cron jobs to trigger APIs based on business-day logic.',
    tags: [
      { name: 'Spring Boot', color: 'blue-text-gradient' },
      { name: 'REST APIs', color: 'green-text-gradient' },
      { name: 'Jenkins', color: 'pink-text-gradient' },
      { name: 'Cron', color: 'red-text-gradient' },
    ],
    icon: CalendarClock,
  },
  {
    name: 'AI-Powered SQL Query Generator',
    description:
      'Built an AI-assisted SQL generation system that dynamically fetches database schema metadata and generates context-aware SQL queries, eliminating hardcoded table definitions and improving accuracy.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'SQL', color: 'green-text-gradient' },
      { name: 'AI / LLMs', color: 'pink-text-gradient' },
      { name: 'Backend APIs', color: 'red-text-gradient' },
    ],
    icon: DatabaseZap,
  },
  {
    name: 'DEV Environment Setup for QA Automation',
    description:
      'Provisioned a dedicated DEV environment from scratch to support QA automation suites, ensuring isolation from development workflows and improving release stability and automation reliability.',
    tags: [
      { name: 'Linux', color: 'blue-text-gradient' },
      { name: 'Ansible', color: 'red-text-gradient' },
      { name: 'Jenkins', color: 'green-text-gradient' },
      { name: 'Docker', color: 'pink-text-gradient' },
    ],
    icon: ServerCog,
  },
  {
    name: 'RASA-Based Enterprise FAQ Chatbot',
    description:
      'Developed and deployed a RASA-powered FAQ chatbot to automate responses for internal teams, integrating structured reports and system documentation as training data.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'RASA', color: 'green-text-gradient' },
      { name: 'NLP', color: 'pink-text-gradient' },
      { name: 'CI/CD', color: 'red-text-gradient' },
    ],
    icon: MessagesSquare,
  },
  {
    name: 'IBM MQ Migration to CAT Services',
    description:
      'Worked on migrating IBM messaging from legacy MQ setup to CAT Services, ensuring compatibility, minimal downtime, and adherence to enterprise integration standards.',
    tags: [
      { name: 'Java', color: 'blue-text-gradient' },
      { name: 'IBM MQ', color: 'green-text-gradient' },
      { name: 'Spring Boot', color: 'pink-text-gradient' },
      { name: 'Enterprise Integration', color: 'red-text-gradient' },
    ],
    icon: ArrowLeftRight,
  },
  {
    name: 'Crop Yield Prediction using TSA & PGM',
    description:
      'Implemented crop yield prediction models using Time Series Analysis and Probabilistic Graphical Models, focusing on agricultural decision-making for the Maharashtra region.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'Time Series Analysis', color: 'green-text-gradient' },
      { name: 'PGM', color: 'pink-text-gradient' },
      { name: 'Data Science', color: 'red-text-gradient' },
    ],
    icon: ChartLine,
  },
];

export { services, technologies, experiences, projects, profileLinks };
