const e = require('express');
const chineseTradition = require('../service/chineseTradition');

module.exports = {
    async chineseTraditionController(req, res) {
        let type = req.params.type;
        switch(type) {
            case "poem":
                let poem_id = Math.floor(Math.random()*10000);
                let poem = await chineseTradition.getPoemByID(poem_id);
                this.jsonWrite(res, poem[0]);
                break;
            case "article":
                let article_id = Math.floor(Math.random()*10007);
                let article = await chineseTradition.getArticleByID(article_id);
                this.jsonWrite(res, article[0]);
                break;
            case "writer":
                let writer_id = Math.floor(Math.random()*3983);
                let writer = await chineseTradition.getWriterByID(writer_id);
                this.jsonWrite(res, writer[0]);
                break;
            default:
                this.jsonWrite(res, {"参数不合法": type});
        };
    },
    async searchController(req, res) {
        let type = req.params.type;
        switch(type) {
            case "poem": await this.poemController(req, res); break;
            case "article": await this.articleController(req, res); break;
            case "writer": await this.writerController(req, res); break;
            default: this.jsonWrite(res, {"参数不合法": type});
        };
    },
    async poemController(req, res) {
        let sentence = '%' + decodeURIComponent(req.query.sentence) + '%';
        let from = '%' + decodeURIComponent(req.query.from) + '%';
        let poemMap = new Map()
            .set('sentence', sentence)
            .set('from', from);
        if (sentence || from) {
            let poem = await chineseTradition.getWriterByName(poemMap);
            this.jsonWrite(res, poem);
        };
    },
    async articleController(req, res) {
        let title = '%' + decodeURIComponent(req.query.title) + '%';
        let writer = '%' + decodeURIComponent(req.query.writer) + '%';
        let dynasty = '%' + decodeURIComponent(req.query.dynasty) + '%';
        let content = '%' + decodeURIComponent(req.query.content) + '%';
        let articleMap = new Map()
            .set('title', title)
            .set('writer', writer)
            .set('dynasty', dynasty)
            .set('content', content);
        if (title || writer || dynasty || content) {
            let poem = await chineseTradition.getPoemByParams(articleMap);
            this.jsonWrite(res, poem);
        } else {
            this.jsonWrite(res, {"参数不合法": type});
        };
    },
    async writerController(req, res) {
        let name = '%' + decodeURIComponent(req.query.name) + '%';
        if (name) {
            let writer = await chineseTradition.getWriterByName(name);
            this.jsonWrite(res, writer);
        } else {
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