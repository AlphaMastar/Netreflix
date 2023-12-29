let imageColor = require('../service/imageColor');
let imageMainColor = require('../utils/imageMainColor');

module.exports = {
    async imageColorController(req, res) {
        let param = req.query.url;
        let result = await imageColor.imageColorQueryByUrl(param)
        if (result.length == 0) {
            imageMainColor.getImageColorRGB(param)
            .then((HexColor) => {
                this.jsonWrite(res, HexColor);
                imageColor.imageColorAdd([url, HexColor.RGB]);
            })
            .catch((err) => {
                res.send(err)
            })
        } else {
            let HexColor = JSON.stringify(result[0],['RGB']);
            this.jsonWrite(res, HexColor); 
        };
        
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