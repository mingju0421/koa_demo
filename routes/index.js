const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const router = new Router();
const fs =  require('fs');
const addtoken = require('../token/addtoken');

// nodejs 加密: crypto
const crypto = require('crypto');

// 引入使用验证中间件
const {verifyToken} = require('../token/verigy');
router.use(verifyToken)

// 对密码加密
function encrytoPwd (pwd) {
  const hmac = crypto.createHmac('sha256', 'a secret');
  hmac.update(pwd);
  return hmac.digest('hex');
}
// 读取私钥
const priCert = 'A SECRET';

// 生成token
function generateToken (userName) {
  // 过期时间
  const created = Math.floor(Date.now() / 1000) + (30 * 60);
  const token = jwt.sign({
    userName,
    exp: created,
    data: 'createToken' // payload: 如果设置了过期时间必须是Object
  }, priCert);
  return token;
}

// 获取 token 中的数据
async function tokenData (ctx) {
  let token = ctx.header.authorization.split(' ')[1]
  let playload = await jwt.verify(token, priCert);
  return playload;
}

router.post('/login', async (ctx) => {
  // 获取用户登录信息
  let {user, pass} = ctx.request.body
  pass = encrytoPwd(pass)
  let datas = fs.readFileSync('./data/user.json', 'utf-8');
  datas = JSON.parse(datas)
  let data = datas.user
  if (data[user]) {
    if (data[user].pass === pass) {
      let token = generateToken(user)
      try {
        let datas = {};
        datas[user] = pass
        fs.writeFile('./data/key.json', JSON.stringify(datas), function (err) {
          if (err) {
              throw err;
          }
        })
        ctx.body = {token, code: 10000}
      } catch (err) {
        // 无法返回token, 返回错误信息
        ctx.status = 401;
        ctx.body = {
          code: 10002,
          'error': {
            'type': 'ERROR',
            'message': err
          }
        }
      }
    }else {
      // 信息有误, 登录失败
      ctx.status = 400;
      ctx.body = {
        code: 10001,
        'error': {
          'type': 'LOGIN_FAILED!',
          'message': '密码错误'
        }
      }
    }
  }else {
    data[user] = {pass}
    datas.user = data
    fs.writeFile('./data/user.json', JSON.stringify(datas), function (err) {
      if (err) {
          throw err;
      }
    })
    let token = addtoken({user: user})
    ctx.status = 200;
    ctx.body = {
      code: 10000,
      token, 
      data: '注册成功'
    }
  }
})

router.get('/home', async (ctx) => {
  let tokenDatas = await tokenData(ctx);
  let datas = fs.readFileSync('./data/user.json', 'utf-8');
  datas = JSON.parse(datas)
  ctx.body = {
    code: 10000,
    data: {
      userName: tokenDatas.userName
    }
  }
})

async function tokenYanZheng(ctx, next) {
  try {
    const token = ctx.header.authorization.split(' ')[1];
    if (token) {
      let payload;
      try {
        jwt.verify(token, priCert, (err, data) => {
          let date = Date.parse(new Date()) / 1000 
          if (data.exp > date) {
            ctx.body = {
              code: 10001,
              token, 
              data: '失效'
            }
          }
        })
      } catch (err) {
      }
    }
  } catch (err) {
    console.log('err')
  }
}


module.exports = router;