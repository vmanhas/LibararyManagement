const express=require("express");
const app=express();
const Router=express.Router();
const {getdashboard}=require("../controllers/dashboardController");

Router.get('/stat',getdashboard);
module.exports=Router;