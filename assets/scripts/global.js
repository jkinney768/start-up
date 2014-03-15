/* ---------------------------------------------------------------------
Global JavaScript

Target Browsers: All
Authors: Jason Kinney
------------------------------------------------------------------------ */

// Namespace Object
var NERD = NERD || {};

// Pass reference to jQuery and Namespace
(function($, APP) {

    // DOM Ready Function
    $(function() {
        APP.HasJS.init();
    });

	APP.HasJS = {
    	init: function() {
        	$('html').removeClass('no-js').addClass('js');
    }
};


}(jQuery, NERD));