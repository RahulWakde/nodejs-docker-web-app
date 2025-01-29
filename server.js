import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) =>{
   res.json({message: "app running on docker" });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});