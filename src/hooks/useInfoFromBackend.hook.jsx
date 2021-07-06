import { useQuery } from 'react-query';
import axios from 'axios';

export const useInfoFromBackend = url => {
    const response = useQuery(`get data from ${url}`, async () => {
        const { data } = await axios.get(url)
        return data;
    })
    return response;
}