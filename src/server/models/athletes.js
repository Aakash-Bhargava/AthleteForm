const mongoose = require('mongoose')

const Schema = mongoose.Schema

const athleteSchema = new Schema ({
    name: { type: String, required: true},
    dob: { type: Date, required: true},
    sports: { type: [String], required: true},
    nationality: { type: String},
    gender: { type: String},
    about: { type: String},
    location: { type: String},
    married: { type: String},
    team: { type: String},
    association: { type: String},
    interests: { type: String},
    charaties: { type: String},
    pets: { type: String},
    drinks: { type: String},
    instagram: { type: String},
    facebook: { type: String},
    youtube: { type: String},
    twitch: { type: String},
    snapchat: { type: String},
    twitter: { type: String},
})

module.exports = mongoose.model('athlete', athleteSchema, 'athletes')
