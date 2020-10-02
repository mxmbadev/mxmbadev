var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');

jQueryBridget( 'isotope', Isotope, $ );

$('.projects').isotope({
    itemSelector: '.grid-item',
    filter: "*",
    masonry: {
        columnWidth: '.grid-sizer'
    }
});

$('.category-list a.categories').on('click', function(){
    var selector = $(this).attr('data-filter');

    $('.projects').isotope({
        filter: selector,
    })

    //changing active class with click event
    $('.category-list a.active-category').removeClass('active-category');
    $(this).addClass('active-category');
});
// $('.grid').isotope({
//   // options...
// });


// if (window.jquery){
//     console.log("loaded jquery");
// } else{
//     console.log("not loaded in");
// }
