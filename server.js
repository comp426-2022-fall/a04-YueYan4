const express = require('express')

//import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
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

app.get('/app/roll/', (req,res,next) => {
  if(Object.keys(req.body).length != 0) {
    sides = req.body.sides
    rolls = req.body.rolls
    dice = req.body.dice
  }
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls))
})

app.get('/app/roll/:sides', (req,res,next) => {
  sides = req.params.sides
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/:dice/', (req,res,next) => {
  sides = req.params.sides
  dice = req.params.dice
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/:dice/:rolls', (req,res,next) => {
  sides = req.params.sides
  dice = req.params.dice
  rolls = req.params.rolls
  res.send(require('./lib/lib/roll.js').roll(sides, dice, rolls))
})

app.use((req, res) => {
  res.status(404).send("404 NOT FOUND").end()
})

app.listen(port, (req, res)=> {
 // console.log("Server listening on port " + port)
})

if(typeof window === 'undefined'){
console.log("Server listening on port " + port)
process.exit()
}
