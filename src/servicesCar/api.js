import axios from "axios";

export const requestCars = async () => {
    const {data} = await axios.get( "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
    return data
}

export const requestCarsByQuery = async (query = '') => {
    const { data } = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/search?q=${query}`);
    return data
}