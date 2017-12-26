var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
_id: { type: objectId, auto: true },
name: { type: String, required: true },
mobilenumber: { type: String, required: true },
mobilenumberIMEI: { type: String, required: true },
mobilenumber2: { type: String, required: false },
mobilenumber2IMEI: { type: String, required: false },
androidversion: { type: String, required: false },
mobilemodel: { type: String, required: false },
batterylevel: { type: Number, required: true },
iswifion: { type: Boolean, required: true },
islocationon: { type: Boolean, required: true },
ismobiledataon: { type: Boolean, required: true },
isActive:{type:Boolean,required:true},
installedon: { type: Date, required: true }
}, {
versionKey: false
});

var user = mongoose.model('users', userSchema);

module.exports = user;