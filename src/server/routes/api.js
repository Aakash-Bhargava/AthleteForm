const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = 'mongodb+srv://dbAakash:aakash123@cluster0-zb7au.mongodb.net/athlete?retryWrites=true&w=majority'

mongoose.connect(db, err => {
  if (err) {
    console.error('Error' + err)
    return
  }
})


const Athlete = require('../models/athletes')
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(db, { useNewUrlParser: true });
client.connect(err => {
  if (err) {
    console.log(err)
    return
  }
});

router.get('/getAthletes',async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.send(200, athletes)
  } catch(e) {
    console.log(e)
    res.send(500, e)
  }
})

router.post('/submitAthlete', async (req, res) => {
  try {
    let athlete = new Athlete(req.body)
    let newAthlete = await athlete.save()
    res.send(200, newAthlete)
  } catch(e) {
    console.log(e)
    res.send(500, e)
  }
})

module.exports = router
