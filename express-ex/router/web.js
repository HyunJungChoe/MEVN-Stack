

const express = require("express");
const router = express.Router();

module.exports= (app) => {
    router.get("/friends/list",(req,resp)=> {
        let db = app.get("db");

        db.collection("friends").find().toArray((err, result)=> {
            if(err){
                resp.status(404)
                     .send("<h1>404: friends list Error</h1>");

            }else {
                resp.render("friends_list", {friends: result })
            }
        });
    });
    router.get("/friends/new",(req,resp)=> {
        resp.render("friends_insert_form");
    });


    router.post("/friends/save", (req, resp)=> {
        // 바디파서가 등록되어 있으면
        console.log("[POST] data:", req.body);
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;

        let db = app.get("db");
        db.collection("friends").insertOne({
            name : name, email: email, phone:phone
        }, (err, result )=> {
            if (err){
                resp.status(500)
                     .send("<h1> 500: friends add Error</h1>");
                    }else {
                        resp.redirect("/web/friends/list");
                    }
        }
        );
    });

    return router;
}
