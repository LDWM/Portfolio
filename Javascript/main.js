$(document).ready(function(){
    $('#name').toggle("drop", {direction: "up"}, 2000);
    $(".mainList").fadeIn(1000);
    $('.headings').effect("slide", 1500);
    $( "#name" ).fadeOut( "slide" );
    $( "#name" ).fadeIn( "slide" );
    $( "#name" ).effect( "bounce", "slow");

});


$("#name").click(function() {
    $( "#name" ).fadeOut( "slide" );
});

$("#name").click(function() {
    $( "#name" ).fadeIn( "slide" );
});

$("#name").click(function() {
    $( "#name" ).effect( "bounce", "slow");
});


$("#moreCoursesBtn").click(function() {
    $("#moreCodecademycourses").toggle();

    let showbtntext = document.getElementByID("#moreCoursesBtn").innerHTML;

    if (showbtntext == "Show More") {
        document.getElementByID("moreCoursesBtn").innerHTML = "Show Less";
    } else {
        document.getElementByID("moreCoursesBtn").innerHTML = "Show More";
    }
})


var button = document.getElementById('moreCoursesBtn');
button.addEventListener("click", tableClickHandler);

function tableClickHandler(event) {
    var readed = event.target.closest('.togglebtn');
    if (readed) {
      toggleText(readed);
    }
}


// Toggle text when clicked.
function toggleText(button) {
    if (button.innerHTML == "Show More") {
        button.innerHTML = "Show Less";
    } else if (button.innerHTML == "Show Less") {
        button.innerHTML = "Show More";
    } else {
        null
    }
}

/*
let nametag = document.getElementById ('name');


function slideonhover() {
    nametag.stle.background = orange;
};

nametag.addEventListener('mouseover, changeBackground');
*/
