let imageColor = require('../service/imageColor');
let imageMainColor = require('../utils/imageMainColor');

module.exports = {
    imageColorController(req, res) {
        let param = req.query.url;
        imageColor.queryByUrl(param).then((result) => {
            if (result == null) {
                imageMainColor.getImageColorRGB(param)
                .then((HexColor) => {
                    let RGB = {"RGB": HexColor};
                    this.jsonWrite(res, RGB);
                    imageColor.add(param, HexColor).then((result) => {
                        console.log(result);
                    });
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