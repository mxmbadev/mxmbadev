var $ = require('jquery');
$(function(){
    var jQueryBridget = require('jquery-bridget');
    var Isotope = require('isotope-layout');
    
    jQueryBridget( 'isotope', Isotope, $ );
    
    $('.projects').isotope({
        itemSelector: ".grid-item",
        filter: "*"
    });
    
    $('.categories a').on("click", function(){
        var selector = $(this).attr('data-filter');
    
        $('.projects').isotope({
            filter: selector,
        })
    
        //changing active class with click event
        $('a.active-category').removeClass('active-category');
        $(this).addClass('active-category');
    });

})

// $('.projects').isotope({
//     itemSelector: '.grid-item',
//     filter: "*"
// });

// $('a.categories').on("click", function(){
//     var selector = $(this).attr('data-filter');

//     $('.projects').isotope({
//         filter: selector,
//     })

//     //changing active class with click event
//     $('a.active-category').removeClass('active-category');
//     $(this).addClass('active-category');
// });


// $('.grid').isotope({
//   // options...
// });


// if (window.jquery){
//     console.log("loaded jquery");
// } else{
//     console.log("not loaded in");
// }
