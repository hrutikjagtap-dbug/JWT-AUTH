import app from "./src/app.js";
import connectDB from "./src/config/database.js";


connectDB();

app.listen(3000 ,()=>{
    console.log("port is listening");
});

//     mongodb+srv://JWT-AUTH:kSAvxmf32iyL9ItV@jwt-auth.xmixkee.mongodb.net/