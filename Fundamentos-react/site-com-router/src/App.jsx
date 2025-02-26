import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserContext from "./UseContext";

import SilverSpider from "./assets/SilverSpider.jpg";
import TheSpider from "./assets/TheSpider.jpg";
import TheFly from "./assets/TheFly.jpg";
import StanLee from "./assets/StanLeeHomemAranha.jpg";

const images = {StanLee, SilverSpider, TheSpider, TheFly}

export default function App(){
  return(
    <UserContext.Provider value={images}>
    <RouterProvider router={router} />
    </UserContext.Provider>
  )
}