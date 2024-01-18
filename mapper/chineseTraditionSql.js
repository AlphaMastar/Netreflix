module.exports = {
    queryPoemByID: 'select * from poem where id=?',
    queryArticleByID: 'select * from article where id=?',
    queryWriterByID: 'select * from writer where id=?',
    queryWriterByName: 'select * from writer where name like ?',
    queryPoemByParams: 'select * from poem where ',
    queryArticleByParams: 'select * from article where '
}