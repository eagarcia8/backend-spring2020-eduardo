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

let allInjuriesTotal = [];

for (let i = 0; i < filteredStatisticArray.length; i++) {

    let currentStat = filteredStatisticArray[i];
    let createNewObject = true;

    for (let e = 0; e < allInjuriesTotal.length; e++) {
        if (allInjuriesTotal[e].race === currentStat.race) {
            allInjuriesTotal[e].totalDeaths = allInjuriesTotal[e].totalDeaths + currentStat.deaths;

            createNewObject = false;

            break;
        }
    }

    if (createNewObject) {
        let newTotalObject = {
            race: currentStat.race,
            totalDeaths: currentStat.deaths
        };

        allInjuriesTotal.push(newTotalObject); 
    }

}

let highestDeathObject = allInjuriesTotal[0];

for (let i = 1; i < allInjuriesTotal.length; i++) {

    if (highestDeathObject.totalDeaths < allInjuriesTotal[i].totalDeaths) {
        highestDeathObject = allInjuriesTotal[i];
    }

}

console.log("A) The highest deaths between 1999-2016, based on the data, is " + highestDeathObject.race + " with a total of " + highestDeathObject.totalDeaths + " deaths.");

// Question 1 END

// Question 2 START
console.log("Q) What percentage of injuries were confirmed accidents?");

let accidents = 0;
let nonAccidents = 0;
let undetermined = 0;
// let allIntentions = [];

for (let i = 0; i < filteredStatisticArray.length; i++) {

    let currentStat = filteredStatisticArray[i];

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

let accidentPercentage = (accidents / (nonAccidents + accidents)) * 100;
accidentPercentage = accidentPercentage.toFixed(2);

console.log("A) The percentage of accidents is " + accidentPercentage + "%, ignoring undetermined deaths. (Legal intervention/war considered intentional)");
// Question 2 END

// Question 3 START

console.log("Q) For males, which age group has the highest suicide rate?");

let ageGroupDeathTotals = [];

for (let i = 0; i < filteredStatisticArray.length; i++) {

    let currentStat = filteredStatisticArray[i];

    if (currentStat.sex === "Male") {
        continue; // Excellent example of continue usage.
    }

    let createObject = true;
    
    for (let e = 0; e < ageGroupDeathTotals.length; e++) {
        if (currentStat.ageGroup === ageGroupDeathTotals[e].ageGroup) {
            ageGroupDeathTotals[e].deathTotals = ageGroupDeathTotals[e].deathTotals + currentStat.deaths;

            createObject = false;
            break;
        }
    }

    if (createObject) {
        ageGroupDeathTotals.push({
            ageGroup: currentStat.ageGroup,
            deathTotals: currentStat.deaths
        });
    }
}

console.log(ageGroupDeathTotals);