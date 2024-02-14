import landingPageImage from "../../Images/landing-page.png";
import weatherAppImage from "../../Images/weather-app.png";
import calculatorAppImage from "../../Images/calculator-app.png";
import todoAppImage from "../../Images/todo-app.png";
import shoppingImage from "../../Images/headphones-shopping.png";

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
    title: "Restaurant Recipe",
    url: "https://restaurant-recipe.netlify.app/",
    image: landingPageImage,
    description:
      "It is a landing page where users can get free restaurant-style recipes. The purpose is to draw users with some free recipes, so that they will sign up for our page.",
    languages: "HTML, CSS, JAVASCRIPT",
    view: "View",
    code: "Code",
  },
  {
    id: 2,
    title: "Weather App",
    url: " https://weather-app-switch.netlify.app/",
    image: weatherAppImage,
    description:
      "This is a simple WEATHER-APP, On search, it will show all the current weather details. These weather details have been fetched using an external API.",
    languages: "HTML, CSS, JAVASCRIPT",
    view: "View",
    code: "Code",
  },
  {
    id: 3,
    title: "Calculator App",
    url: "https://calc-application.netlify.app/",
    image: calculatorAppImage,
    description:
      "This is a simple CALCULATOR-APP that we can use to perform operations such as addition, subtraction, multiplication, and division. It is built using JavaScript ES6 Classes.",
    languages: "HTML, CSS, JAVASCRIPT",
    view: "View",
    code: "Code",
  },
  {
    id: 4,
    title: "Task-Manager-App",
    image: todoAppImage,
    url: "https://task-manager-application.netlify.app/",
    description:
      "This is a simple Task-Manager-App, In this app, you can schedule and manage your daily tasks. You can create, edit, delete them, and you can mark them as completed once they have been finished.",
    languages: "HTML, CSS, REACT JS",
    view: "View",
    code: "Code",
  },
  {
    id: 5,
    title: "Shopping Cart",
    image: shoppingImage,
    url: "https://headphones-shopping.netlify.app/",
    description:
      "This is a HEADPHONES SHOPPING CART APP. It has most of the features you'd find on a normal E-Commerce website.",
    languages: "HTML, CSS, REACT JS",
    view: "View",
    code: "Code",
  },
];
