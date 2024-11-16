import HeroPage from "../component/HeroPage";
import Homepage from "../component/Homepage";
import Page from "../component/About";

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
        path : "/page",
        element : <Page/>
    },
]