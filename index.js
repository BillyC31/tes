const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());
app.set("view engine","ejs");
// Router
const PUBLIC_DIRECTORY = path.join(__dirname,"public");

app.use(express.urlencoded({extended:true}));

app.use(express.static(PUBLIC_DIRECTORY));

app.get("/",(req,res)=>{
    res.render("management-layout",{
        nama: req.query.nama || "Cars",
    });
});
app.post("/cars", handler.handleCreateCar);
app.get("/cars", handler.handleListCars);
app.get("/cars/:id", middleware.setCar, handler.handleGetCar);
app.put("/cars/:id", middleware.setCar, handler.handleUpdateCar);
app.delete("/cars/:id", middleware.setCar, handler.handleDeleteCar);

app.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}`));
