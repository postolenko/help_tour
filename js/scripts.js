$(document).ready(function() {

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

    });


    $(function() {

        var parentBlock;
        var commentsHeight;
        var bottomCoord;

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
