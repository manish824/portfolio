import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Leave Management System',
        description: "Streamlined a Management System by integrating Servlets and JDBC, achieving a 20% improvement in data processing efficiency and enhancing user interface responsiveness.Developed Interface using CSS, HTML, and JAVA and worked on MySQL for validation and creating database tables.",
        tools: ['Server', 'JDBC', 'SQL', 'CSS', 'HTML', 'My SQL'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Institute’s tutorial System',
        description: 'Developed a user-friendly tutorial platform featuring secure authentication, integrating JDBC for efficient and reliable data handling, significantly enhancing the accessibility of educational resources. Designed and implemented a highly responsive user interface utilizing CSS, HTML, and JSP, significantly enhancing user interaction by incorporating advanced JavaScript features.',
        tools: ['JDBC' | 'JSP' | 'CSS'| 'Secure Authentication'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Density Based Road Prediction',
        description: 'Built an application to determine the best route from one location to another using density sensors which are interfaced with the Arduino. This helps in saving time and significantly reduces greenhouse gas emissions.Developed Interface using CSS, HTML, and PHP. I also worked on MySQL for validation, creating database tables, and storing data.',
        tools: ['React','PHP' | 'SQL' | 'CSS' | 'HTML'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];