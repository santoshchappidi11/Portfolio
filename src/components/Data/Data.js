import ushopImage from "../../Images/ushop.png";
import connectImage from "../../Images/connect.png";
import taskImage from "../../Images/task-managements.png";
import galleryImage from "../../Images/gallery.png";
import shoppingCartImage from "../../Images/shopping-cart.png";
// import shoppingImage from "../../Images/headphones-shopping.png";

// import htmlImg from "../../Images/html-5.png";
// import jsImg from "../../Images/js.png";
// import cssImg from "../../Images/css-3.png";
import reactImg from "../../Images/react.png";
import expressImg from "../../Images/express.png";
import mongodbImg from "../../Images/mongodb.png";
import nodeImg from "../../Images/node-js.png";
import tailwindImg from "../../Images/tailwind.png";
import nextImg from "../../Images/next-js.png";

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
import checkoutLogo from "../../Images/checkout.png";
import filterLogo from "../../Images/filter.png";
import dragdropLogo from "../../Images/drag-drop.png";
import randomLogo from "../../Images/random.png";
import singlePhotoLogo from "../../Images/singlephoto.png";
import downloadLogo from "../../Images/donwload.png";
import viewLogo from "../../Images/view.png";
import paginationLogo from "../../Images/pagination.png";
import quantityLogo from "../../Images/quantity.png";
// import forecastLogo from "../../Images/forecast.png";
// import countryLogo from "../../Images/country.png";
// import cityLogo from "../../Images/city.png";

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
    languages: [
      { icon: reactImg, text: "React" },
      { icon: nodeImg, text: "Node.js" },
      { icon: expressImg, text: "Express" },
      { icon: mongodbImg, text: "MongoDB" },
    ],
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
    languages: [
      { icon: reactImg, text: "React" },
      { icon: nodeImg, text: "Node.js" },
      { icon: expressImg, text: "Express" },
      { icon: mongodbImg, text: "MongoDB" },
    ],
    view: "View",
    code: "Code",
  },
  {
    id: 3,
    title: "task management",
    project_url: "https://task-management-3.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/task-management-nextjs",
    image: taskImage,
    description: "Task Management website built using Next JS",
    logos: [
      loginLogo,
      loginLogo,
      addLogo,
      editLogo,
      deleteLogo,
      dragdropLogo,
      // deleteAllLogo,
      // retrieveLogo,
      // retrieveLogo,
    ],
    features: [
      "login",
      "register",
      "add task (title, description, due date, priority, status)",
      "edit task (title, description, due date, priority, status)",
      "delete task",
      "drag and drop to update task status",
      // "delete all tasks",
      // "retrieve deleted tasks",
      // "retrieve completed tasks",
    ],
    languages: [
      { icon: nextImg, text: "Next" },
      { icon: tailwindImg, text: "tailwindCSS" },
      { icon: nodeImg, text: "Node.js" },
      { icon: expressImg, text: "Express" },
      { icon: mongodbImg, text: "MongoDB" },
    ],
    view: "View",
    code: "Code",
  },
  {
    id: 4,
    title: "Picture gallery",
    image: galleryImage,
    project_url: "https://gallery-app-03.vercel.app/",
    github_url: "https://github.com/santoshchappidi11/picture-gallery-app",
    description: "Gallery application built with Next JS",
    logos: [
      filterLogo,
      randomLogo,
      singlePhotoLogo,
      paginationLogo,
      downloadLogo,
      viewLogo,
    ],
    features: [
      "search by category",
      "random photos on refresh",
      "single photo details",
      "pagination",
      "download photo",
      "view on unsplash",
    ],
    languages: [
      { icon: nextImg, text: "Next JS" },
      { icon: tailwindImg, text: "TailwindCSS" },
    ],
    view: "View",
    code: "Code",
  },
  {
    id: 5,
    title: "shopping cart",
    project_url: "https://shopping-cart-03.netlify.app/",
    github_url: "https://github.com/santoshchappidi11/shopping-cart-nextjs",
    image: shoppingCartImage,
    description: "Shopping Cart built with Next JS",
    logos: [
      filterLogo,
      cartLogo,
      removeCartLogo,
      searchLogo,
      checkoutLogo,
      quantityLogo,
    ],
    features: [
      "filter products",
      "add to cart",
      "remove from cart",
      "search products",
      "checkout from cart",
      "handle product quantity",
    ],
    languages: [
      { icon: nextImg, text: "Next JS" },
      { icon: tailwindImg, text: "TailwindCSS" },
    ],
    view: "View",
    code: "Code",
  },
];
