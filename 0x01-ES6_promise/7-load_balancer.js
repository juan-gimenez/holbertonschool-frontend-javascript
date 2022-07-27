export default function loadBalancer(chinaDownload, USDownload) {
/* promise that resolved the first */
    return Promise.race([chinaDownload, USDownload]);
}
