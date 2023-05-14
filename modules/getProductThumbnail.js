import config from "~/assets/data/config.json"


export default function getProductThumbnail(product) {

    let filePath;

    if (product.localThumbs && product.localThumbs[0]) {
        filePath = product.localThumbs[0]
    } else if (product.localThumb) {
        filePath = product.localThumb
    } else {
        filePath = ''
    }

    const thumbnail = "/assets/images/" + filePath

    let dotIndex = thumbnail.lastIndexOf(".");
    if (dotIndex === -1) {
        return thumbnail; // No extension found, return the original thumbnail.
    }

    return thumbnail.substr(0, dotIndex) + ".webp";
}