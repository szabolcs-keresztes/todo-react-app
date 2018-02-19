
import axios from "axios";

const url = "http://localhost:54973/api/todo";

export default {
    get: () => axios.get(url).then(response => response.data),

    post: (todo) => axios.post(url, todo).then(response => response.data),

    put: (id, todo) => axios.put(`${url}/${id}`, todo),

    delete: (id) => axios.delete(`${url}/${id}`),
};
