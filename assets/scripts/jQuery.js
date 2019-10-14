
$(document).ready(function() {

    const words = ['hang']    
    // Change key style on click
    $(".key").click(function() {
        $(this).removeClass("key").addClass("deactivated-key");
    });

});

// i need to generate an h2 with a class of word-letter in word-row for every letter in word
// i need to select every letter in array and insert it into aforementioned h2
// "hang", h pressed, display h
// if the key matches any of the words in array