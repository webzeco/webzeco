const express = require("express");
const userRouter = require("./routs/userRouts");
const overviewRouter = require("./routs/overviewRouts");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;
if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}
app.use(express.json());
app.use(express.static("public"));
// All Routs
app.use("/", overviewRouter);
app.use("/", userRouter);

// app.get('*',(req,res)=>{
//       res.sendFile('')
// });

app.listen(port, () => console.log(`app running on ${port}`));
