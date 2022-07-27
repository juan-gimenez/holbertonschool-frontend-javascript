export default function getgetFullResponseFromApi(success)  {
    return new Promise((resolve, reject) => {
	/* Return a Promise  */
	if (success == NULL) {
            reject(new Error('The fake API is not working currently'));
	} else {
            resolve({
		status: 200,
		body: 'Success',
	    });
	}
    });
}
