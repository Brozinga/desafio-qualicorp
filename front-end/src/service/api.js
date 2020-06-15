import axios from 'axios';

const URL_BASE = 'http://localhost:3333';

export default {
    GetAll: (callback) => {
        const url = URL_BASE + '/api/v1/clients';
        axios.get(url).then((values) => {
            if (callback) {
                callback(values, null);
            }
        }).catch(err => {
            callback(null, err.response.data.message);
        })
    },
    GetById: (id, callback) => {
        const url = URL_BASE + `/api/v1/client/${id}`;
        axios.get(url).then((values) => {
            if (callback) {
                callback(values, null);
            }
        }).catch(err => {
            callback(null, err.response.data.message);
        })
    },
    Create: (data, callback) => {
        const url = URL_BASE + `/api/v1/client`;
        axios.post(url, data).then((values) => {
            if (callback) {
                callback(values, null);
            }
        }).catch(err => {
            callback(null, err.response.data.message);
        })
    },
    Put: (id, data, callback) => {
        const url = URL_BASE + `/api/v1/client/${id}`;
        axios.put(url, data).then((values) => {
            if (callback) {
                callback(values, null);
            }
        }).catch(err => {
            callback(null, err.response.data.message);
        })
    },
    Delete: (id, callback) => {
        const url = URL_BASE + `/api/v1/client/${id}`;
        axios.delete(url).then((values) => {
            if (callback) {
                callback(values, null);
            }
        }).catch(err => {
            callback(null, err.response.data.message);
        })
    }
}