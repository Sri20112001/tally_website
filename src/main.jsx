import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Service from "./Pages/Services/Service";
import Solutions from "./Pages/Solutions/Solutions";
import Contacts from "./Pages/Contacts/Contacts";
import Addons from "./Pages/Addons/Addons";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/services",
        element: <Service />,
    },
    {
        path: "/our-solutions",
        element: <Solutions />,
    },
    {
        path: "/contact",
        element: <Contacts />,
    },
    {
        path: "/addons",
        element: <Addons />,
    },
    {
        path: "/about-us",
        element: <AboutUs/>
    },
    {
        path: "/*",
        element: <PageNotFound />,
    },
    
    
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
