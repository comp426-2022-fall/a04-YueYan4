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

app.use('/app/', (req,res) => {
  res.send("200 OK").end()
})

//import {roll} from "/lib/lib/roll.js"
//const roll = require('./lib/lib/roll.js').roll

var sides = 6
var rolls = 1
var dice = 2

app.post('/app/roll/', (res,req,next) => {
  console.log("HI")
  sides = req.body.sides
  rolls = req.body.rolls
  dice = req.body.dice
  console.log("HERE")
  const roll = require('./lib/lib/roll.js').roll
  res.status(200).send(roll(sides, dice, rolls))
})

app.use((req, res) => {
  res.status(404).send("404 NOT FOUND").end()
})

app.listen(port, ()=> {
  console.log("Server listening on port " + port)
})
