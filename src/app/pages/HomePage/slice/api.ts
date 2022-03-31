import { Apis, PUBLIC_URL } from 'utils/constants';

export const getAllCats = () => {
  const url = `${PUBLIC_URL}/${Apis.CATS}`;
  return fetch(url).then(response => response.json());
};
