module.exports = {
    insert: 'insert into imgcolor(url, RGB) VALUES($1,$2)',  
    update: 'update imgcolor set RGB=$1 where url=$2',  
    delete: 'delete from imgcolor where url=$1',  
    queryByUrl: 'select * from imgcolor where url=$1',  
    queryAll: 'select * from imgcolor'
}