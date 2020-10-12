import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://www.filestackapi.com/api',
    timeout: 15000
});

export function uploadFile(file) {
    return (
        httpClient.post('/store/S3', file, {
            params: {
                key: 'ABUGkkqrDRTO5iPbtrZfcz'
            }
        })
            .then(result => { console.log(result); return result.data })
    );
}
