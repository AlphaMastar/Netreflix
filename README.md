# 一个简单的小API

## 暂时具有查询图片颜色和古诗文查询功能，慢慢扩展中

## Usage

download下来之后手动将databse文件夹里的两个sql脚本执行到mysql数据库。在.env文件中配置数据库信息。
进入文件夹后进入终端

```
npm install
```

安装完依赖之后就可以

```
node ./bin/www
```

启动项目：
    访问http://你的ip:4000/imagecolor/你要查询主色调的图片链接/，注意为了配合restful风格API，主色调的图片链接需要进行加密传送以获取图片主色调，否则会导致地址混乱无法解析。</br>
访问http://你的ip:4000/chinese/查询的古诗文类型如poem,article,writer/，可以随机显示一篇古诗文或者古文作者简介。</br>
访问http://你的ip:4000/chinese/查询的古诗文类型如poem,article,writer/search?，可以模糊查询古诗文的内容，</br>
其中:

poem查询参数为:
```
search?sentence='查询内容'&from='查询内容'
```

article查询参数为:
```
search?title='古文标题'&dynasty='古文朝代'&writer='古文作者'&content='古文内容'
```

writer查询参数为:
```
search?name='古文作者'
```
(以上参数实际查询过程均不带```''```号)