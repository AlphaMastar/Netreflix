const chineseTradition = require('../service/chineseTradition');

module.exports = {
    async chineseTraditionController(req, res) {
        let type = req.params.type;
        let id = req.params.id;
        switch(type) {
            case "poem":
                if (!id) {
                    let poem_id = Math.floor(Math.random()*10000);
                    let poem = await chineseTradition.getPoemByID(poem_id);
                    this.jsonWrite(res, poem[0]);
                } else {
                    let poem = await chineseTradition.getPoemByID(id);
                    this.jsonWrite(res, poem[0]);
                };
                break;
            case "article":
                if (!id) {
                    let article_id = Math.floor(Math.random()*10007);
                    let article = await chineseTradition.getArticleByID(article_id);
                    this.jsonWrite(res, article[0]);
                } else {
                    let article = await chineseTradition.getArticleByID(id);
                    this.jsonWrite(res, article[0]);
                };
                break;
            case "writer":
                if (!id) {
                    let writer_id = Math.floor(Math.random()*3983);
                    let writer = await chineseTradition.getWriterByID(writer_id);
                    this.jsonWrite(res, writer[0]);
                } else {
                    let writer = await chineseTradition.getWriterByID(id);
                    this.jsonWrite(res, writer[0]);
                };
                break;
            default:
                this.jsonWrite(res, {"参数不合法": type});
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
}