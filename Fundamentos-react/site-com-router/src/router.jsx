import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Moveis from "./pages/Moveis";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: "/History",
            element: <History />
        },
        {
            path: "/Moveis",
            element: <Moveis />
        }]
    },

])

export default router