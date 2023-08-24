let imageColor = require('../service/imageColor');
let imageMainColor = require('../utils/imageMainColor');

module.exports = {
    imageColorController(req, res, next) {
        imageColor.queryByUrl(req, res, next).then((result) => {
            if (result == null) {
                imageMainColor.getImageColorRGB(req.query.url)
                .then((HexColor) => {
                    let RGB = {"RGB": HexColor};
                    this.jsonWrite(res, RGB);
                    imageColor.add(req, res, next, HexColor);
                })
                .catch((err) => {
                    res.send(err)
                })
            } else {
                this.jsonWrite(res, result);
            };
        });
    },
    jsonWrite (res, ret) {
        if(typeof ret === 'undefined') {
            res.json({
                code:'1',
                msg: '操作失败'
            });
        } else {res.send(ret);}
    }
};