/* app.js
* main script file for our little application
* */

"use strict";

jQuery(document).ready(function(){
    jQuery('p a[href!="#top"]').attr('target', '_blank');
    jQuery('section').hide().fadeIn(1000);

    jQuery('nav a, p a[href="#top"]').click(function(eventObject){
        console.log(this.hash);
        var targetElement = jQuery(this.hash);
        jQuery('html,body').animate({scrollTop: targetElement.offset().top}, 700);

        eventObject.preventDefault();
    });
});