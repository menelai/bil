/**
 * Created by atrey on 16.01.2016.
 */

(function($){
  $(window).load(function() {
    if($.fn.flexslider) {
      $('.contact-slider').flexslider({
        animation: 'slide'
      });
    }

    if($.fn.fancybox) {
      $('.fancy').fancybox();
    }

    if($.fn.masonry)
    $(".responses-masonry").masonry({
      itemSelector: '.response',
      columnWidth: '.response',
      percentPosition: true
    });

    if(false && $("#map").length) {
      console.log('dsfasdf');
      var n = {
        zoom: 15,
        disableDefaultUI: !1,
        scrollwheel: !1,
        center: new google.maps.LatLng(55.7594416, 37.6171829),
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
              {"visibility": "off"}
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {"visibility": "off"}
            ]
          }
        ]
      }, s = new google.maps.Map(document.getElementById("map"), n);

      var pos = new google.maps.LatLng(55.7594416, 37.6371829);
      var marker = new google.maps.Marker({
        position: pos,
        map: s,
        icon: new google.maps.MarkerImage('i/marker.png', null, null, null, new google.maps.Size(19, 28)),
        title: 'lol',
        zIndex: 1
      });

      /*var infowindow = new google.maps.InfoWindow({
        content: 'ТЦ ДАНИЭЛЬ<br>' +
        'г. Москва, ул. Соколово-Мещерская,<br>' +
        'д. 25, торговый центр Даниэль'
      });*/

      var directionsDisplay = new google.maps.DirectionsRenderer({preserveViewport: true, suppressMarkers: true});
      var directionsService = new google.maps.DirectionsService();

      var request = {
        origin: new google.maps.LatLng(55.757205, 37.631649), //точка старта
        destination: new google.maps.LatLng(55.7594416, 37.6371829), //точка финиша
        waypoints: [
          {
            location: new google.maps.LatLng(55.758183, 37.638515),
            stopover:false
          }
        ],
        travelMode: google.maps.DirectionsTravelMode.WALKING  //режим прокладки маршрута
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });

      directionsDisplay.setMap(s);
    }
  });
    $(function() {



      $("[name=payment]").click(function() {
        $("#paymenttitle").attr('data-title', $(this).attr('data-title'));
        $(window).scroll();
      });

      $(window).scroll(function(){
        $('.scrollingcontent').each(function(){

          var t = $(this).offset().top - 100,
            tit = $(this).attr('data-title'),
            h = $(this).height(),
            ws = $(window).scrollTop();


          if (t < ws && ws < (h+t)) {
            $(".scrollingtitle[data-rel='"+$(this).attr('data-rel')+"']").css({backgroundColor: $(this).attr('data-color')}).html(tit);
          }
        })
      });

      $('body').on('focus', '.input-pholder input', function() {
        $(this).parents('.input-pholder:first').addClass('focus');
      });

      $('body').on('blur', '.input-pholder input', function() {
        $(this).parents('.input-pholder:first').removeClass('focus');
      });

      //открывалки
      /*$("body").on('click', '.revealer', function() {
        var rev = $(this);
        var what = $(rev.attr('data-reveal'), this);
        if(what.is(':visible')) {
          what.hide('fast');
        } else {
          what.show('fast');
        }
      });

      setTimeout(function() {
        $('.revealer.shown').click();
      }, 100);*/


      //Если мобильная версия, костыль для страницы брони
      if($("#go-to-search").is(":hidden")) {
        $("#flight-info").after($("#passengers-data"));

        $("#flight-info-title").click(function() {
          $(this).toggleClass('flight-visible');
        });
      }


      if (navigator.appVersion.indexOf("Mac")!=-1) {
        $("body").addClass('mac');
      }

        $("#totop").hide();
        $('head').append('<style type="text/css" id="datepickerstyle"></style>');
        $('.datepicker').datepicker({
            beforeShow: function(){

                $("#datepickerstyle").html('.ui-datepicker {width:'+($(this).outerWidth()*2+2)+'px}');
                console.log($(this).outerWidth()*2+'px');
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



      $(window).resize(function() {
        if($(window).width() <= 768) {
          $(".exslider").flexslider({
            animation: "slide",
            animationLoop: false,

            move: 1
          });
        } else {
          $(".exslider").flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 143,
            itemMargin: 35,
            minItems: 4,
            maxItems: 5,
            move: 1
          });
        }
      });

      $(window).resize();

        $(".selectric").selectric();

        $('.selectric.citizenship').selectric({
            optionsItemBuilder: function(currItem) {
                return (currItem.element.attr('data-flag') ? '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>' : '')+'<span class="">'+currItem.text+'</span>';
            },
            labelBuilder: function(currItem) {
                return (currItem.element.attr('data-flag') ? '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>' : '')+'<span class="">'+currItem.text+'</span>';
            }
        });

      $('.selectric.countrycode').selectric({
        optionsItemBuilder: function(currItem) {
          return '<span class="flag country-code-flag"><img src="'+currItem.element.attr('data-flag')+'"></span><span class="">'+currItem.text+'</span><span class="country-code-option">'+currItem.element.attr('value')+'</span>';
        },
        labelBuilder: function(currItem) {
          return '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>';
        },
        expandToItemText: true
      });

      $(".selectday").datepicker({
        numberOfMonths: $(window).width() >= 800 ? 3 : 1
      });



      if($.fn.sticky) {
        $(".ws-sticky").each(function() {$(this).sticky({topSpacing: 0});});
        $("#nav-col").sticky({topSpacing: 0});
        $("#results-header").sticky({topSpacing: 0});
        $("#blocks").sticky({topSpacing: 28});
        $("#time-and-subscribe").sticky({topSpacing: 28});
      }

      var lastId,
        topMenu = $("#nav-col"),
        topMenuHeight = 0;//topMenu.outerHeight()+15,

        menuItems = topMenu.find("a"),

        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

      menuItems.click(function(e){
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 300);
        e.preventDefault();
      });


      $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;


        var cur = scrollItems.map(function(){
          if ($(this).offset().top < fromTop)
            return this;
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
          lastId = id;

          menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
      });

      var availableTags = [
        {label: "Москва, Россия", code: 'MOW'},
        {label: "Мостар, Босния и Герцеговина", code: 'OMO'},
        {label: "Мосул, Ирак", code: 'OSM'},
        {label: "Санкт-Петербург, Россия", code: 'SVO'},
        {label: "Минск, Белоруссия", code: 'SVO'},
        {label: "Киев, Украина", code: 'SVO'}
      ];
      $( ".autocomplete" ).autocomplete({
        source: availableTags
      }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li><span class='bysides'><div>" + item.label + "</div><div>" + item.code + "</div></span></li>" )
          .appendTo( ul );
      };;

      var is_mobile = false;

      if( $('.desktop').css('display')=='none') {
        is_mobile = true;
      }

      if(is_mobile) {
        $('.datepicker').attr('readonly', true);
      }

      var d = $('#alternate-popup').hide();
      $('body').append(d);

      $(".month-day").click(function() {
        var width = $(this).outerWidth();
        var offset = $(this).offset();
        var containerWidth = $("#alternate-results").outerWidth();
        var containerOffset = $("#alternate-results").offset();
        var match = offset.left + width*7 - 2 <= containerOffset.left + containerWidth;
        d.show().css({
          top: offset.top,
          left: match ? offset.left : 'auto',
          right: match ? 'auto' : containerOffset.left,
          width: width*7 - 2
        });


      });

    });

})(jQuery);

(function() {

  var app = angular.module('test', ['ngAnimate', "ng.deviceDetector"]);

  app.run(function($timeout, $interval, $rootScope, deviceDetector) {

    $rootScope.$on('$includeContentLoaded', function() {
      $(".selectric").selectric();
      $(".selectday").datepicker({
        range: 'period',
        numberOfMonths: $(window).width() >= 800 ? 3 : 1
      });

      $( ".slider-range" ).slider({
        range: true,
        min: 1,
        max: 60,
        values: [ 7, 14 ],
        slide: function( event, ui ) {

        }
      });

    });

    $rootScope.fix = function() {
      $timeout(function() {
        $(".selectric").selectric();
        $('.selectric.citizenship').selectric({
          optionsItemBuilder: function(currItem) {
            return (currItem.element.attr('data-flag') ? '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>' : '')+'<span class="">'+currItem.text+'</span>';
          },
          labelBuilder: function(currItem) {
            return (currItem.element.attr('data-flag') ? '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>' : '')+'<span class="">'+currItem.text+'</span>';
          }
        });

        $('.selectric.countrycode').selectric({
          optionsItemBuilder: function(currItem) {
            return '<span class="flag country-code-flag"><img src="'+currItem.element.attr('data-flag')+'"></span><span class="">'+currItem.text+'</span><span class="country-code-option">'+currItem.element.attr('value')+'</span>';
          },
          labelBuilder: function(currItem) {
            return '<span class="flag"><img src="'+currItem.element.attr('data-flag')+'"></span>';
          },
          expandToItemText: true
        });
      }, 50);

    };

    $rootScope.device = deviceDetector.device;
    $rootScope.isDesktop = deviceDetector.isDesktop();

    $rootScope.tickets = 1550;
    $rootScope.tours = 1550;

    $interval(function() {
      $rootScope.tickets++;
    }, 2000);

    $timeout(function() {
      $interval(function() {
        $rootScope.tours++;
      }, 2000);
    }, 500);

    $interval(function() {
      $rootScope.now = Date.now();
    }, 1000);

    $rootScope.Math = Math;
    $rootScope.showColon = true;

    $interval(function() {
      $rootScope.showColon = !$rootScope.showColon;
    }, 1000);

  });

  app.factory('clickOutsideService', function($window) {
    var objs = {};
    var index = 0;

    $window.addEventListener('click', function(event) {
      if (!event.outsideClickListeners) {
        event.outsideClickListeners = [];
      }
      Object.keys(objs).forEach(function(index) {
        index = parseInt(index);
        if (!~event.outsideClickListeners.indexOf(index)) {
          objs[index].callback();
        }
      });
    });

    return {
      registerElement: function($el, callback) {
        objs[index] = {
          element: $el,
          callback: callback
        };
        return index++;
      },
      removeElement: function(index) {
        delete objs[index];
      }
    }
  });

  app.directive('twClickOutside', twClickOutside);

  twClickOutside.$inject = ['$window', '$parse'];
  function twClickOutside ($window, $parse) {
    return {
      link: function(scope, el, attr) {
        if (!attr.twClickOutside) {
          return;
        }

        var ignore;
        if (attr.ignoreIf) {
          ignore = $parse(attr.ignoreIf);
        }

        var nakedEl = el[0];
        var fn = $parse(attr.twClickOutside);

        var handler = function(e) {
          if (nakedEl === e.target || nakedEl.contains(e.target) || (ignore && ignore(scope))) {
            return;
          }

          scope.$apply(fn);
        };

        $window.addEventListener('click', handler, true);

        scope.$on('$destroy', function(e) {
          $window.removeEventListener('click', handler);
        });
      }
    };
  }

  app.filter('rusPlural', function() {
    return function(number, one, two, five, none) {
      var ret = five;
      var n = number;
      number = Math.abs(number);

      if(number == 0)
        return none;

      number %= 100;
      if (number >= 5 && number <= 20) {
        ret = five;
      } else {
        number %= 10;
        if (number == 1) {
          ret = one;
        } else {
          if (number >= 2 && number <= 4) {
            ret = two;
          }
        }
      }
      return ret;
    }
  });

  app.animation('.slide', function() {
    var NG_HIDE_CLASS = 'ng-hide';
    return {
      beforeAddClass: function(element, className, done) {
        if(className === NG_HIDE_CLASS) {
          element.slideUp('fast', done);
        }
      },
      removeClass: function(element, className, done) {
        if(className === NG_HIDE_CLASS) {
          element.hide().slideDown('fast', done);
        }
      }
    }
  });
})();