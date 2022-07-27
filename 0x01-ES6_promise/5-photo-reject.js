export default function uploadPhoto(fileName) {
    /* upload reject */
    return Promise
        .reject(new Error(`${fileName} cannot be processed`));
}
