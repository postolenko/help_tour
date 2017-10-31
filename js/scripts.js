$(window).on('load', function () {
    var $preloader = $('.volosunov'),
        $spinner = $preloader.find('.spinner');
    $spinner.delay(400).fadeOut('slow');
    $preloader.delay(400).fadeOut('slow');
    $('.mov1').addClass('animated');
});

$(document).ready(function() {

    var parentBlock;
    var commentsHeight;
    var bottomCoord;

    // ---------------------------

    var popupName;
    var popupBlock;
    var popupBox;
    var popupOffsetTop;

    // ---------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getCommentsHeight();

    getFooterPosition();

    $(".wrapper").css({"margin-top" :  $(".header-site").outerHeight(true) + "px"});

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});
        $(".wrapper").css({"margin-top" :  $(".header-site").outerHeight(true) + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

        // -----------------

        getCommentsHeight();

        getPopupPosition();

    });


    $(function() {

        // var parentBlock;
        // var commentsHeight;
        // var bottomCoord;

        $(".show-comments").click(function(e) {

            e.preventDefault();

            parentBlock = $(this).closest(".comments");
            commentsHeight = $(this).closest(".commets-inner").height();

            if( parentBlock.height() >= commentsHeight ) {

                bottomCoord = parentBlock.find(".comment:eq(1)").offset().top - parentBlock.offset().top;
                $(this).removeClass("active");
                parentBlock.removeClass("active");

            } else {

                bottomCoord = commentsHeight;
                $(this).addClass("active");
                parentBlock.addClass("active");

            }

            parentBlock.animate({
                "height" : bottomCoord + "px"
            }, 400);

        });

    });

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".resp-nav").is(":hidden") ) {

                $(".resp-nav").fadeIn(400);
                $(this).addClass("active");

            } else {

                $(".resp-nav").fadeOut(400);
                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( $(".resp-nav").is(":visible") ) {

                    $(".resp-nav").fadeOut(300);
                    $(".respmenubtn").removeClass("active");

                }

            }

        });

    });

    $(function() {

        if (navigator.appVersion.toUpperCase().indexOf("MSIE") != -1 ||
            navigator.appVersion.toUpperCase().indexOf("TRIDENT") != -1 ||
            navigator.appVersion.toUpperCase().indexOf("EDGE") != -1) {

            $("body").addClass("ie");

        }

    });

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup");
            popupBlock = $("[data-popup-name = '"+ popupName +"']");

            popupBlock.fadeIn(400);

            getPopupPosition();

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( popupBlock.is(":visible") ) {

                    popupBlock.fadeOut(300);

                }

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup-wrapp");

            popupBlock.fadeOut(300);

        });

        $(document).mouseup(function (e){

            if( $(".popup-wrapp").length > 0 ) {

                $(".popup-wrapp").each(function() {

                    hide_element = $(this).find(".popup");

                    hide_element = $(".popup-wrapp").find(".popup");

                    if (!hide_element.is(e.target)
                        && hide_element.has(e.target).length === 0) {

                            $(this).fadeOut(300);

                    }

                });

            }

        });

    });

    function getCommentsHeight() {

        $(".comments").each(function() {

            bottomCoord = $(this).find(".comment:eq(1)").offset().top - $(this).offset().top;

            if( $(this).hasClass("active") ) {

                $(this).css({                    
                    "height" : "auto"
                });

            } else {

                $(this).css({
                    "height" : bottomCoord + "px"
                });

            }

        });

    }

    function getPopupPosition() {

        if( $(".popup-wrapp").length > 0 ) {

            $(".popup-wrapp").each(function() {

                popupBox = $(this).find(".popup");

                if( $(window).height() > popupBox.outerHeight() ) {

                    popupOffsetTop = ( $(window).height() - popupBox.outerHeight() ) / 2;

                } else {

                    popupOffsetTop = 10;

                }

                popupBox.css({

                    "margin-top" : popupOffsetTop + "px"

                });

            });

        }

    }

    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            setFooterPositionInterval = setInterval(function() {

                contentCoor = $(".content").offset().top + $(".content").height();
                footerCoor = $(".footer").offset().top;

                if( contentCoor != footerCoor ) {

                    $(".wrapper").css({"min-height" : $(window).height() + "px"});

                    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                    clearInterval(setFooterPositionInterval);

                }

            }, 35);

        }

    }



});
