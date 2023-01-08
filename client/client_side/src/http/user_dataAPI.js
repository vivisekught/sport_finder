import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createUserData = async (user_data) => {
    const {data} = await $host.post('api/user_data', user_data)
    return data
}

// export const updateUserData = async (user_data) => {
//     // const {data} = await $host.update
//     return data
// }