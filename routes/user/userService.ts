const apiExpress = require('express');

const apiRouter = apiExpress.Router();
const mockData = require("../../config/mockData.json")
const utilities = require("../../utilities/utilities");

apiRouter.post('/validateUser', (req:any,res:any) => {
    if(req.body.username === mockData.user.username && req.body.password === mockData.user.password){
        res.send(	
            {
            statusCode: "US04S001",
            status:"success",
            message:"Authentication successful"
            })
    }
    else{
        res.send({
            statusCode: "US04F001",
            status:"failure",
            message:"Unauthorised"
            })
    } 
})
module.exports = apiRouter;