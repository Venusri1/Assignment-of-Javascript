const { Sequelize ,Op, EagerLoadingError} = require('sequelize');
var db = require('../models');
// const users = require('../models/users');
const Users=db.users;

var addUser=async (req,res)=>{
    // let data = await Users.build({name:'test',email:'test2@gmail.com'})
    //   await data.save();
    const{ name, email} = await req.body;
    let data =await Users.create({
        Coursename: name ,Duration: email}).catch(error=>console.log(error));
        console.log(data.dataValues);
    let response={
        data:'ok'
    }
    res.status(200).json(response);
}
var crudoperation=async (req,res)=>{
    // let data =await Users.create({name:'demo2',email:'demo2@gamil.com'})
    // let data =await Users.update({email:'demo29@gamil.com'},{where:{name:'demo'} })
    let data =await Users.findAll({
        attributes:[
            'name',
            'email'
        ]
    });
    // let data=await Users.findAll({});
    let response={
        data:data
    }
    res.status(200).json(response);
}

var querydata=async (req,res)=>{

    let data =await Users.findAll({
       where:{
        id:{
            [Op.gt]:12
        }
       },
       order:[
        ['id','ASC']
       ],
       limit:2
    });
    let response={
        data:data
    }
    res.status(200).json(response);
}

module.exports={
    addUser,
    crudoperation,
    querydata
}
