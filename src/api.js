import axios from "axios";

const url = "http://comp-523-api-aghayes.apps.cloudapps.unc.edu";

const api = {

    login: (body, callback) => {
        const path = `${url}/login`;
        axios
            .put(path, {
                name: body.name,
                password: body.password
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },

    register: (body, callback) => {
        const path = `${url}/register`;
        axios
            .post(path, {
                name: body.name,
                password: body.password,
                role: body.role
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // TODO 

}

export default api;