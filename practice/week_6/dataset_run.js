// Dataset File size limit: 50MB

// Read File...
const fs = require("fs");
const filename = "dataset_sample.csv";

let dataset = fs.readFileSync(filename, "utf8");

// Split all entries.
let datasetArray = dataset.split("\r\n");

let convertedEntriesArray = [];

// Split EACH entry.
for (let i = 0; i < datasetArray.length; i++) {
    let currentEntry = datasetArray[i].split(",");

    currentEntry.splice(8, 8);

    convertedEntriesArray.push(currentEntry);
}

// Get rid of non-data.
const dataHeadings = convertedEntriesArray.shift();
convertedEntriesArray.pop();

// Class for our entries.
class Statistic {
    constructor(entryArray) {
        this.year = entryArray[0];
        this.ageGroup = entryArray[1];
        this.sex = entryArray[2];
        this.race = entryArray[3];
        this.mechanism = entryArray[4];
        this.intention = entryArray[5];
        this.deaths = entryArray[6];
        this.pop = entryArray[7];
    }
}


// Testing conversion of entry into an object.
let testStatisticObject = new Statistic(convertedEntriesArray[6]);

 console.log(testStatisticObject.deaths + " for year " + testStatisticObject.year, "POP: " + testStatisticObject.pop);