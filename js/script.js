/**
 * Created by atrey on 16.01.2016.
 */

(function($){
    $(function() {
        $('head').append('<style type="text/css" id="datepickerstyle"></style>');
        $('.datepicker').datepicker({
            beforeShow: function(){

                $("#datepickerstyle").html('.ui-datepicker {width:'+($(this).outerWidth()*2+2)+'px}');
                //console.log($(this).outerWidth()*2+'px');
            }
        });
    });
})(jQuery);