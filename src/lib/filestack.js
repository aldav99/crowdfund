import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://www.filestackapi.com/api',
    timeout: 10000
});

export function uploadFile(file) {
    return (
        httpClient.post('/store/53', file, {
            params: {
                key: '00557caf7f7e73c0872b'
            }
        })
            .then(result => { console.log(result); return result.data })
    );
}
