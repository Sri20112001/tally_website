import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Service from "./Pages/Services/Service";
import Solutions from "./Pages/Solutions/Solutions";

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
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
