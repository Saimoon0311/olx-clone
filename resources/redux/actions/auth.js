import { LOGIN } from "../../config/urls"
import { apiPost } from "../../util/utils"

export function login (data){
    return apiPost(LOGIN,data)
}

// export function login (data){
// return apiPost(SIGNUP,data)
// }