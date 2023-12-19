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
})



/*
let nametag = document.getElementById ('name');


function slideonhover() {
    nametag.stle.background = orange;
};

nametag.addEventListener('mouseover, changeBackground');
*/
