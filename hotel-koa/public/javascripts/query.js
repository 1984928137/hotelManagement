const json = require('koa-json')
const mysql = require('mysql')
const mysqlConfig = require('./mysql_config.js') //数据库的链接配置
// var connection = mysql.createConnection(mysqlConfig) // 创建一个链接，用来链接数据库


// var les = []

class mysqlRtnData{
  constructor(){
    this.con = mysql.createConnection(mysqlConfig)
    this.con.connect(console.log(1,'  connected'))
  }
  query = (sql)=>{
    return new Promise((resolve,reject)=>{
      this.con.query(sql,(err,results)=>{
        resolve(results);
      })
    })
  }
  insert = (addSql,addSqlParams)=>{
    return new Promise((resolve,reject)=>{
      this.con.query(addSql,addSqlParams,(err,results)=>{
        resolve(results);
      })
    })
  }
// modSql,modSqlParams,
  delete = (delSql)=>{
    return new Promise((resolve,reject)=>{
      this.con.query(delSql,(err,results)=>{
        resolve(results);
      })
    })
  }

  upchangedate = (updataSql,updataSqlParams)=>{
    return new Promise((resolve,reject)=>{
      this.con.query(updataSql,updataSqlParams,(err,results)=>{
        resolve(results);
      })
    })
  }

  destroy(){
    this.con.destroy(console.log(2,'  destroy'));
  }
    //  les = data
    
 }

//  connection.connect(console.log(1,'  connected'));
 
// let mysqlData = new mysqlQuery();
// let res = await mysqlData.query('SELECT * FROM userData')


// connection.end(()=>console.log('connected end() as id '))


   
  


module.exports =   mysqlRtnData





// 池连接  可以多个链接 同时 并行 链接



//   var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'example.org',
//     user            : 'bob',
//     password        : 'secret',
//     database        : 'my_db'
//   });
   
//   pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });




// 这是pool.getConnection()-> connection.query()-> connection.release()代码流的快捷方式。
// 使用pool.getConnection()对于共享后续查询的连接状态很有用。
// 这是因为两个调用 pool.query()可能使用两个不同的连接并并行运行