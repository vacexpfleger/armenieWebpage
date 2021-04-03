$(function() {
    $('body').hide();
});

$(document).ready(function(){
    $('body').fadeIn(1000);
});

$(function() {
    $('.far').hover(function() {
        $('blockquote').slideToggle(200);
    });
});

$(function() {
    $('#annihilation').click(function() {
        let i;
        for(i = 0; i < 20; i++){
            $('body').hide(20);
            $('body').show(27);
        }
        $('body').fadeOut(100);
    });
});

console.log('funguj');

