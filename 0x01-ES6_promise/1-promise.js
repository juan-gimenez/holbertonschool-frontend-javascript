export default function getFullResponseFromApi(success)  {
    return new Promise((resolve, reject) => {
	/* Return a Promise  */
	if (success) {
            resolve({ status: 200, body: 'Success' });
	} else {
            reject(Error('The fake API is not working currently'));
	}
    });
}
