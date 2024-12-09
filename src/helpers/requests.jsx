import { setLoggedStatus } from "../redux/features/authSlice"

const ApiEndpoint = `${import.meta.env.VITE_APP_API_URL}`

export const getToken = () => {
    return localStorage.getItem("token")
}

export const requestWithAuth = async (method, url, action, api, body) => {
    try {
        const token = getToken()
    
    
        const response = await fetch(`${ApiEndpoint}${url}${action != null ? action : ""}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify(body)
        });
        const json = await response.json();

        if(response.status == 401 && api){
            api.dispatch(setLoggedStatus(false))
            localStorage.removeItem("token")
            window.location.href = '/giris';
        }
        return json
        
    } 
    
    catch (error) {
        console.log(error);
        console.log("errore girdi");
        
    }
}

export const requestWithAuthForm = async (method, url, action, api, body) => {
    try {
        const token = getToken()
        console.log(body);
    
    
        const response = await fetch(`${ApiEndpoint}${url}${action != null ? action : ""}`, {
            method: method,
            headers: {
                "Authorization": "Bearer " + token,
            },
            body: body
        });
        const json = await response.json();

        if(response.status == 401 && api){
            api.dispatch(setLoggedStatus(false))
            localStorage.removeItem("token")
            window.location.href = '/giris';
        }
        return json
        
    } 
    
    catch (error) {
        console.log(error);
        console.log("errore girdi");
        
    }
}
export const requestWithoutAuthForm = async (method, url, action, api, body) => {
    try {
    
        const response = await fetch(`${ApiEndpoint}${url}${action != null ? action : ""}`, {
            method: method,
            body: body
        });
        const json = await response.json();

        return json
        
    } 
    
    catch (error) {
        console.log(error);
        console.log("errore girdi");
        
    }
}
export const requestWithoutAuth = async (method, url, action, api, body) => {
    const response = await fetch(`${ApiEndpoint}${url}${action != null ? action : ""}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(body)
    });
    const json = await response.json();
    return json

}


// export const tryLoginOnPageLoaded = async () => {
//     if (getToken()) {

//         const req = await fetch(ApiEndpoint + "/users/get-my-profile", {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer " + localStorage.getItem("token")

//             }

//         })
//         const res = await req.json()
//         if (res.success == 1) {
//             return true
//         } else {
//             if (getRefreshToken()) {
//                 const req = await fetch(ApiEndpoint + "/users/set-new-token", {
//                     method: "PATCH",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         refreshToken: getRefreshToken()
//                     })

//                 })
//                 const res = await req.json()

//                 if (res.success == 1) {
//                     localStorage.setItem("token", res?.data[0]?.accessToken)
//                     return true
//                 } else {
//                     return false
//                 }

//             }
//         }
//     }
// }