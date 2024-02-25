import landingPageImage from "../../Images/landing-page.png";
import weatherAppImage from "../../Images/weather-app.png";
import calculatorAppImage from "../../Images/calculator-app.png";
import todoAppImage from "../../Images/todo-app.png";
import shoppingImage from "../../Images/headphones-shopping.png";
import facebookImage from "../../Images/facebook.png";
import meeshoImage from "../../Images/meesho.png";
import taskImage from "../../Images/task-management.png";

import htmlImg from "../../Images/html-5.png";
import cssImg from "../../Images/css-3.png";
import jsImg from "../../Images/js.png";
import reactImg from "../../Images/react.png";
import expressImg from "../../Images/express.png";
import mongoImg from "../../Images/mongodb.png";
import nodeImg from "../../Images/node-js.png";
import tailwindImg from "../../Images/tailwind.png";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "#Home",
  },
  {
    id: 2,
    title: "About",
    url: "#About",
  },
  {
    id: 3,
    title: "Works",
    url: "#Works",
  },
  {
    id: 4,
    title: "Contact",
    url: "#Contact",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "meesho clone",
    project_url: "https://meesho-clone-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/meesho-react-clone",
    image: meeshoImage,
    description: "An E-Commerce website built using MERN.",
    languages: [reactImg, nodeImg, expressImg, mongoImg],
    view: "View",
    code: "Code",
  },
  {
    id: 2,
    title: "facebook clone",
    project_url: "https://facebook-clone-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/facebook-react-clone",
    image: facebookImage,
    description: "Social Media website",
    languages: [reactImg, nodeImg, expressImg, mongoImg],
    view: "View",
    code: "Code",
  },
  {
    id: 3,
    title: "task management",
    project_url: "https://task-management-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/Task-Management-App",
    image: taskImage,
    // description:
    //   "This is a simple CALCULATOR-APP that we can use to perform operations such as addition, subtraction, multiplication, and division. It is built using JavaScript ES6 Classes.",
    languages: [reactImg, tailwindImg, nodeImg, expressImg, mongoImg],
    view: "View",
    code: "Code",
  },
  {
    id: 4,
    title: "weather forecast",
    image: weatherAppImage,
    project_url: "https://weather-application-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/weather-app-react",
    // description:
    //   "This is a simple Task-Manager-App, In this app, you can schedule and manage your daily tasks. You can create, edit, delete them, and you can mark them as completed once they have been finished.",
    languages: [reactImg, cssImg],
    view: "View",
    code: "Code",
  },
  {
    id: 5,
    title: "shopping cart",
    project_url: "https://headphones-shopping.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/weather-app-react",
    image: shoppingImage,
    // description:
    //   "It is a landing page where users can get free restaurant-style recipes. The purpose is to draw users with some free recipes, so that they will sign up for our page.",
    languages: [reactImg, cssImg],
    view: "View",
    code: "Code",
  },
];
