// Tells Node we want to use the Mongoose package.
const mongoose = require("mongoose");

// String that holds the URL to contact the MongoDB server. This should be unique to your own MongoDB server. When copied from website, make sure to replace <password> with actual password. KEEP NOTE THAT THIS WILL BE UPLOADED TO GITHUB, in the future create a separate js file for credentials and gitignore that file.
const dbUrl = "mongodb+srv://mongooseUser:mongooseUserPassword@cluster0-psjgt.mongodb.net/test?retryWrites=true&w=majority";

const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, dbSettings, (error) => {
    if (error) {
        console.log("something bad happened!");
        console.log(error);
    } else {
        console.log("Successfully connected to Database!");
    }
});