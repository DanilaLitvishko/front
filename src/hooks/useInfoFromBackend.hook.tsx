import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

import { OptionalInformation } from '../interfaces/optional-information.interface';

export const useInfoFromBackend = (url:string):UseQueryResult<OptionalInformation[], Error> => {
	return useQuery(`get data from ${url}`, async ():Promise<OptionalInformation[]> => {
		return axios.get(url).then(resp => resp.data);
	});
};