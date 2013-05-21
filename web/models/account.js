/*
	Need to check the username is unique if they have one
	Need to validate the email address
	Need to put restrictions in for the username and password

*/

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , _ = require('underscore')
  , crypto = require('crypto')
  , authTypes = ['facebook']
  , check = require('validator').check


var accountTypes= ['gamer','controller','maker','god'];

var AccountSchema=new Schema({
	email:String,
	username:String,
	provider:String,
	hashed_password:String,
	salt:String,
	facebook: {},
	active:Boolean
});

AccountSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() { return this._password })

var validatePresenceOf = function (value) {
  return value && value.length
}

AccountSchema.path('email').validate(function (email) {
  // if you are authenticating by any of the oauth strategies, don't validate
  //if (authTypes.indexOf(this.provider) !== -1) return true
  var ok=true;
  try{
    check(email).isEmail(); 
  } catch(e) {
    ok=false;
  }

  return ok;
}, 'Email is invalid')

AccountSchema.path('username').validate(function (username) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true
  return username.length
}, 'Username cannot be blank')

AccountSchema.path('hashed_password').validate(function (hashed_password) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true
  return hashed_password.length
}, 'Password cannot be blank')

AccountSchema.pre('save', function(next) {
  if (!this.isNew) return next()

  if (!validatePresenceOf(this.password)
    && authTypes.indexOf(this.provider) === -1)
    next(new Error('Invalid password'))
  else
    next()
})

AccountSchema.methods = {

  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },

  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  },

  encryptPassword: function(password) {
    if (!password) return ''
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
  }
}

mongoose.model('Account', AccountSchema)