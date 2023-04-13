import * as AuthStorage from './auth-storage';

const upload = async (file: any) => {
	try {
	  const { name, renameFile, type } = file;

	  if (!file) {
	    throw new Error('File not found');
	  }

	  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

	  const options = {
	    method: 'POST',
	    body: JSON.stringify({
	      fileName: renameFile || +new Date() + '-' + name,
	      contentType: type,
	    }),
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	      ...(AuthStorage.getToken() && { Authorization: AuthStorage.getToken() }),
	    },
	  };

	  const response = await fetch(BASE_URL + '/containers/get-signed-url', options);

	  const data = await response.json();

	  if (response.status !== 200) {
	    return Promise.reject(data);
	  }

	  const optionsS3 = {
	    method: 'PUT',
	    body: file,
	    headers: {
	      'Content-Type': type,
	    },
	  };

	  const a = await fetch(data?.singedUrl, optionsS3);
	  await a.text();

	  return Promise.resolve(data || {});
	} catch (err) {
		return Promise.reject(err);
	}
};

export default upload;
