import axios from "axios";

export const digitalCurrencies = async () => {
    return await axios.get('https://api.coincap.io/v2/assets');
}

export const digitalCurrency = async (id) => {
    return await axios.get(`https://api.coincap.io/v2/assets/${id}`)
}
