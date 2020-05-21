// Dataset File size limit: 50MB

// Read File...
const fs = require("fs");
const filename = "NCHS_-_Injury_Mortality__United_States.csv";

let dataset = fs.readFileSync(filename, "utf8");

// Split all entries.
let datasetArray = dataset.split("\n");

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
        this.sex = entryArray[1];
        this.ageGroup = entryArray[2];
        this.race = entryArray[3];
        this.mechanism = entryArray[4];
        this.intention = entryArray[5];
        this.deaths = parseInt(entryArray[6]);
        this.pop = parseInt(entryArray[7]);
        this.rate = this.deaths / this.pop;
    }
}

let statisticArray = [];

// Convert all Array entries into Statistic entries.
for (let i = 0; i < convertedEntriesArray.length; i++) {
    statisticArray.push(new Statistic(convertedEntriesArray[i]));
}

// Testing conversion of entry into an object.
// let testStatisticObject = new Statistic(convertedEntriesArray[6]);

//  console.log(testStatisticObject.deaths + " for year " + testStatisticObject.year, "POP: " + testStatisticObject.pop);

let filteredStatisticArray = [];

// Removing Summary Entries.
for (let i = 0; i < statisticArray.length; i++) {

    if (statisticArray[i].ageGroup === "All Ages" || statisticArray[i].sex === "Both sexes" || statisticArray[i].race === "All races" || statisticArray[i].mechanism === "All Mechanisms" || statisticArray[i].intention === "All Intentions") {
        continue; // Skip this Statistic object because it matches one of the comparisons.
    } else {
        filteredStatisticArray.push(statisticArray[i]);
    }
}

// Question 1 START
console.log("Q) What race has the majority of the mortal injuries?");

// Collection for totals.
let allInjuriesTotal = [];

// Go through each entry...
for (let i = 0; i < filteredStatisticArray.length; i++) {


    let currentStat = filteredStatisticArray[i];

    // Flag to see if we find or not find collection entry.
    let createNewObject = true;

    // Go through each collection entry and see if statistic group is found.
    for (let e = 0; e < allInjuriesTotal.length; e++) {
        if (allInjuriesTotal[e].race === currentStat.race) {
            allInjuriesTotal[e].totalDeaths = allInjuriesTotal[e].totalDeaths + currentStat.deaths;

            createNewObject = false;
            // If found, stop looking in the collection.
            break;
        }
    }

    // If not found, create collection entry, and add current statistic numbers to new collection entry.
    if (createNewObject) {
        let newTotalObject = {
            race: currentStat.race,
            totalDeaths: currentStat.deaths
        };

        allInjuriesTotal.push(newTotalObject); 
    }

}

let highestDeathObject = allInjuriesTotal[0];

// Find collection entry with highest deaths.
for (let i = 1; i < allInjuriesTotal.length; i++) {

    if (highestDeathObject.totalDeaths < allInjuriesTotal[i].totalDeaths) {
        highestDeathObject = allInjuriesTotal[i];
    }

}

console.log("A) The highest deaths between 1999-2016, based on the data, is " + highestDeathObject.race + " with a total of " + highestDeathObject.totalDeaths + " deaths.");

// Question 1 END

// Question 2 START
console.log("Q) What percentage of injuries were confirmed accidents?");

// Counters for specific death types.
let accidents = 0;
let nonAccidents = 0;
let undetermined = 0;
// let allIntentions = [];

// Go through each statistic.
for (let i = 0; i < filteredStatisticArray.length; i++) {

    let currentStat = filteredStatisticArray[i];

    // Add to proper counter based on intention property.
    if (currentStat.intention === "Unintentional") {
        accidents += currentStat.deaths; // shorthand, same as line 126
    } else if (currentStat.intention === "Undetermined") {
        undetermined = undetermined + currentStat.deaths;
    } else {
        nonAccidents = nonAccidents + currentStat.deaths;
    }

    // if (!allIntentions.includes(currentStat.intention)) {
    //     allIntentions.push(currentStat.intention);
    // }
}

// Find percentage of accident compared to total accidents.
let accidentPercentage = (accidents / (nonAccidents + accidents)) * 100;
accidentPercentage = accidentPercentage.toFixed(2);

console.log("A) The percentage of accidents is " + accidentPercentage + "%, ignoring undetermined deaths. (Legal intervention/war considered intentional)");
// Question 2 END

// Question 3 START

console.log("Q) For males, which age group has the highest suicide rate?");

let ageGroupDeathTotals = [];

// Go through all statistic entries.
for (let i = 0; i < filteredStatisticArray.length; i++) {

    let currentStat = filteredStatisticArray[i];

    // Ignore all Female entries, flip to Male for Female data.
    if (currentStat.sex === "Female") {
        continue; // Excellent example of continue usage.
    }

    // Two flags, one to see if we find the collection entry. The second to mark if the statistic is a suicide entry or not.
    let createObject = true;
    let objectIsSuicide = false;
    

    // Find the collection entry that matches the statistic.
    for (let e = 0; e < ageGroupDeathTotals.length; e++) {

        // if statistic is suicide, mark the flag for it.
        if (currentStat.intention === "Suicide") {
            objectIsSuicide = true;
        }

        // if statistic is found in collection entries...
        if (currentStat.ageGroup === ageGroupDeathTotals[e].ageGroup) {

            // add to total deaths.
            ageGroupDeathTotals[e].deathTotals = ageGroupDeathTotals[e].deathTotals + currentStat.deaths;

            // and if is a suicide entry, add to suicide deaths.
            if (currentStat.intention === "Suicide") {
                ageGroupDeathTotals[e].suicideDeaths = ageGroupDeathTotals[e].suicideDeaths + currentStat.deaths;
            }

            // If found, mark createObject as false so we dont create it.
            createObject = false;
            break;
        }
    }

    // Create collection entry if not found, and suicideDeath start number will be based if the current statistic was a suicide entry.
    if (createObject) {
        ageGroupDeathTotals.push({
            ageGroup: currentStat.ageGroup,
            deathTotals: currentStat.deaths,
            suicideDeaths: objectIsSuicide ? currentStat.deaths : 0 // Ternary operator, if objectIsSuicide is true then use currentStat.deaths other use 0.
        });
    }
}

// Create rate for suicide death for each collection entry.
for (let i = 0; i < ageGroupDeathTotals.length; i++) {
    let rate = (ageGroupDeathTotals[i].suicideDeaths / ageGroupDeathTotals[i].deathTotals) * 100;

    ageGroupDeathTotals[i].rate = rate;
}

console.log(ageGroupDeathTotals);



// let highestAgeDeathObject = ageGroupDeathTotals[0];

// for (let i = 1; i < ageGroupDeathTotals.length; i++) {
//     if (highestAgeDeathObject.deathTotals < ageGroupDeathTotals[i].deathTotals) {
//         highestAgeDeathObject = ageGroupDeathTotals[i];
//     }
// }

// console.log(highestAgeDeathObject);