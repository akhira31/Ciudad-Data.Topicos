import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://ghoapi.azureedge.net/api/', // Base de la OMS
    timeout: 10000,
    headers: {
        Accept: 'application/json'
    }
});

export default apiClient;