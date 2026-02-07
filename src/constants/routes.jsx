import About from "../pages/About/about";
import Blog from "../pages/Blog/blog";
import Contact from "../pages/Contact/contact";
import Partfolio from "../pages/Partfolio/partfolio";


export const routes = [
    {
        key: 0,
        path: "/",
        element: <Partfolio />,
    },
    {
        key: 1,
        path: "/about",
        element: <About />,
    },
  
    {
        key: 2,
        path: "/portfolio",
        element: <Partfolio />,
    },
    {
        key: 3,
        path: "/blog",
        element: <Blog />,
    },
    {
        key: 4,
        path: "/contact",
        element: <Contact />,
    },
];
