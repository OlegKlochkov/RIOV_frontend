import axios from "axios";

const url = `http://localhost:8080`;
// const headers = { 'Content-Type': 'application/json' };

export const getData = async (path) => {
    try {
        const response = await axios.get(`${url}/${path}`);

        return response;
    } catch (e) {
        console.error('getData', e);
    }
}

export const createData = async (path, data) => {
    try {
        const response = await axios.post(`${url}/${path}`, data);

        return response;
    } catch (e) {
        console.error('createData', e);
    }
}