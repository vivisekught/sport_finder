import {
    FULLTRAINING_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    QUESTIONARY_ROUTE,
    QUESTIONARY_ROUTE_SECOND,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import FullTraining from "./pages/FullTraining";
import Questionary from "./pages/Questionary";
import QuestionarySecond from "./pages/Questionary_second";
import Questionary_second from "./pages/Questionary_second";

export const authRoutes = [

]



export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path : LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: MAIN_ROUTE,
        Component: Main
    },

    {
        path: FULLTRAINING_ROUTE,
        Component: FullTraining
    },

    {
        path: QUESTIONARY_ROUTE,
        Component : Questionary
    },

    {
        path: QUESTIONARY_ROUTE_SECOND,
        Component: Questionary_second
    }

]


