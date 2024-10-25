import { constants } from '../utils/constants.js'
import axios from 'axios';

export const loginApiResponse = async (username, password) => {
    const data = {
        "username": username,
        "password": password
    }
    const resp = await axios.post(`${constants.NODE_URL}/login`,
        data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return resp
}