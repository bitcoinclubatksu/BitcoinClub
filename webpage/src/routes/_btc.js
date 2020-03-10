import axios from 'axios';
const hostname = 'https://api.coincap.io';
const path = '/v2/assets/bitcoin';
const url = `${hostname+path}`;

export default async function getBTCPrice() {
    try {
        let result = await axios.get(url);
        return result.data.data;
    } catch (err) {
        console.error('something went wrong');
        console.log(err);
    }
};
