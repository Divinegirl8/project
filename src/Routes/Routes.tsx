import HeroPage from "../component/HeroPage";
import Homepage from "../component/features/Homepage";
import Page from "../component/About";
import path from "path";
import About from "../component/About";
import Skills from "../component/Skills";
import Qualification from "../component/Qualification";
import Portfolio from "../component/Portfolio";

export const Routes = [

    {
        path : "/",
        element : <Homepage/>
    },
    {
        path : "/heroPage",
        element : <HeroPage/>
    },
    {
        path : "/qualification",
        element : <Qualification/>
    },
    {
        path: "/about",
        element : <About/>
    },
    {
        path :"/skills",
        element : <Skills/>
    },
    {
        path: "/portfolio",
        element : <Portfolio/>
    }
]