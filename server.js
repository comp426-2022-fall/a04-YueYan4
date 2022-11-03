const express = require('express')

//import express from 'express'

const app = express()

const port = 5000

//import minimist from 'minimist'
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

if(args.port) {
  port = args.port
}

app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND")
})

app.get('/app/', (res,req,next) => {
  res.status(200).send("200 OK")
})

//import {roll} from "/lib/lib/roll.js"
const roll = require('./lib/lib/roll.js').roll

var sides = 6
var rolls = 1
var dice = 2

app.get('/app/roll/', (res,req,next) => {
  res.status(200).send(roll(sides, dice, rolls))
})
