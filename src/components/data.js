export const myNavLinks = [
    {
        id:1,
        name: "Home",
        isActive: true,
    },
    {
        id:2,
        name: "Skills",
        isActive: false,
    },
    {
        id:3,
        name: "About",
        isActive: false,
    },
    {
        id:4,
        name: "Projects",
        isActive: false,
    }
];

export const skills = [
    {
        id:1,
        name: 'Front-End',
        classname: 'frontend',
        skillNames:[
                {star: 'fa fa-star', skill: 'ReactJs'}, 
                {skill: 'JavaScript'},
                {skill: 'TypeScript'},
                {skill: 'Bootstrap'},
                {skill: 'SASS'},
                {skill: 'CSS'}
            ],
    },

    {
        id:2,
        name: 'Back-End',
        classname: 'backend',
        skillNames:[
                {skill: 'NodeJs'}, 
                {skill: 'Python'},
                {skill: 'PHP'}
            ],
    },

    {
        id:3,
        name: '-Others',
        classname: 'others',
        skillNames:[
                {skill: 'SQL'}, 
                {skill: 'DART'},
                {skill: 'Git'}
            ],
    }
];

export const projects = [
    {
        id: 1,
        isToggled: false,
        img: "../images/availsReact.jpeg",
        name: 'e-Commerce' ,
        language: 'ReactJs',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
     useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`
    },
    {
        id: 2,
        isToggled: false,
        img: "../images/availsJs.jpeg",
        name: 'e-Commerce' ,
        language: 'JavaScript',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
     useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`
    },
    {
        id: 3,
        isToggled: false,
        img: "../images/todo.jpeg",
        name: 'Todo',
        language: 'JavaScript',
        description: `I built this project from scratch using React as a result of mastering the use of CRUD operations in React.
        I also made use of React-Hooks such as useEffect, 
     useState and few customHooks. i aslo used some react libraries such as react-hook-form, react-scroll, react-router-dom and more.`
    }
];