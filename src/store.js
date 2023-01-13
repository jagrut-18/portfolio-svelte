import { writable } from 'svelte/store';


export const selectedIndex = writable();
export const openTabs = writable([]);
export const currentKey = writable();


const React = 'assets/react.svg';
const Flutter = 'assets/flutter.svg';
const Vue = 'assets/vue.svg';
const Electron = 'assets/electron.svg';
const C = 'assets/c.svg';
const Python = 'assets/python.svg';
const Javascript = 'assets/js.svg';
const Dart = 'assets/dart.svg';
const CPP = 'assets/cpp.svg';
const HTML = 'assets/html.svg';
const Css = 'assets/css.svg';
const Java = 'assets/java.svg';
const Svelte = 'assets/svelte.svg';
const NODE = 'assets/node.svg';
const Flask = 'assets/flask.svg';
const OS = 'assets/os.svg';
const AI = 'assets/ai.svg';
const Git = 'assets/git.svg';
const Design = 'assets/design.svg';
const NN = 'assets/nn.svg';
const SQL = 'assets/sql.svg';
const Bitcraft = 'assets/experience/bitcraft.svg';
const Wordbud = 'assets/experience/wordbud.svg';
const IU = 'assets/experience/iu.svg';
const GTU = 'assets/gtu.svg';
const Freelancer = 'assets/experience/freelancer.svg';

export const summary = [
    {
        name: 'Summary',
        aboutMe: 'Self-motivated Software Developer having experience working on multiple projects. Passionate and hardworking with a penchant for meeting deadlines. Interested in a role with a company promoting best practices and offering diverse customer projects.'
    }
];

export const projects = [
    {
        name: "Lifeline: Patient, Doctor & Insurance Management System",
        tags: ['React', 'Flask', 'MySQL', 'AWS', 'Mapbox', 'TalkJS', 'GoogleAuth'],
        description: [
            'Responsible for UI design in Figma and frontend implementation in React',
            'Completed the project in 5 successful sprints with 2 weeks each',
            'Collaborated with the team to design and structure database for 3 different views',
            'Also worked on Reusable components, Centralized API service, Google Auth, Mapbox integration',
        ],
        icon: React,
        isApp: false,
        images: Array.from({length: 11}, (_, i) => `assets/lifeline/lifeline${i+1}.png`),
        link: 'https://github.com/jagrut-18/lifeline-frontend',
    },
    {
        name: "Cooking Stories: Connecting Remote Families",
        tags: ['React Native', 'Firebase'],
        description: [
            'Full stack implementation in React Native and Firebase',
            'Structuring Firebase Database to efficiently create feeds for users, uploading-retrieving images',
            'Created Reusable components, Centralized API Services, Routing, Responsive UI',
        ],
        icon: React,
        isApp: true,
        images: Array.from({length: 4}, (_, i) => `assets/cookingstories/cookingstories${i+1}.png`),
        link: null,
    },
    {
        name: "Aero: Cycle Tracking App",
        tags: ['Flutter', 'Springboot', 'Mapbox', 'WearOS', 'GoogleAuth'],
        description: [
            'Implemented complex frontend elements in Flutter',
            'Collaborated with backend developer for API integration',
            'Worked on syncing tracked data between Mobile and WearOS through Bluetooth',
        ],
        icon: Flutter,
        isApp: true,
        images: Array.from({length: 4}, (_, i) => `assets/aero/aero${i+1}.png`),
        link: 'https://play.google.com/store/apps/details?id=com.cycling.aero',
    },
    {
        name: "HealthCard: Store Medical Records",
        tags: ['Flutter', 'Firebase', 'QRcode'],
        description: [
            'Email/password authentication with two user roles',
            'Implemented QRcode scanner and generator to fetch medical records',
            'Uploading and showing documents from Firebase Storage Buckets',
        ],
        icon: Flutter,
        isApp: true,
        images: Array.from({length: 5}, (_, i) => `assets/healthcard/healthcard${i+1}.png`),
        link: 'https://github.com/jagrut-18/health_card',
    },
    {
        name: "EssayWriter: Write GRE/GMAT/IELTS essays",
        tags: ['Vue.js'],
        description: [
            'Worked on frontend design and implementation using Vue.js',
            'Random or select a question from a pool of questions for each category',
            'Set time limit, change font size, and live word counter',
            'Download essays in PDF or DOC formats',
        ],
        icon: Vue,
        isApp: false,
        images: Array.from({length: 3}, (_, i) => `assets/essaywriter/essaywriter${i+1}.png`),
        link: 'https://essay-writer.netlify.app/',
    },
    {
        name: "PPTViewer: Offline PPT Viewer and Converter",
        tags: ['Electron.js', 'Python'],
        description: [
            'Used Electron.js to create frontend desktop application',
            'Implemented PPT conversion using Python',
            'File rename, page traversal and custom title bar',
        ],
        icon: Electron,
        isApp: false,
        images: Array.from({length: 3}, (_, i) => `assets/pptviewer/pptviewer${i+1}.png`),
        link: 'https://github.com/jagrut-18/ppt-viewer',
    },
    {
        name: "Tuition: A Student-Teacher Management App",
        tags: ['Flutter'],
        description: [
            'Implemented fronted using Flutter',
            'Worked on UI design on Figma',
            'Custom caledar component',
        ],
        icon: Flutter,
        isApp: true,
        images: Array.from({length: 4}, (_, i) => `assets/tuition/tuition${i+1}.png`),
        link: 'https://github.com/jagrut-18/tuition_app',
    },
    {
        name: "Xinu: Advanced Operating System",
        tags: ['C Language'],
        description: [
            'Added core features to a low-level OS using C',
            'Implemented System calls, Semaphores, Producer/Consumer, Futures, Streams, File system, etc.',
        ],
        icon: C,
        isApp: false,
        images: Array.from({length: 1}, (_, i) => `assets/xinu/xinu${i+1}.png`),
        link: 'https://github.com/jagrut-18/xinu-advanced-operating-system',
    },
];

export const experiences = [
    {
        name: 'Wordbud Inc.',
        position: 'Flutter Developer Intern',
        description: [
            'Responsible for implementing UI and logic using Flutter and cloud-run APIs using dart',
            'Created unit, widget and integration tests to ensure quality of work',
            'Worked with concepts like state management, queries, interfaces, code reusability',
        ],
        date: 'May 2022 – Aug 2022',
        location: 'Austin, Texas (Remote)',
        icon: Wordbud,
    },
    {
        name: 'Indiana University Bloomington',
        position: 'Software Developer',
        description: [
            'Responsible for building a Research Project called Cooking Stories under Prof. Christina Chung',
            'Frontend UI implementation in React Native',
            'Structuring Firebase Database to efficiently create feeds for users, uploading-retrieving images',
            'Created Reusable components, Centralized API Services, Routing, Responsive UI',
        ],
        date: 'Apr 2022 – Aug 2022',
        location: 'Bloomington, Indiana',
        icon: IU,
    },
    {
        name: 'Bitcraft Abstractions Pvt. Ltd.',
        position: 'Frontend Developer Intern',
        description: [
            'Collaborated with other web designers to create sleek and innovative UI design for a music player app',
            'Designed and implemented complex UI components for a laundry app called “Dhobi”',
            'Worked with another developer to create GraphQL APIs to aid the frontend Flutter application',
        ],
        date: 'Dec 2019 – Jan 2020',
        location: 'Ahmedabad, Gujarat',
        icon: Bitcraft,
    },
    {
        name: 'Freelance Software Developer',
        position: 'Software Developer',
        description: [
            'Hands-on experience on 5+ real-world projects on AI, food delivery, cycle activity tracking, social work, etc.',
            'Responsible for implementing the whole project, end-to-end testing, and deployment',
            'Project links:',
        ],
        links: [
            {
                name: 'Manentia',
                link: 'https://play.google.com/store/apps/details?id=com.manentiaadvisory.app',
            },
            {
                name: 'Yotum',
                link: 'https://play.google.com/store/apps/details?id=in.upbits.yotum',
            },
            {
                name: 'Aero',
                link: 'https://play.google.com/store/apps/details?id=com.cycling.aero',
            },
            {
                name: 'EachOther',
                link: 'https://play.google.com/store/apps/details?id=in.upbits.each_other_in',
            },
        ],
        date: 'July 2019 – July 2021',
        location: 'Ahmedabad, Gujarat',
        icon: Freelancer,
    },
];

export const education = [
    {
        name: 'Indiana University Bloomington',
        location: 'Bloomington, Indiana',
        date: 'Aug 2021 - May 2023',
        degree: 'Masters in Computer Science',
        gpa: '4.0/4.0',
        courses: ['Software Engineering', 'Advanced Operating Systems', 'Elements of Artificial Intelligence', 'Applied Algorithms', 'Cross-Platform Mobile Applications', 'Applied Machine Learning'],
        icon: IU,
    },
    {
        name: 'Gujarat Technological University',
        college: 'Adani Institute of Infrastructure Engineering',
        location: 'Ahmedabad, Gujarat',
        date: 'Aug 2017 - Jul 2021',
        degree: 'Bachelors in Information and Communication Technology',
        gpa: '3.8/4.0',
        courses: ['Object Oriented Programming with C++', 'Data Structure', 'Web Technology', 'Database Management Systems', 'Computer Networks', 'Object Oriented Programming with Java', 'Operating System', 'Analysis & Design of Algorithms', 'Software Engineering', 'System Programming'],
        icon: GTU,
    },
];

export const data = {
    summary: summary,
    projects: projects,
    education: education,
    experiences: experiences,
    skills: [
        {
            name: 'Skills',
            data: [
                {
                    name: 'Skills',
                    data: [{name: 'Python', icon: Python}, {name: 'Javascript', icon: Javascript}, {name: 'Dart', icon: Dart}, {name: 'C', icon: C}, {name: 'C++', icon: CPP}, {name: 'HTML', icon: HTML}, {name: 'CSS', icon: Css}, {name: 'Java', icon: Java}],
                },
                {
                    name: 'Technologies',
                    data: [{name: 'ReactJS', icon: React}, {name: 'Flutter', icon: Flutter}, {name: 'VueJS', icon: Vue}, {name: 'React Native', icon: React}, {name: 'Svelte', icon: Svelte}, {name: 'ExpressJS', icon: NODE}, {name: 'ElectronJS', icon: Electron}, {name: 'Flask', icon: Flask}],
                },
                {
                    name: 'Other',
                    data: [{name: 'UI Design', icon: Design}, {name: 'Operating System', icon: OS}, {name: 'Artificial Intelligence', icon: AI}, {name: 'Git', icon: Git}, {name: 'Neural Networks', icon: NN}, {name: 'SQL', icon: SQL}],
                },
            ],
        }
    ]
}