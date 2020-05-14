// Asterisk means it may need to be customized based on the current project.

// Tells Node we want to use the Mongoose package.
const mongoose = require("mongoose");

// String that holds the URL to contact the MongoDB server. This should be unique to your own MongoDB server. When copied from website, make sure to replace <password> with actual password. KEEP NOTE THAT THIS WILL BE UPLOADED TO GITHUB, in the future create a separate js file for credentials and gitignore that file. *
const dbUrl = "mongodb+srv://mongooseUser:mongooseUserPassword@cluster0-psjgt.mongodb.net/test?retryWrites=true&w=majority";

// Mongoose settings for setting up our connection. *
const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

// Actually making contact with our server using mongoose.connect.
mongoose.connect(dbUrl, dbSettings, (error) => {
    if (error) {
        console.log("Something bad happened!");
        console.log(error);
    } else {
        console.log("Successfully connected to Database!");
    }
});

// Passing a reference of the Promise class to mongoose.
mongoose.Promise = global.Promise;

// Creating a "interface" to our connected database
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongodDB error: "));

// Get a copy of the mongoose Schema class to use.
let Schema = mongoose.Schema;

// Customize our mongoose Schema so we only allow certain things on our database. *
let practiceSchema = new Schema({
    "time": Number,
    "title": String,
    "status": Boolean
}); 

// Creates an object that refers to the collections on the MongoDB server, and also dictates what schema we will use with this collection. *
let practiceModel = new mongoose.model("mydocuments", practiceSchema);

// Before this line is to set up mongoose and MongoDB.

/*
CRUD:
Create: practiceModel.save();
Read:   practiceModel.find();
Update: practiceModel.findByIdAndUpdate();
Delete: practiceModel.findByIdAndDelete();
*/


// .save() START

// We build our mongoose object to save into MongoDB.
let myFirstDataToSave = new practiceModel({
    "time": 32904887290842,
    "title": "A random time.",
    "status": true,
    "notallowed": "This is not allowed"
});

console.log("Saving Object to MongoDB.");
// Send the object to MongoDB to be saved.
myFirstDataToSave.save();
console.log("Saved!");

// Build a JavaScript object to save.
let myImportantObject = {
    "time": Date.now()
};

// convert JavaScript object to mongoose object so we can save it.
myImportantObject = new practiceModel(myImportantObject);

// Save "converted" object to MongoDB.
myImportantObject.save();
// .save() END

// .find() START

// .find() has two argument it needs, object and callback. object will hold all 
// "search parameters" to find matching documents, and callback will give us all the resulting matching documents. Use empty object to get all documents from database.
practiceModel.find({}, (error, results) => {
    console.log(results);
});
// .find END

// .findByIdAndUpdate() START

// This one needs three arguments compared to .find(), first one is the _id to search for, second is the data we want to add/update, third is callback to run when server has finished (may have error or success, returns the "original" un-updated copy of the document found");
practiceModel.findByIdAndUpdate("5ebd88e71a3c80483c01d551", {"status": false}, (error, results) => {
    console.log(results);
});

// .findByIdAndUpdate() END

// .findByIdAndDelete() START
// First argument is the id of the document, second argument is callback for when the database is done, it will return error or a copy of the document deleted.
practiceModel.findByIdAndDelete("5ebd893ac994c70940e80b2f", (error, results) => {
    console.log(results);
});

// .findByIdAndDelete() END
