import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";

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

]


