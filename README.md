# 一个简单的查询图片颜色的小API

## Usage

download下来之后手动建一张表，表名为'imgcolor'，字段为'id'主键(其实无所谓), 'url', 'RGB'
.env里是mysql数据库的信息，请填写，
进入文件夹后进入终端

```
npm install
```

安装完依赖之后就可以

```
nodemon ./bin/www
```
启动项目，访问http://你的ip:4000/api/imagecolor?url='你要查询主色调的图片链接'/ 就可以获取图片主色调。
