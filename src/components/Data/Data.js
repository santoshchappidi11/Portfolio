// import landingPageImage from "../../Images/landing-page.png";
// import calculatorAppImage from "../../Images/calculator-app.png";
// import todoAppImage from "../../Images/todo-app.png";
// import facebookImage from "../../Images/facebook.png";
import weatherAppImage from "../../Images/weather-app.png";
import shoppingImage from "../../Images/headphones-shopping.png";
import ushopImage from "../../Images/ushop.png";
import taskImage from "../../Images/task-management.png";
import connectImage from "../../Images/connect.png";

// import htmlImg from "../../Images/html-5.png";
// import jsImg from "../../Images/js.png";
import cssImg from "../../Images/css-3.png";
import reactImg from "../../Images/react.png";
import expressImg from "../../Images/express.png";
import mongoImg from "../../Images/mongodb.png";
import nodeImg from "../../Images/node-js.png";
import tailwindImg from "../../Images/tailwind.png";

import searchLogo from "../../Images/search.png";
import loginLogo from "../../Images/login.png";
import addLogo from "../../Images/plus.png";
import deleteLogo from "../../Images/delete.png";
import storyLogo from "../../Images/story.png";
import followLogo from "../../Images/add-users.png";
import profileLogo from "../../Images/profile.png";
import postLogo from "../../Images/post.png";
import likeLogo from "../../Images/like.png";
import followPostsLogo from "../../Images/image.png";
import commentLogo from "../../Images/comment.png";
import cartLogo from "../../Images/cart.png";
import removeCartLogo from "../../Images/remove-cart.png";
import stripeLogo from "../../Images/payment.png";
import editLogo from "../../Images/edit.png";
import deleteAllLogo from "../../Images/delete-all.png";
import retrieveLogo from "../../Images/rotate.png";
import checkoutLogo from "../../Images/checkout.png";
import filterLogo from "../../Images/filter.png";
import cityLogo from "../../Images/city.png";
import forecastLogo from "../../Images/forecast.png";
import countryLogo from "../../Images/country.png";

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
    title: "U SHOP",
    project_url: "https://ushop-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/u-shop",
    image: ushopImage,
    description: "E-Commerce website built using MERN",
    logos: [
      loginLogo,
      loginLogo,
      addLogo,
      deleteLogo,
      editLogo,
      filterLogo,
      cartLogo,
      removeCartLogo,
      stripeLogo,
      profileLogo,
    ],
    features: [
      "login",
      "register",
      "add product",
      "delete product",
      "edit product",
      "filter products",
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
    title: "connect",
    project_url: "https://connect-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/connect",
    image: connectImage,
    description: "Social Media website built using MERN",
    logos: [
      loginLogo,
      loginLogo,
      postLogo,
      deleteLogo,
      likeLogo,
      commentLogo,
      storyLogo,
      profileLogo,
      searchLogo,
      followLogo,
      followPostsLogo,
    ],
    features: [
      "login",
      "register",
      "add post",
      "delete post",
      "like/unlike post",
      "add/edit/delete comment on post",
      "add/view/delete story",
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
    logos: [
      loginLogo,
      loginLogo,
      addLogo,
      editLogo,
      deleteLogo,
      deleteAllLogo,
      retrieveLogo,
      retrieveLogo,
    ],
    features: [
      "login",
      "register",
      "add task (title, description, due date, priority, status)",
      "edit task (title, description, due date, priority, status)",
      "delete task",
      "delete all tasks",
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
    logos: [cityLogo, countryLogo, forecastLogo],
    features: ["search city", "search country", "five days forecast"],
    languages: [reactImg, cssImg],
    view: "View",
    code: "Code",
  },
  {
    id: 5,
    title: "shopping cart",
    project_url: "https://headphones-shopping.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/shopping-cart",
    image: shoppingImage,
    description: "Shopping Cart built with React JS",
    logos: [filterLogo, cartLogo, removeCartLogo, searchLogo, checkoutLogo],
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
