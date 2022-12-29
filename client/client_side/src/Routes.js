import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import main from "./pages/Main";

export const authRoutes = [
    {

    }
]



export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path : LOGIN_ROUTE,
        Component: Auth,
    },

    {
        path : MAIN_ROUTE,
        Component: main,
    },

]


