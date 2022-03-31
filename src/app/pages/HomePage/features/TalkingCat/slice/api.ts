import { Apis, PUBLIC_URL } from 'utils/constants';

export const getTalkingCat = text => {
  const url = `${PUBLIC_URL}/${Apis.TALKING_CAT}/${text}`;

  return fetch(url)
    .then(response => {
      console.log(response);
      return response.blob();
    })
    .then(blobImg => {
      const url = URL.createObjectURL(blobImg);
      return url;
    });
};
