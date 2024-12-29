//  Sticky Header  
$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $('.navbar').addClass('stickyHeader');
    }
    else {
        $('.navbar').removeClass('stickyHeader');
    }
}); 

//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});