$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getCommentsHeight();

    getTopBorderLine();

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

        getTopBorderLine();

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

    function getTopBorderLine() {

        // $("section").each(function() {

        //     if( $(this).hasClass("border") && $(this).find(".top_line").length == 0 ) {

        //         $(this).prepend("<span class='top_line'></span>");

        //     }

        //     var topLine = $(this).find(".top_line");

        //     topLine.css({
        //         "width" : $(".inner-row").width() + "px"
        //     });

        // });

    }

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
