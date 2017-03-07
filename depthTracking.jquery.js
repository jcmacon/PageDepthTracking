
/*
 *  Project:  Page Depth Tracking
 *  Description:  This plugin will allow you to track how far visitors scroll down your page
 *  Author:  John Macon  http://maconrnd.com
 *  License:  Use as you wish as long as you keep the above information intact.
 *  
 *  This plugin requires the use of the in view event Plugin created by Remy Sharp at http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *  
 */
;(function ( $, window, document, undefined ) {
    
    $.fn.depthTracking = function( opts ) {
        
        var settings = $.extend({
            points:4,
            category:'Page Depth',
            action:'href',
            label: 'Percent Viewed: ',
            value: '',
            noninteraction: true
        }, opts);
        
        var pageHt = parseInt($(document).height());
        var sectionDiv = parseInt(pageHt / settings.points);
        var divID = 'pageDepth';
        
        for (var i = 1; i < settings.points+1; i++) {
            
            $('body').append('<div class="viewed' + i + '" id="' + divID + i + '"></div>');
            $('#' + divID + i).css({'position': 'absolute', 'z-index': '999', 'top': parseInt(sectionDiv * i) + 'px', 'height':'1px', 'width': '1px'});
            
            $('#' + divID + i).one('inview', function (event, visible) {
               
                if (visible) {
                    var viewed = $(this).attr('id');
                    viewed = parseInt(viewed.replace('pageDepth', ''));
                    _gaq.push(['_trackEvent', settings.category, $(location).attr(settings.action), settings.label + parseInt(parseFloat(viewed/settings.points).toFixed(2)*100) + '%', settings.value, settings.noninteraction ]);
                }
              });
        }
    };   
})( jQuery, window, document );
