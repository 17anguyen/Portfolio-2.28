import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    sql,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    UW,
    VEX,
    FTC,
    Rasp,
    threejs,
    chingu,
    DoodleDash,
    eventplan,
    onebyfaith,
    githublogo,
    linkedin,
    resume,
    pdf,
    chinguPoster,
    doodlePoster,
    plannerPoster,
    obfPoster,
    helico,
    helicoPoster,
    zombie,
    zombiePoster,
    github
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const footerLinks = [
    {
        icon: github,
        name: "Github",
        URL: "https://github.com/17anguyen",
    },
    {
        icon: linkedin,
        name: "Linkedin",
        URL: "https://www.linkedin.com/in/alivia-thomas/",
    },
    // {
    //     icon: resume,
    //     name: "Resume",
    //     URL:pdf,
    // }, 
];

const services = [
    {
        title: "Front End Design",
        icon: backend,
    },
    {
        title: "Back End Developer",
        icon: mobile,
    },
    {
        title: "Reactive Design Elements",
        icon: web,
    },
    // {
    //     title: "UI Design",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "MySQL",
        icon: sql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "VEX Robotics",
        company_name: "I started my coding journey in 2014 when VEX robotics was introduced to my school.",
        icon: VEX,
        iconBg: "#A79B8F",
        date: "2014",
        points: [
            " There I learned Robot-C as my first language!",
            "I was responsible for creating autonomous programs",
            "Programming motors",
            "Programming LiDar and sonar sensors",
        ],
    },
    {
        title: "FTC Robotics",
        company_name: "In 2016 I transferred schools and got the opportunnity to participate in FTC robotics",
        icon: FTC,
        iconBg: "#A79B8F",
        date: "2016",
        points: [
            "I added Java to my tool belt!",
            "I continued writing autonomous programs but now I had a team of 6 and a mentor!",
            "My first experience creating separate scripts for dual pilot controllers!",
        ],
    },
    {
        title: "Raspberry Pi",
        company_name: "Following my graduation in 2017 I wanted to keep my love for programming alive. I bought myself a Raspberry Pi!",
        icon: Rasp,
        iconBg: "#A79B8F",
        date: "2017",
        points: [
            "I learned how to use a Linux OS",
            "I made projects such as a RTMP server for my cooking streams",
            "When Amazon released their Alexa API for developers I made an alexa clone with a smart display with OpenWeather API for a 2 way mirror project I built",
        ],
    },
    {
        title: "Operations Manager",
        company_name: "Heli-co",
        icon: mobile,
        iconBg: "#A79B8F",
        date: "November 2018 - April 2021",
        points: [
            "Among the hats I wore at this start up I also created and designed our website!",
            "I was responsible for regularly updating our site with images and updated information to drive traffic",
            "This is also where I learned about SEO",
        ],
    },
    {
        title: "Web Developer",
        company_name: "In my out of office time I leveraged my web design skills to create a business designing sites for clients!",
        icon: backend,
        iconBg: "#A79B8F",
        date: "January 2020 - Present",
        points: [
            "Developing and maintaining web applications clients needs.",
            "Collaborating with clients to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in design reviews implimenting regular updates.",
        ],
    },
    {
        title: "Full-Stack Web Developer Certificaiton",
        company_name: "University of Washington",
        icon: UW,
        iconBg: "#A79B8F",
        date: "June 2023",
        points: [
            "Develop a responsive,  user-friendly, intuitive, and secure full-stack website from with interactive features to cross-browser optimize traffic and user experience  using React, Node.js, and Express.",
            "Collaborate on a self-managed team of 4 developers to create high-quality products.",
            "Implemented automated testing using Jest frameworks for a REST website application",
            "Developed and deployed a fully-functioning web application using React, Node.js, and MySQL in 10 days.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            `I have the utmost confidence in Alivia’s ability to excel in the field of web design 
and UX/ UI. Her passion, technical proficiency, and dedication make her an ideal candidate for any 
position.I wholeheartedly recommend Alivia and believe she will contribute significantly to the 
success of your organization.`,
        name: "Eli Wood",
        designation: "Web Development Instructional Specialist",
        company: "University of Washington",
        image: "https://media.licdn.com/dms/image/D5635AQEkxAdauaPuWA/profile-framedphoto-shrink_200_200/0/1673399550731?e=1695441600&v=beta&t=qcKb0ppptBHCCENj5pRyUNoS3SRXpmJ-lzSjdjSH-eg",
    },
    // {
    //     testimonial:
    //         "...",
    //     name: "Imani Glass",
    //     designation: "CEO",
    //     company: "One by Faith",
    //     image: "https://images.squarespace-cdn.com/content/v1/617367c002d4700da6c49b60/bbcdcb37-f9f8-4437-95e0-87b0b38bae3e/IMG_5958.jpg?format=1000w",
    // },
    {
        testimonial:
            `Alivia consistently demonstrated an exceptional grasp of the technical concepts covered,
even at the demanding pace of the boot camp. She frequently posed thoughtful questions that highlighted her engagement with the
material and her commitment to true comprehension rather than mere completion.
            Additionally, Alivia was demonstrably a pleasure to work with. Her project groups
consistently praised her for her pleasant demeanor, as well as her capability to lead and
contribute to the project's overall direction. In one-on-one interactions, I similarly found
her to be an enjoyable and productive collaborator.`,
        name: "Henry Weigand",
        designation: "Instructional Staff",
        company: "EdX",
        image: "https://media.licdn.com/dms/image/C4D03AQETMao6givDIA/profile-displayphoto-shrink_200_200/0/1651617415975?e=1697673600&v=beta&t=_CLO0LEsVmKrRjzYM_vBeg87tMUNDh87qu8-exXfsgM",
    },
];

const projects = [
    {
        name: "DoodleDash",
        description:
            "A live, multiplayer web game that allows players to join a room and guess a randomized word based on a randomly selected player’s drawing on a live virtual white board before the time ends. Once players select to end the game the player with the most wins is announced!",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "mySQL",
                color: "pink-text-gradient",
            },
        ],
        image: doodlePoster,
        video: DoodleDash,
        source_code_link: "https://github.com/17anguyen/notPictionary#tech",
    },
    {
        name: "ChinguTalk",
        description:
            "A social media application with with account creation and modificaiton. Users are logged into a database based on shared interests and interests can be searched to find friends! The deployed link is disabled due to heroku hosting costs.",
        tags: [
            {
                name: "Node.js",
                color: "blue-text-gradient",
            },
            {
                name: "mySQL",
                color: "green-text-gradient",
            },
            {
                name: "Express Handlebars",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
        ],
        image: chinguPoster,
        video: chingu,
        source_code_link: "https://github.com/17anguyen/chingu-talk",
    },
    {
        name: "Event Planner",
        description:
            "This project displays my progress with understanding data persistence and creating multiple usable pages. This application is connected to Google APIs for location data and Calandar access to add events in the application to your calendar and send invites to listed attendees!",
        tags: [
            {
                name: "Google Location and Calendar API",
                color: "blue-text-gradient",
            },
            {
                name: "Materialize",
                color: "green-text-gradient",
            },
            {
                name: "Google Fonts",
                color: "pink-text-gradient",
            },
        ],
        image: plannerPoster,
        video: eventplan,
        source_code_link: "https://github.com/17anguyen/event-planner",
    },
    {
        name: "One By Faith",
        description:
            "Web-based platform that allows users to search, book, and manage individual spiritual services online and in person as well as group events, providing a convenient and efficient solution to manage scheduling and take payment.",
        tags: [
            {
                name: "Square",
                color: "blue-text-gradient",
            },
            {
                name: "AcuityScheduling",
                color: "pink-text-gradient",
            },
        ],
        image: obfPoster,
        video: onebyfaith,
        source_code_link: "https://www.onebyfaith.co/",
    },
    {
        name: "Zombie Ghost Games",
        description:
            "This is a web applicaiton built for a client in need of an ecommerse site to display his card games and provide the consumer with information.",
        tags: [
            {
                name: "Shopify",
                color: "blue-text-gradient",
            },
        ],
        image: zombiePoster,
        video: zombie,
        source_code_link: "https://zombieghostgames.com/",
    },

    {
        name: "Helico",
        description:
            "In my time as a start up operations manager I created this site for client aquisition, driving traffic, communicating information, and allowing scheduling",
        tags: [
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Square",
                color: "pink-text-gradient",
            },
        ],
        image: helicoPoster,
        video: helico,
        source_code_link: "https://www.heli-co.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
// Hi Livvy <3 you're really cute and I love you. Thank you for being in my life and I am so thankful that we have each other to work together like this. I'm really looking forward to watching you grow