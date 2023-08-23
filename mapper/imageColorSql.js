module.exports = {
    insert: 'insert into imgcolor(url, RGB) VALUES(?,?)',  
    update: 'update imgcolor set RGB=? where url=?',  
    delete: 'delete from imgcolor where url=?',  
    queryByUrl: 'select * from imgcolor where url=?',  
    queryAll: 'select * from imgcolor'
}