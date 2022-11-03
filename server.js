const express = require('express')

//import express from 'express'

const app = express()

//app.use(express.json())
//app.use(express.urlencoded({extended:true}))

var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var port = 5000

//import minimist from 'minimist'
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

if(args.port) {
  port = args.port
}

app.get('/app/', (req,res) => {
  res.send("200 OK").end()
})

//import {roll} from "/lib/lib/roll.js"
//const roll = require('./lib/lib/roll.js').roll

var sides = 6
var rolls = 1
var dice = 2

app.get('/app/roll/:sides', (req,res,next) => {
  sides = parseInt(req.params.sides)
 // console.log(sides)
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls)).end()
})

app.get('/app/roll/:sides/:dice/', (req,res,next) => {
  sides = parseInt(req.params.sides)
  dice = parseInt(req.params.dice)
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls)).end()
})

app.get('/app/roll/:sides/:dice/:rolls', (req,res,next) => {
  sides = parseInt(req.params.sides)
  dice = parseInt(req.params.dice)
  rolls = parseInt(req.params.rolls)
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls)).end()
})

app.use('/app/roll/', (req,res,next) => {
//  console.log(req.body)
  var isSides = req.params.sides;
  if(isSides){
   sides = isSides
  }
  var isRolls = req.params.rolls
  if(isRolls){
   rolls = isRolls
  }
  var isDice = req.params.dice
  if(isDice){
   dice = isDice
  }
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls)).end()
})
app.get('/app/nonexistant/',(req, res) => {
//  console.log(req.body)
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//  console.log(fullUrl)
  res.status(404).send("404 NOT FOUND").end()
})

app.get('/', () => {
  console.log("Server listening on port " + port)
})
app.listen(port, (req, res)=> {
 // console.log("Server listening on port " + port)
})


