$(document).ready(function(){
    $('#name').toggle("drop", {direction: "up"}, 2000);
});


$( document ).click(function() {
    $( "#name" ).fadeOut( "slide" );
});

$( document ).click(function() {
    $( "#name" ).fadeIn( "slide" );
});

$( document ).click(function() {
    $( "#name" ).effect( "bounce", "slow");
});


/*
let nametag = document.getElementById ('name');


function slideonhover() {
    nametag.stle.background = orange;
};

nametag.addEventListener('mouseover, changeBackground');
*/
