const router = require('koa-router')()
const mysqlQuery = require('../public/javascripts/query.js')
const upLoad = require('../public/javascripts/upLoad.js')
const times = require('../public/javascripts/time')

let navigationBarList = ['房间管理', '订单管理', '用户管理', '系统管理']
let navigationBarAList = ['/', '../views/reservation',
'../views/index', '../views/admData']

router.get('/', async (ctx, next) => {
  let title = "htmlss"

  let mysqlQueryData = new mysqlQuery()
  let dataQuery = await mysqlQueryData.query('select * from hotelRoom ')
  mysqlQueryData.destroy()
  await ctx.render('room', {
    title: title,
    navigationBarList: navigationBarList,
    navigationBarAList,
    dataQuery
  })
  console.log(ctx)
})

router.post('/', async (ctx, next) => {

  let postData = ctx.request.body
  let roomname = postData.roomname
  let message = postData.message
  let src = ctx.uploadpath.pic
  let roomprice = postData.roomprice
  let roombeds = postData.roombeds
  let roomNum = postData.roomNum
  let reservation = postData.reservation
  let addSql = 'INSERT INTO hotelRoom(roomname,roomprice,roombeds,reservation,roomNum,src) VALUES (?,?,?,?,?,?)'
  let addSqlValue = [roomname, roomprice, roombeds, reservation, roomNum, src]
  let mysqlQueryData = new mysqlQuery()
  let userNameQuery = await mysqlQueryData.insert(addSql, addSqlValue)
  mysqlQueryData.destroy()
  ctx.response.redirect('/')
  console.log('post数据接收完毕', ctx.request.body, userNameQuery)
})

router.post('/payment', async (ctx, next) => {
  let paymentdata = ctx.request.body
  console.log(paymentdata)
  let addSqlValue = []
  let updataSqlParams = []
  let updataSql = "UPDATE hotelRoom SET use = ? WHERE id = ?"
  let addSql = 'INSERT INTO orderForm(ordformid,userid,phone,price,roombeds,createdate,checkIntime,checkouttime,nums,breakfast,windowed,reservationNum,idNumber,whetherToOut) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  let mysqlQueryData = new mysqlQuery()

  let userVal = await mysqlQueryData.query("select id,phone,idNumber from userLogin where name=" + "\'" + paymentdata.userid + "\'")
  let homeVal = await mysqlQueryData.query("select * from hotelRoom where id=" + "\'" + paymentdata.idArr + "\'")

  addSqlValue[0] = paymentdata.ordformid
  addSqlValue[1] = userVal[0].id
  addSqlValue[2] = userVal[0].phone
  addSqlValue[3] = homeVal[0].roomprice
  addSqlValue[4] = homeVal[0].roombeds
  addSqlValue[5] = paymentdata.nowDate
  addSqlValue[6] = paymentdata.stTime
  addSqlValue[7] = paymentdata.enTime
  addSqlValue[8] = 1
  addSqlValue[9] = homeVal[0].breakfast
  addSqlValue[10] = homeVal[0].windowed
  addSqlValue[11] = paymentdata.reservationNum
  addSqlValue[12] = userVal[0].idNumber
  addSqlValue[13] = 0 
  updataSqlParams[0] = (parseInt(homeVal[0].use )+ 1)
  updataSqlParams[1] = paymentdata.idArr
  updataSqlParams[updataSqlParams.length - 1] = parseInt(updataSqlParams[updataSqlParams.length - 1])
  let userNameQuery = await mysqlQueryData.insert(addSql, addSqlValue)
  
  if (homeVal[0].use < homeVal[0].roomNum) {
    let homeUpdata = await mysqlQueryData.upchangedate(updataSql,updataSqlParams)
    console.log('rrr',homeUpdata,updataSqlParams)
  }

  mysqlQueryData.destroy()
  console.log(userVal, homeVal, userNameQuery)
  ctx.body = paymentdata
})

router.post('/closeRoom', async (ctx, next) => {

  let postData = ctx.request.body
  let closeRoomId = postData.closeRoomId.split(',')
  let closeRoomIdStr = ''
  for (let index = 0; index < closeRoomId.length; index++) {
    closeRoomIdStr += "'" + closeRoomId[index] + "'" + ',';
  }
  closeRoomIdStr = closeRoomIdStr.substr(0, closeRoomIdStr.length - 1)
  let deleteSql = 'DELETE FROM hotelRoom where id in(' + closeRoomIdStr + ')'
  let mysqlQueryData = new mysqlQuery()
  let mysqlDelRej = await mysqlQueryData.delete(deleteSql)
  mysqlQueryData.destroy()
  ctx.response.redirect('/')
  console.log('post数据接收完毕', postData, mysqlDelRej)
})

// 订单管理
router.get('/views/reservation', async (ctx, next) => {


  let mysqlQueryData = new mysqlQuery()
  let querydata = ctx.query.queryData
  console.log(`querydata`, typeof querydata, querydata == '')
  let querySql = 'select * from orderForm '
  if (querydata != undefined && querydata != '') {
    querySql = "select * from orderForm where ordformid =" + "\'" + querydata + "\'"
  }
  let dataQuery = await mysqlQueryData.query(querySql)
  for (let index = 0; index < dataQuery.length; index++) {
    dataQuery[index].createdate = times.rTime(dataQuery[index].createdate)
    dataQuery[index].checkIntime = times.rTime(dataQuery[index].checkIntime)
    dataQuery[index].checkouttime = times.rTime(dataQuery[index].checkouttime)
    let userName = await mysqlQueryData.query("select name,idNumber from userLogin where id=" +
      "\'" + dataQuery[index].userid + "\'")
    dataQuery[index].userid = userName[0].name
    dataQuery[index].idNumber = userName[0].idNumber
  }
  mysqlQueryData.destroy()
  await ctx.render('reservation', {
    // title: title,
    navigationBarList: navigationBarList,
    navigationBarAList,
    dataQuery
  })
})

router.post('/closeOrdForm', async function (ctx, next) {
  console.log(ctx.request.body)
  let postData = ctx.request.body
  // postData.hasOwnProperty.call(postData, idList)
  let closeRoomId = postData.idList.split(',')
  let closeRoomIdStr = ''
  for (let index = 0; index < closeRoomId.length; index++) {
    closeRoomIdStr += "'" + closeRoomId[index] + "'" + ',';
  }
  closeRoomIdStr = closeRoomIdStr.substr(0, closeRoomIdStr.length - 1)
  let deleteSql = 'DELETE FROM orderForm where id in(' + closeRoomIdStr + ')'
  let mysqlQueryData = new mysqlQuery()
  let mysqlDelRej = await mysqlQueryData.delete(deleteSql)
  mysqlQueryData.destroy()
  ctx.response.redirect('/views/reservation')
})


// 用户管理
router.get('/views/index', async (ctx, next) => {

  let mysqlQueryData = new mysqlQuery()
  let dataQuery = await mysqlQueryData.query('select * from userLogin ')
  for (let index = 0; index < dataQuery.length; index++) {

    dataQuery[index].createdate = times.rTime(dataQuery[index].createdate)

  }
  mysqlQueryData.destroy()
  await ctx.render('index', {
    // title: title,
    navigationBarList: navigationBarList,
    navigationBarAList,
    dataQuery
  })
})
// 系统管理
router.get('/views/admData', async (ctx, next) => {

  let mysqlQueryData = new mysqlQuery()
  let dataQuery = await mysqlQueryData.query('select * from adm ')
  mysqlQueryData.destroy()
  for (let index = 0; index < dataQuery.length; index++) {

    dataQuery[index].createdate = times.rTime(dataQuery[index].createdate)
    dataQuery[index].totalDuration = times.totalDuration(dataQuery[index].createdate)
  }
  await ctx.render('admData', {
    // title: title,
    navigationBarList: navigationBarList,
    navigationBarAList,
    dataQuery
  })
})

router.get('/hotelRoom', async (ctx, next) => {
  let mysqlQueryData = new mysqlQuery()
  let userNameQuery = await mysqlQueryData.query('select * from hotelRoom ')
  mysqlQueryData.destroy()
  ctx.body = {
    title: 'koa2 json',
    userNameQuery
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
