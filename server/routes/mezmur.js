import express from "express";
// import queryDealsCollection from "../DBconnecor/DbAbstractionLayer.js";

//const router=express.Router();

import { Router } from "express";

import { getMezmurs, addMezmur } from "../controllers/mezmur.js";

const usersRouter = Router();

//usersRouter.route("/").get(getMezmurs).post(addMezmur);

// usersRouter.route('/:id')
//     .get(getSingleUser)
//     .put(updateUser)
//     .delete(deleteUser);

//export default usersRouter;
usersRouter.route('/').get(getMezmurs).post(addMezmur);
    
// usersRouter.get('/addnewmezmur', (req, res)=>{
//     res.send("Add new Mezmur form")
//     })

// usersRouter.post('/', (req, res)=>{
//     res.send("Create new mezmur")
// })

usersRouter.route('/:id').get((req, res)=>{
    console.log(req.mezmur.name);
    res.send(`Get Mezmur with ID ${req.params.id}`)
}).put((req, res)=>{
    res.send(`Update Mezmur with ID ${req.params.id}`)
}).delete((req, res)=>{
    res.send(`Delete Mezmur with ID ${req.params.id}`)
})

// const mezmurs=[{name: "Ata kulu tkeel"}, {name: 'mihretkayu'}]
// usersRouter.param("id", (req, res, next, id)=>{
//     req.mezmur=mezmurs[id]
//     next()
// });
// console.log(mezmurs[2]);
// queryDealsCollection().then(response=>{
//     res.json(response);
// }).catch(error=>{
//     console.log("Error");
// })
    
export default usersRouter;