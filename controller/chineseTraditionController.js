const chineseTradition = require('../service/chineseTradition');

module.exports = {
    async chineseTraditionController(req, res) {
        let type = req.params.type;
        switch (type) {
            case "poem":
                let poem_id = Math.floor(Math.random() * 10000);
                let poem = await chineseTradition.getPoemByID(poem_id);
                this.jsonWrite(res, poem[0]);
                break;
            case "article":
                let article_id = Math.floor(Math.random() * 10007);
                let article = await chineseTradition.getArticleByID(article_id);
                this.jsonWrite(res, article[0]);
                break;
            case "writer":
                let writer_id = Math.floor(Math.random() * 3983);
                let writer = await chineseTradition.getWriterByID(writer_id);
                this.jsonWrite(res, writer[0]);
                break;
            case "poet":
                let poet_id = Math.floor(Math.random() * 377501);
                let poet = await chineseTradition.getPoetByID(poet_id);
                this.jsonWrite(res, poet[0]);
                break;
            default:
                this.jsonWrite(res, { "参数不合法": type });
        };
    },
    async searchController(req, res) {
        let type = req.params.type;
        switch (type) {
            case "poet": await this.poetController(req, res); break;
            case "poem": await this.poemController(req, res); break;
            case "article": await this.articleController(req, res); break;
            case "writer": await this.writerController(req, res); break;
            default: this.jsonWrite(res, { "参数不合法": type });
        };
    },
    async poetController(req, res) {
        let poetMap = new Map(Object.entries(req.query));
        poetMap.forEach((value, key) => {
            if (value) {
                poetMap.set(key, `%${value}%`);
            }
        });
        if (poetMap.get('tags') || poetMap.get('title') || poetMap.get('author') || poetMap.get('content')) {
            let poet = await chineseTradition.getPoetByParams(poetMap);
            this.jsonWrite(res, poet);
        } else {
            this.jsonWrite(res, { "参数不合法": req.query });
        }
    },
    async poemController(req, res) {
        let poemMap = new Map(Object.entries(req.query));
        poemMap.forEach((value, key) => {
            if (value) {
                poemMap.set(key, `%${value}%`);
            }
        });
        if (poemMap.get('sentence') || poemMap.get('from')) {
            let poem = await chineseTradition.getPoemByParams(poemMap);
            this.jsonWrite(res, poem);
        } else {
            this.jsonWrite(res, { "参数不合法": req.query });
        }
    },
    async articleController(req, res) {
        let articleMap = new Map(Object.entries(req.query));
        articleMap.forEach((value, key) => {
            if (value) {
                articleMap.set(key, `%${value}%`);
            }
        });
        if (articleMap.get('title') || articleMap.get('writer') || articleMap.get('dynasty') || articleMap.get('content')) {
            let article = await chineseTradition.getArticleByParams(articleMap);
            this.jsonWrite(res, article);
        } else {
            this.jsonWrite(res, { "参数不合法": req.query });
        };
    },
    async writerController(req, res) {
        let name = '%' + decodeURIComponent(req.query.name) + '%';
        if (name) {
            let writer = await chineseTradition.getWriterByName(name);
            this.jsonWrite(res, writer);
        } else {
            this.jsonWrite(res, { "参数不合法": type });
        };
    },
    jsonWrite(res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code: '500',
                Message: '操作失败'
            });
        } else { res.send(ret); };
    }
}