const express = require('express')
const mysql = require('./mysql')
const router = express.Router()

router.post('/city', function (req, res) {
  const sql = 'select * from city'
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/swiper', function (req, res) {
  const sql = 'select * from swiper'
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/ads', function (req, res) {
  const sql = 'select * from ads'
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/commend', function (req, res) {
  const sql = 'select * from commend'
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/detail', function (req, res) {
  const id = req.body.id
  const sql = 'select * from detail where id =' + id
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/comment', function (req, res) {
  const id = req.body.id
  const sql = 'select * from comment where tradeid =' + id
  mysql.query(sql, (err, result) => {
    if (err) {throw err}
    res.send(result)
  })
})

router.post('/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password
  const sql = `select * from user where username=${username} and password=${password}`
  mysql.query(sql, (err, result) => {
    if (result == null) {res.send(false)} else {res.send(true)}
  })
})

module.exports = router
