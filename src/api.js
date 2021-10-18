import axios from "axios";

const url = "http://comp-523-api-aghayes.apps.cloudapps.unc.edu";

const api = {

    put_login: (user, callback) => {
        const path = `${url}/login`;
        axios
            .put(path, {
                name: user.name,
                password: user.password
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    post_register: (user, callback) => {
        const path = `${url}/register`;
        axios
            .post(path, {
                name: user.name,
                password: user.password,
                role: user.role
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    post_template_create: (template, callback) => {
        const path = `${url}/template/create`;
        axios
            .post(path, {
                name: template.name,
                headers: template.headers,
                token: template.token
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    get_template: (token, callback) => {
        const path = `${url}/template/`;
        axios
            .get(path, {params: {
                token: token
            }})
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },

    // TODO 

}

export default api;