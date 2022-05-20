import * as axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '4d0cb322-afd5-4220-bd25-94b8126ab558'
    }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    profile(profileId){
        return profileAPI.getProfile(profileId)
    }
}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus(profileId){
        return instance.get(`/profile/status/${profileId}`)
            .then(response=>{
                return response.data
            })
    },

    updateStatus(status){
        return instance.put(`/profile/status`, {status: status})
    }

}

export const authAPI={
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe= false, captcha= false){
        return instance.post(`/auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`/auth/login`);
    }
}






