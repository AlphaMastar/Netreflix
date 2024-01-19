module.exports = {
    queryPoemByID: 'select * from poem where id=?',
    queryArticleByID: 'select * from article where id=?',
    queryWriterByID: 'select * from writer where id=?',
    queryWriterByName: 'select * from writer where name like ?',
    queryPoemByParams: 'select * from poem where 1=1 ',
    queryArticleByParams: 'select * from article where 1=1 ',
    from_query: 'and `from` like ? ',
    title_query: 'and `title` like ? ',
    writer_query: 'and `writer` like ? ',
    dynasty_query: 'and `dynasty` like ? ',
    content_query: 'and `content` like ? ',
    sentence_query: 'and `sentence` like ? '
}