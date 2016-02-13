/**
 * Created by atrey on 16.01.2016.
 */

(function($){
    $(function() {
      if (navigator.appVersion.indexOf("Mac")!=-1) {
        $("body").addClass('mac');
      }

        $("#totop").hide();
        $('head').append('<style type="text/css" id="datepickerstyle"></style>');
        $('.datepicker').datepicker({
            beforeShow: function(){

                $("#datepickerstyle").html('.ui-datepicker {width:'+($(this).outerWidth()*2+2)+'px}');
                //console.log($(this).outerWidth()*2+'px');
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#totop').fadeIn();
            } else {
                $('#totop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#totop a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

      $("#responses").flexslider({
        animation: "slide"
      });

        $(".selectric").selectric();

        $('.selectric.citizenship').selectric({
            optionsItemBuilder: function(currItem) {
                return '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span><span class="">'+currItem.text+'</span>';
            },
            labelBuilder: function(currItem) {
                return '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span><span class="">'+currItem.text+'</span>';
            }
        });
    });

})(jQuery);