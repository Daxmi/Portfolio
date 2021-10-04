import karzym from "./components/image/karzym.png";
import eportal from "./images/e-portal.png";
import todo from "./images/todo.png";
import weather from "./images/weather.png";

const recentWorks = {
    works: [
        {
            id: 1,
            name: "Photography",
            img : karzym,
            description: "A photography website",
            stack: "Html, CSS, Vanilla Javascript",
            link: "https://daxmi.github.io/Karzym/",
        },
        {
            id: 2,
            name: "e-portal",
            img : eportal,
            description: "An online learning platform",
            stack: "Html, CSS, Vanilla Javascript",
            link: "https://daxmi-eportal.netlify.app/",
        },
        {
            id: 3,
            name: "To-do",
            img : todo,
            description: "A to-do list App",
            stack: "Html, CSS, Vanilla Javascript",
            link: "https://daxmi-to-do.netlify.app/",
        },
        {
            id: 4,
            name: "Weather",
            img : weather,
            description: "A weather app for 5 days",
            stack: "Html, CSS, React",
            link: "https://daxmi-weather.netlify.app/",
        }
    ]
}

export default recentWorks;