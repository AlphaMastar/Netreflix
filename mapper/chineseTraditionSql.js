module.exports = {
    queryPoemByID: 'select * from poem where id=?',
    queryPoetByID: 'select * from poet where id=?',
    queryArticleByID: 'select * from article where id=?',
    queryWriterByID: 'select * from writer where id=?',
    queryWriterByName: 'select * from writer where name like ?',
    queryPoemByParams: 'select * from poem where 1=1 ',
    queryPoetByParams: 'select * from poet where 1=1 ',
    queryArticleByParams: 'select * from article where 1=1 ',
    tags_query: 'and `tags` like ? ',
    from_query: 'and `from` like ? ',
    title_query: 'and `title` like ? ',
    author_query: 'and `author` like ? ',
    writer_query: 'and `writer` like ? ',
    dynasty_query: 'and `dynasty` like ? ',
    content_query: 'and `content` like ? ',
    sentence_query: 'and `sentence` like ? '
}