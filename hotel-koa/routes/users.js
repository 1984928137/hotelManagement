const router = require('koa-router')()

const mysqlQuery = require('../public/javascripts/query.js')
const times = require('../public/javascripts/time')



router.prefix('/users')

router.get('/', function (ctx, next) {
  console.log(ctx)
  ctx.body = 'this is a users response!'

})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/name', function (ctx, next) {
  console.log(ctx.query)
  let name = ctx.query.userName
  let userPwd = ctx.query.userPwd
  console.log(23, name, userPwd)
  ctx.body = '这是通过name 返回的响应数据'
})

router.get('/person', async function (ctx, next) {
  let name = ctx.query.userName
  let id = ctx.query.userid
  console.log(ctx.query, id)
  let mysqlQueryData = new mysqlQuery()
  let userNameAdm = await mysqlQueryData.query("select * from orderForm where userid=" + id)
  // +"and userPwd="+"\'"+userPwd+"\'"
  mysqlQueryData.destroy()
  ctx.body = { text: '这是通过person 返回的响应数据', userNameAdm }
})

router.post('/login', async function (ctx, next) {
  let postData = ctx.request.body
  console.log('post数据接收完毕', postData.userName)
  let userName = postData.userName
  let userPwd = postData.userPwd
  let mysqlQueryData = new mysqlQuery()
  let userNameQuery = await mysqlQueryData.query("select id,name,userPwd,src from userLogin where name=" + "\'" + userName + "\'" + "and userPwd=" + "\'" + userPwd + "\'")
  mysqlQueryData.destroy()
  console.log('user', userNameQuery)
  if (userNameQuery.length == 0) {
    ctx.body = '用户名错误或者密码错误，请重新输入'
  } else {
    ctx.body = {
      metas: true,
      id: userNameQuery[0].id,
      name: userName,
      src: userNameQuery[0].src
    }

  }

})
router.get('/personData', async function (ctx, next) {
    let postData = ctx.query
    console.log('post数据接收完毕', postData)
    let userId = postData.id
    
    let mysqlQueryData = new mysqlQuery()
    let querydata = await mysqlQueryData.query("select * from userLogin where id=" + "\'" + userId + "\'")
    mysqlQueryData.destroy()
    console.log('user', querydata)
    if (querydata.length == 0) {
      ctx.body = null
    } else {
      ctx.body = querydata[0]
  
    }
  
  }
)


router.post('/queryData', async (ctx, next) => {
  let postData = ctx.request.body
  let navigationBarList = ['房间管理', '餐饮', '订单管理', '用户管理','系统管理']
  let navigationBarAList = ['/', '../views/foodBeverage', '../views/reservation', 
  '../views/index', '../views/admData']
  let mysqlQueryData = new mysqlQuery()
  let dataQuery = await mysqlQueryData.query('select * from orderForm where id=18')
  for (let index = 0; index < dataQuery.length; index++) {
    dataQuery[index].createdate = times.rTime(dataQuery[index].createdate)
    dataQuery[index].checkIntime = times.rTime(dataQuery[index].checkIntime)
    dataQuery[index].checkouttime = times.rTime(dataQuery[index].checkouttime)
 }
  mysqlQueryData.destroy()
  ctx.body = {
    // title: title,
    navigationBarList: navigationBarList,
    navigationBarAList,
    dataQuery
  }
  // ctx.response.redirect('/views/reservation')
})



router.post('/upData', async function (ctx, next) {
  let postData = ctx.request.body
  let mysqlQueryData = new mysqlQuery()
  let updataSql = 'UPDATE userLogin SET name = ?,phone = ?,createdate = ?,idNumber = ?,sex = ? where id = ?';
  for (const key in postData) {
    if (postData.hasOwnProperty.call(postData, key)) {
      let updataSqlParams = postData[key];
      // let dataChange = updataSqlParams
      updataSqlParams.push(updataSqlParams[0])
      updataSqlParams.shift(updataSqlParams[0])
      updataSqlParams = updataSqlParams.map(value => value.trim())
      updataSqlParams[updataSqlParams.length - 1] = parseInt(updataSqlParams[updataSqlParams.length - 1])
      console.log(`Array.isArray(updataSqlParams)`, Array.isArray(updataSqlParams))
      let userUpdata = await mysqlQueryData.upchangedate(updataSql, updataSqlParams)
      let userQuery = await mysqlQueryData.query("select * from userLogin where id =" + updataSqlParams[updataSqlParams.length - 1])
      console.log(updataSqlParams, updataSql, userUpdata, userQuery)
    }
  }
  mysqlQueryData.destroy()
  console.log('post数据接收完毕', postData)
  // let userName = postData.userName
  // let userPwd = postData.userPwd


  // console.log('user', userNameQuery)
  // if (userNameQuery.length == 0) {
  //   ctx.body = '用户名错误或者密码错误，请重新输入'
  // } else {
  ctx.body = 'post数据接收完毕'
  // metas: true,
  // id:userNameQuery[0].id,
  // name: userName,
  // src: userNameQuery[0].src
  ctx.response.redirect('/views/index')


  // }

})

router.post('/closeData', async function (ctx, next) {
  let postData = ctx.request.body
  // ID值
  // postData = postData.closeData.split(',').map(value => vlaue = parseInt(value))
  for (const key in postData) {
    if (postData.hasOwnProperty.call(postData, key)) {
      const element = postData[key];
      console.log(element)
    }
  }
  console.log('post数据接收完毕', postData)


  // let userNameQuery = await mysqlQueryData.query("select id,name,userPwd,src from userLogin where name=" + "\'" + userName + "\'" + "and userPwd=" + "\'" + userPwd + "\'")
  // mysqlQueryData.destroy()

  ctx.body = 'post数据接收完毕'

  ctx.response.redirect('/views/index')


  // }

})

router.post('/admUpData', async function (ctx, next) {
  let postData = ctx.request.body
  let mysqlQueryData = new mysqlQuery()
  // postData = postData.closeData.split(',').map(value => vlaue = parseInt(value))
  let updataSql = 'UPDATE adm SET name = ?,userPwd = ?,phone = ?,createdate = ?,totaltime = ? where id = ?'
  for (const key in postData) {
    if (postData.hasOwnProperty.call(postData, key)) {
      let updataSqlParams = postData[key];
      // updataSqlParams.pop()
      updataSqlParams.push(updataSqlParams[0])
      updataSqlParams.shift(updataSqlParams[0])
      updataSqlParams = updataSqlParams.map(value => value.trim())
      updataSqlParams[updataSqlParams.length - 1] = parseInt(updataSqlParams[updataSqlParams.length - 1])
      let admquery = await mysqlQueryData.upchangedate(updataSql, updataSqlParams)
      console.log(`admquery`, admquery)
    }
  }
  console.log('post数据接收完毕', postData)
  mysqlQueryData.destroy()


  // mysqlQueryData.destroy()
  // console.log('user', userNameQuery)
  // if (userNameQuery.length == 0) {
  //   ctx.body = '用户名错误或者密码错误，请重新输入'
  // } else {
  ctx.body = 'post数据接收完毕'
  // metas: true,
  // id:userNameQuery[0].id,
  // name: userName,
  // src: userNameQuery[0].src
  ctx.response.redirect('/views/admData')


  // }

})

router.post('/admCloseData', async function (ctx, next) {
  let postData = ctx.request.body
  let mysqlQueryData = new mysqlQuery()

  // postData = postData.closeData.split(',').map(value => vlaue = parseInt(value))
  for (const key in postData) {
    if (postData.hasOwnProperty.call(postData, key)) {
      let element = postData[key];
      let elementStr = ''
      for (let index = 0; index < element.length; index++) {
        if (index == 0) {
          elementStr += "'" + element[index] + "'";
        } else {
          elementStr += ',' + "'" + element[index] + "'";
        }
      }
      let deleteSql = 'DELETE FROM adm where id in(' + elementStr + ')'
      let userNameQuery = await mysqlQueryData.delete(deleteSql)
      console.log(deleteSql, userNameQuery)
    }
  }
  console.log('post数据接收完毕', postData)

  // let userName = postData.userName
  // let userPwd = postData.userPwd


  mysqlQueryData.destroy()
  // console.log('user', userNameQuery)
  // if (userNameQuery.length == 0) {
  //   ctx.body = '用户名错误或者密码错误，请重新输入'
  // } else {
  ctx.body = 'post数据接收完毕'
  // metas: true,
  // id:userNameQuery[0].id,
  // name: userName,
  // src: userNameQuery[0].src
  ctx.response.redirect('/views/admData')


  // }

})

router.post('/addAdmData',async function (ctx,next) {
  let postData = ctx.request.body
  let mysqlQueryData = new mysqlQuery()
  let addSql = 'INSERT INTO adm(name,userPwd,phone,createdate) VALUES (?,?,?,?)'
  
  for (const key in postData) {
    if (postData.hasOwnProperty.call(postData, key)) {
      let element = postData[key];
      let createdate = times.rTime(new Date())
      element.push(createdate)
      console.log(element)
      let userAdm = await mysqlQueryData.insert(addSql,element)
      console.log(userAdm)
    }
  }
  
  // +"and userPwd="+"\'"+userPwd+"\'"
  mysqlQueryData.destroy()
  ctx.body = 'post数据接收完毕'
  ctx.response.redirect('/views/admData')
})

module.exports = router
