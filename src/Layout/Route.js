import Assortiment from "../Pages/Assortiment";
import BaseKnowladge from "../Pages/BaseKnowladge";
import Home from "../Pages/HomePage/Home";
import HowWorks from "../Pages/HowWorks";
import Orders from "../Pages/Orders";

export const routes = [
    { path: '/', Component: <Home /> },
    { path: '/how-works', Component: <HowWorks /> },
    { path: '/base-knowladge', Component: <BaseKnowladge /> },
    { path: '/instruction', Component: <Orders /> },
    { path: '/assortiment-info', Component: <Assortiment /> },
]