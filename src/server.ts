import { connect } from "mongoose";
import app from "./app";

// DB Connection
const bootstrap = async () => {
    try {
        await connect("mongodb://127.0.0.1:27017/mongoose-ts");
        console.log("DB Connection establised");

        // Port

        app.listen(5000, () => {
            console.log("Server listening on port: 5000");
        });
    } catch (err) {
        console.log(err);
    }
};

bootstrap();
