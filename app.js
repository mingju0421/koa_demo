const Koa = require('koa');
const app = new Koa();
const cp = require('child_process'); // 用来创建子进程
const path = require('path');
const bodyparser = require('koa-bodyparser'); //获取post请求的参数
const routes = require('./routes')
const fs =  require('fs')
const staticServer = require('koa-static');



// app.use(staticServer(path.join( __dirname, './static')));
cp.exec('open http://localhost:3000/'); // 自动打开浏览器



// app.use(ctx => {
//   // 该属性就是发送给用户的内容。
//   ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./html/index.html', 'utf-8');
// });

app
  .use(bodyparser())
  .use(routes.routes())
  .use(routes.allowedMethods())

app.listen(3000, err => {
  if (err) throw err;
  console.log('running...')
})