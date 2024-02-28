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
    description: "E-Commerce website built using MERN",
    features: [
      "login",
      "register",
      "add product",
      "delete product",
      "edit product",
      "add to cart",
      "remove from cart",
      "stripe payment integration",
      "profile update",
    ],
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
    description: "Social Media website built using MERN",
    features: [
      "login",
      "register",
      "add post",
      "delete post",
      "like/unlike your post",
      "add/edit/delete your comment on post",
      "add/delete your stroy",
      "profile update (upload/retrieve images using multer with cloudinary)",
      "Search friend",
      "follow/unfollow friend",
      "see only following friend posts",
    ],
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
    description: "Task Management website built using MERN",
    features: [
      "login",
      "register",
      "add task (title, description, due date, priority, status)",
      "edit task (title, description, due date, priority, status)",
      "delete task",
      "retrieve deleted tasks",
      "retrieve completed tasks",
    ],
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
    description: "Weather Application built with React JS",
    features: ["search city", "search country", "five days forecast"],
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
    description: "Shopping Cart built with React JS",
    features: [
      "filter products",
      "add to cart",
      "remove from cart",
      "search products",
      "checkout from cart",
    ],
    languages: [reactImg, cssImg],
    view: "View",
    code: "Code",
  },
];
