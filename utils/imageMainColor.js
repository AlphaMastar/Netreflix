const ColorThief = require('colorthief');

function getImageColorRGB(Url) {
    return new Promise((resolve, reject) => {
        ColorThief.getColor(Url)
            .then((color) => {
                let [r, g, b] = color;
                let hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
                let hexColor = {"RGB": `0x${hex}`}
                if(hexColor == null) {
                    reject({code: 404, "msg": "cannot get maincolor form this image"})
                } else {
                    resolve(hexColor);
                };
            })
            .catch((err) => {
                reject(err);
        })
    });
};

module.exports = {getImageColorRGB}