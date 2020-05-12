let someText = "test";

function someFunction() {
    console.log("we ran this function that is global to the whole script.");
}

//Tests if your selector has something!
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector selected nothing! Check that you spelled the selector string properly.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        return arrayToTest;
    }
};

// Wait until HTML has fully loaded.
$(document).ready(() => {

    // Use test$ to test jQuery Selector: test$( $("CSS Selector") );
    test$( $("ol") );
    test$( $("body") );

    
    // Storing what we searched for into an variable.
    let myHeading = $("h1");

    // Waiting 5 seconds to change the color of all headings to red.
    setTimeout(() => {
        myHeading.css("color", "red");
    }, 5000);

    // When any headings are clicked on, change them to blue.
    myHeading.click(() => {
        
        let aPTag = "<p>This is a paragraph tag.</p>";

        // .html() or .append() or .prepend()
        $("body").append(aPTag);

    });

    

    $("#create-popup").click(() => {

        //You can also use $(this) to select the previously selected jQuery element.
        //$("html").css("background-color", "grey");
        console.log(someText);
        someFunction();

        // Setting up our popup.
        let myPopup = `
        <div id="popup-block">
            <div id="popup-container">
                <p>You must deal with me!</p>
            </div>
        </div>`;

        // attaching popup to our body element
        $("body").append(myPopup);

        // stylizing popup "blocker" (the box that looks like a transparent grey box covering the whole webpage.)
        $("#popup-block").css({
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(177, 177, 177, .5)"
        });

        // using a shortcut for popup-container because we are going to use it a lot.
        let popup = $("#popup-container");

        // styles the white box.
        popup.css({
            "margin": "0 auto",
            "width": "300px",
            "height": "300px",
            "background-color": "white",
            "border": "solid 5px grey"
        });

        // adds an H1 to white box.
        popup.append("<h1>I have been added AFTER THE FACT!</h1>");

        // adds a "Close" button to white box.
        popup.append("<button id='close'>Close this popup!</button>");

        // starts listening to the close button and delete the grandparent.
        $("#close").click(() => {
            $("#close").parent().parent().remove();
        });

    });


    // Inspecting what we searched.
    console.log(myHeading);

});