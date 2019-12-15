const jwt = require('jsonwebtoken');
const fs = require('fs');

const priCert = 'A SECRET';

async function verifyToken (ctx, next) {
  if (ctx.request.url === '/login') {
    ctx.status = 200;
    await next()
  }else {
    const dataString = ctx.header.authorization;
    try{
      const dataArr = dataString.split(' ');
      const token = dataArr[1]
      let playload = await jwt.verify(token, priCert);
      let date = Date.parse(new Date())/1000
      if (date < playload.exp) {
        //这里非常重要，只有设置了status，koa-router才识别请求正确继续进入路由
        ctx.status = 200;
        await next()
      }else {
        ctx.body = {
          'error': {
            'type': '登录失效',
            'message': '登录失效'
          }
        }
        await next() // 不确定作用
      }
    } catch (err) {
      ctx.body = {
        'error': {
          'type': 'LOGIN_FAILED',
          'message': '未知'
        }
      }
    }
  }
}

module.exports = {verifyToken};