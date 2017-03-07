# PageDepthTracking
Advanced Analytics to help developers speed up the data gathering process for their sites

To use this script first add the files (requires jQuery)

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="/js/jquery.inview.js" type="text/javascript"></script>
<script src="/js/depthTracking.jquery.js" type="text/javascript"></script>

<script>
jQuery(document).ready(function($) {
        $('body').depthTracking(
            {
                points:4, //set the number of points you want to track.  Default is 4 , whole intergers only  If you track 4 points, it will supply 25%, 50%, 75%, 100% as percentages viewed.
                category:'Page Depth Tracking', //The name you supply for the group of objects you want to track.  The default is Page Depth, string only
                action:'pathname', //default is href, this is how you want to show your page, href = the entire url, or you can choose pathname to just show the filename.  use standard javascript location object properties
                label:'Percent Viewed: ', //default is Percent Viewed.
                value:25, //An integer that you can use to provide numerical data about the user event.
                noninteraction:false //A boolean that when set to true, indicates that the event hit will not be used in bounce-rate calculation.
            });    
            
    });

</script>
