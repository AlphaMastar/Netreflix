const imageColor = require('../service/imageColor');
const imageMainColor = require('../utils/imageMainColor');
const urlRegex = /^(((ht|f)tp?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;

module.exports = {
    async imageColorController(req, res) {
        let param = decodeURIComponent(req.params.urlParam);
        if (urlRegex.test(param) && param != undefined) {
            let result = await imageColor.imageColorQueryByUrl(param);
            if (result.length == 0) {
                imageMainColor(param)
                .then((HexColor) => {
                    this.jsonWrite(res, HexColor);
                    imageColor.imageColorAdd([param, HexColor.RGB]);
                })
                .catch((err) => {
                    this.jsonWrite(res, err);
                })
            } else {
                let HexColor = {RGB: result[0].RGB};
                this.jsonWrite(res, HexColor);
            };
        } else {
            this.jsonWrite(res, {"参数不合法": param});
        };
    },
    jsonWrite(res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code:'500',
                Message: '操作失败'
            });
        } else {res.send(ret);};
    }
};