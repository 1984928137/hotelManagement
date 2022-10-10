const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const ejs = require('ejs')

const koaBody = require('koa-body')
const path = require('path')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir:  path.join(__dirname, 'public/images'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    onFileBegin: (name, file) => { // 文件上传前的设置
      // const  date = new Date()

      // let  month = Number.parseInt(date.getMonth())+1
      // month = month.toString().length>1? month : `0${month}`
      // const dir = `${date.getFullYear()}${month}${date.getDate()}`
      const dir = path.join(__dirname, 'public/images')
      const filename = Date.now()
      let img = file.name.split('.')
      let filext = img[img.length - 1]
      file.path = `${dir}/${filename}.${filext}`
      app.context.uploadpath = app.context.uploadpath? app.context.uploadpath:{}
      app.context.uploadpath[name] = `/images/${filename}.${filext}`
      // file.name = filename
    },
  }
}))
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'ejs'
  map: {
    html: 'ejs'
  }
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(router())
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
