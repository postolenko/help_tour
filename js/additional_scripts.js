(function($){

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	$(window).on("load",function(){

		getScrollBar();

	});

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getScrollBar();

	});

	function getScrollBar() {

		if( bodyWidth <= 768 ) {

			$(".resp-nav").mCustomScrollbar();

		} else {

			$(".resp-nav").mCustomScrollbar("destroy");

		}

	}

})(jQuery);