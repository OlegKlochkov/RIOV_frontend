import axios from "axios";

const url = `http://localhost:8080`;
// const headers = { 'Content-Type': 'application/json' };

export const getData = async () => {
    try {
        const response = await axios.get(`${url}/first/object`);

        return response;
    } catch (e) {
        console.error('getData', e);
    }
}

export const createData = async (data) => {
    try {
        const response = await axios.post(`${url}/first/object`, data);

        return response;
    } catch (e) {
        console.error('createData', e);
    }
}