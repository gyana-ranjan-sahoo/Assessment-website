var UserModel = require("../models/user");
const bcrypt = require('bcryptjs');
const saltRounds = 10;


//create admin
var createadmin = (data)=>{
    bcrypt.hash(data.password, saltRounds).then((hash)=>{
        var tempdata = new UserModel({
            name : data.name,
            password : hash,
            emailid : data.email,
            contact : data.contact,
            type: 'ADMIN',
        })
        tempdata.save().then(()=>{
            console.log("user created")
        }).catch((err)=>{
            console.log("err1",err);
        })
    }).catch((err)=>{
        console.log("err2",err)
    })
}



 var hashPassword = (password)=>{
    return (new Promise((resolve,reject)=>{
        bcrypt.hash(password, saltRounds).then(function(hash) {
            resolve(hash);
        }).catch((err)=>{
            reject(err);
        })
    }))
}

module.exports={ createadmin, hashPassword }