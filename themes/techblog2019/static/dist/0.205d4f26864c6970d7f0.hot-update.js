webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, Prism) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Site = Site || {};
(function ($) {
  Site = {
    //properites  
    bootstrap: function bootstrap() {
      console.log('init site bootstrap');
      this.highlightcode();
      this.navBarEvent();
      this.scrollEvent();
      this.lazyLoading();
      this.scrollpy();
      this.collapseTrigger();
      this.highlightKeywords();
    },
    // collapseTrigger
    collapseTrigger: function collapseTrigger() {
      $('.collapse-trigger').each(function (index, el) {
        $($(el).attr('href')).addClass('collapse');
        $(el).click(function (event) {
          event.preventDefault();
          $($(el).attr('href')).toggleClass('collapse');
        });
      });
    },
    // highlight code
    highlightcode: function highlightcode() {
      // hljs.configure({
      //   tabReplace: '    ', // 4 spaces
      //   classPrefix: '', // don't append class prefix
      //   useBR: true
      // })
      // hljs.initHighlighting();      
      // console.log(hljs.listLanguages());
      // hljs.configure({useBR: true});
      Prism.highlightAll();
    },
    highlightKeywords: function highlightKeywords() {
      $('.row-section-content-item-link').each(function (index, ele) {
        var text = $(ele).text();
        console.log(text);
        for (var i = 0; i < Site.keywords.length; i++) {
          text.replace(new RegExp(keywords[i]), "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
        }
        $(ele).text(text);
      });
    },
    keywords: function keywords() {
      return ['ruby', 'rails'];
    },
    // scrollpy
    scrollpy: function scrollpy() {
      if ($('.article-scrollby').length > 0) {
        var $article_scrollby = $('.article-scrollby');
        var article_tiles = $article_scrollby.find(':header:not(h1)');
        var $article_scrollby_sidebar = $($article_scrollby.attr('data-target'));
        var pos_buffer = $('.navbar-fixed').outerHeight(true) + parseInt($('.main-content').css('padding-top'));
        if ($article_scrollby_sidebar.length > 0) {
          var $article_scrollpy_links = $article_scrollby_sidebar.find('.article-scrollpy-links');
          article_tiles.each(function (index, ele) {
            $(ele).attr('id', 'article-titles-' + index);
            $article_scrollpy_links.append('<li><a class="article-titles-link" href="javascript:void(0);" data-href="#' + 'article-titles-' + index + '">' + $(ele).text() + '</a></li>');
          });
          // add click event
          $article_scrollpy_links.on('click', '.article-titles-link', function () {
            Site.smoothScrollToElement($(this).attr('data-href'), -1 * pos_buffer);
          });
        }
      }
    },
    // lazy loading
    lazyLoading: function lazyLoading() {
      $('.lazy').Lazy({
        // your configuration goes here
        placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        onError: function onError(element) {
          // console.log('error loading ' + element.data('src'));
        }
      });
    },
    // scroll event
    scrollEvent: function scrollEvent() {
      this.dynamicPosition();
      $(window).scroll(function () {
        Site.dynamicPosition();
      });
    },
    // dynamicPosition
    dynamicPosition: function dynamicPosition() {
      var scrolltop = $(window).scrollTop();
      var $navbar = $('.navbar-fixed');
      var $sidebar_fixed = $('.sidebar-fixed');
      var navbar_scroll = scrolltop - $('.header').outerHeight();
      var sidebar_scroll = scrolltop - $navbar.outerHeight() - 20;
      navbar_scroll = Math.max(0, navbar_scroll);
      sidebar_scroll = Math.max(0, sidebar_scroll);
      $navbar.parents('.mainnav').css('height', $navbar.outerHeight());

      if (parseInt(navbar_scroll) > 0) {
        $navbar.addClass('navbar-fixed-active');
        $('body').addClass('active-scroll');
      } else {
        $navbar.removeClass('navbar-fixed-active');
        $('body').removeClass('active-scroll');
      }

      if (parseInt(sidebar_scroll) > 0 && parseInt($('.wrapper').outerHeight(true)) > parseInt($(window).outerHeight(true))) {
        $sidebar_fixed.addClass('sidebar-fixed-active');
        var $article_scrollby = $sidebar_fixed.find('#article-scrollpy');
        if ($article_scrollby.length > 0) {
          $article_scrollby.parent('.sidebar-fixed').css('z-index', 68);
        }
        $sidebar_fixed.css('top', $navbar.outerHeight() + 20);
        $sidebar_fixed.css('width', $sidebar_fixed.parents('.sidebar').outerWidth());
      } else {
        $sidebar_fixed.removeClass('sidebar-fixed-active');
      }
    },
    // navbar-menu
    navBarEvent: function navBarEvent() {
      // navbar ui
      $('.navbar-menu li').has('ul').addClass('has-children');
      $('.navbar-menu li').hover(function () {
        // hover in
        var offset = $(this).offset();
        $(this).addClass('hover');
      }, function () {
        // hover out
        $(this).removeClass('hover');
      });
    },
    // smoothScrollTo
    smoothScrollTo: function smoothScrollTo(pos, callback) {
      $('html, body').animate({ scrollTop: pos }, 500).promise().then(function () {
        // callback code here
        if (typeof callback === "function") {
          callback();
        }
      });
    },
    smoothScrollToElement: function smoothScrollToElement(selector, pos_buffer) {
      if ($(selector).length > 0) {
        var pos = $(selector).offset().top + pos_buffer;
        this.smoothScrollTo(pos, null);
      }
    }
  };
})(jQuery);
exports.default = Site;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImkiLCJrZXl3b3JkcyIsImxlbmd0aCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkYXJ0aWNsZV9zY3JvbGxieSIsImFydGljbGVfdGlsZXMiLCJmaW5kIiwiJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciIsInBvc19idWZmZXIiLCJvdXRlckhlaWdodCIsInBhcnNlSW50IiwiY3NzIiwiJGFydGljbGVfc2Nyb2xscHlfbGlua3MiLCJhcHBlbmQiLCJvbiIsInNtb290aFNjcm9sbFRvRWxlbWVudCIsIkxhenkiLCJwbGFjZWhvbGRlciIsIm9uRXJyb3IiLCJlbGVtZW50IiwiZHluYW1pY1Bvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwiJG5hdmJhciIsIiRzaWRlYmFyX2ZpeGVkIiwibmF2YmFyX3Njcm9sbCIsInNpZGViYXJfc2Nyb2xsIiwiTWF0aCIsIm1heCIsInBhcmVudHMiLCJyZW1vdmVDbGFzcyIsInBhcmVudCIsIm91dGVyV2lkdGgiLCJoYXMiLCJob3ZlciIsIm9mZnNldCIsInNtb290aFNjcm9sbFRvIiwicG9zIiwiY2FsbGJhY2siLCJhbmltYXRlIiwicHJvbWlzZSIsInRoZW4iLCJzZWxlY3RvciIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6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LEVBQStCN0MsUUFBL0IsQ0FBd0MsY0FBeEM7QUFDQWYsUUFBRSxpQkFBRixFQUFxQjZELEtBQXJCLENBQTJCLFlBQVU7QUFDbkM7QUFDQSxZQUFJQyxTQUFTOUQsRUFBRSxJQUFGLEVBQVE4RCxNQUFSLEVBQWI7QUFDQTlELFVBQUUsSUFBRixFQUFRZSxRQUFSLENBQWlCLE9BQWpCO0FBQ0QsT0FKRCxFQUlFLFlBQVU7QUFDVjtBQUNBZixVQUFFLElBQUYsRUFBUXlELFdBQVIsQ0FBb0IsT0FBcEI7QUFDRCxPQVBEO0FBUUQsS0FuSUk7QUFvSUw7QUFDQU0sb0JBQWdCLHdCQUFXQyxHQUFYLEVBQWdCQyxRQUFoQixFQUEwQjtBQUN4Q2pFLFFBQUUsWUFBRixFQUNDa0UsT0FERCxDQUNTLEVBQUVqQixXQUFXZSxHQUFiLEVBRFQsRUFDNkIsR0FEN0IsRUFFQ0csT0FGRCxHQUdDQyxJQUhELENBR00sWUFBVTtBQUNaO0FBQ0EsWUFBSSxPQUFPSCxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDQTtBQUNIO0FBQ0osT0FSRDtBQVNELEtBL0lJO0FBZ0pMekIsMkJBQXVCLCtCQUFVNkIsUUFBVixFQUFvQnBDLFVBQXBCLEVBQWlDO0FBQ3RELFVBQUlqQyxFQUFFcUUsUUFBRixFQUFZM0MsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixZQUFJc0MsTUFBTWhFLEVBQUVxRSxRQUFGLEVBQVlQLE1BQVosR0FBcUJRLEdBQXJCLEdBQTJCckMsVUFBckM7QUFDQSxhQUFLOEIsY0FBTCxDQUFvQkMsR0FBcEIsRUFBeUIsSUFBekI7QUFDRDtBQUNGO0FBckpJLEdBQVA7QUF1SkQsQ0F4SkQsRUF3SkdPLE1BeEpIO2tCQXlKZXhFLEkiLCJmaWxlIjoiMC4yMDVkNGYyNjg2NGM2OTcwZDdmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNpdGUgPSBTaXRlIHx8IHt9O1xuKGZ1bmN0aW9uKCAkICkge1xuICBTaXRlID0ge1xuICAgIC8vcHJvcGVyaXRlcyAgXG4gICAgYm9vdHN0cmFwIDogZnVuY3Rpb24oKXsgICBcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0IHNpdGUgYm9vdHN0cmFwJyk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGNvZGUoKTtcbiAgICAgIHRoaXMubmF2QmFyRXZlbnQoKTtcbiAgICAgIHRoaXMuc2Nyb2xsRXZlbnQoKTtcbiAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc2Nyb2xscHkoKTtcbiAgICAgIHRoaXMuY29sbGFwc2VUcmlnZ2VyKCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXdvcmRzKCk7XG4gICAgfSxcbiAgICAvLyBjb2xsYXBzZVRyaWdnZXJcbiAgICBjb2xsYXBzZVRyaWdnZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcuY29sbGFwc2UtdHJpZ2dlcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICQoJChlbCkuYXR0cignaHJlZicpKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgJChlbCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICQoJChlbCkuYXR0cignaHJlZicpKS50b2dnbGVDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIGhpZ2hsaWdodCBjb2RlXG4gICAgaGlnaGxpZ2h0Y29kZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vIGhsanMuY29uZmlndXJlKHtcbiAgICAgIC8vICAgdGFiUmVwbGFjZTogJyAgICAnLCAvLyA0IHNwYWNlc1xuICAgICAgLy8gICBjbGFzc1ByZWZpeDogJycsIC8vIGRvbid0IGFwcGVuZCBjbGFzcyBwcmVmaXhcbiAgICAgIC8vICAgdXNlQlI6IHRydWVcbiAgICAgIC8vIH0pXG4gICAgICAvLyBobGpzLmluaXRIaWdobGlnaHRpbmcoKTsgICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhsanMubGlzdExhbmd1YWdlcygpKTtcbiAgICAgIC8vIGhsanMuY29uZmlndXJlKHt1c2VCUjogdHJ1ZX0pO1xuICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgXG4gICAgfSxcbiAgICBoaWdobGlnaHRLZXl3b3JkczogZnVuY3Rpb24oKXsgICAgICBcbiAgICAgICQoJy5yb3ctc2VjdGlvbi1jb250ZW50LWl0ZW0tbGluaycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZSl7XG4gICAgICAgIGxldCB0ZXh0ID0gJChlbGUpLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IFNpdGUua2V5d29yZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIHRleHQucmVwbGFjZSggbmV3IFJlZ0V4cChrZXl3b3Jkc1tpXSksIFwiPHNwYW4gY2xhc3M9XFxcImhsLWtleXdvcmRzXFxcIj5cIiArIGtleXdvcmRzW2ldICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgICQoZWxlKS50ZXh0KHRleHQpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIGtleXdvcmRzOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ3J1YnknLFxuICAgICAgICAncmFpbHMnXG4gICAgICBdO1xuICAgIH0sXG4gICAgLy8gc2Nyb2xscHlcbiAgICBzY3JvbGxweTogZnVuY3Rpb24oKXtcbiAgICAgIGlmKCAkKCcuYXJ0aWNsZS1zY3JvbGxieScpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbGJ5ID0gJCgnLmFydGljbGUtc2Nyb2xsYnknKTtcbiAgICAgICAgdmFyIGFydGljbGVfdGlsZXMgPSAkYXJ0aWNsZV9zY3JvbGxieS5maW5kKCc6aGVhZGVyOm5vdChoMSknKTtcbiAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIgPSAkKCRhcnRpY2xlX3Njcm9sbGJ5LmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgICAgICB2YXIgcG9zX2J1ZmZlciA9ICQoJy5uYXZiYXItZml4ZWQnKS5vdXRlckhlaWdodCh0cnVlKSArIHBhcnNlSW50KCQoJy5tYWluLWNvbnRlbnQnKS5jc3MoJ3BhZGRpbmctdG9wJykpO1xuICAgICAgICBpZiggJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhci5sZW5ndGggPiAwICl7XG4gICAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzID0gJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhci5maW5kKCcuYXJ0aWNsZS1zY3JvbGxweS1saW5rcycpO1xuICAgICAgICAgIGFydGljbGVfdGlsZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlKXtcbiAgICAgICAgICAgICQoZWxlKS5hdHRyKCdpZCcsICdhcnRpY2xlLXRpdGxlcy0nICsgaW5kZXgpO1xuICAgICAgICAgICAgJGFydGljbGVfc2Nyb2xscHlfbGlua3MuYXBwZW5kKCc8bGk+PGEgY2xhc3M9XCJhcnRpY2xlLXRpdGxlcy1saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLWhyZWY9XCIjJyArICdhcnRpY2xlLXRpdGxlcy0nICsgaW5kZXggKyAnXCI+JyArICQoZWxlKS50ZXh0KCkgKyAnPC9hPjwvbGk+Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50XG4gICAgICAgICAgJGFydGljbGVfc2Nyb2xscHlfbGlua3Mub24oJ2NsaWNrJywnLmFydGljbGUtdGl0bGVzLWxpbmsnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2l0ZS5zbW9vdGhTY3JvbGxUb0VsZW1lbnQoICQodGhpcykuYXR0cignZGF0YS1ocmVmJyksIC0xICogcG9zX2J1ZmZlcik7XG4gICAgICAgICAgfSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBsYXp5IGxvYWRpbmdcbiAgICBsYXp5TG9hZGluZzogZnVuY3Rpb24oKXtcbiAgICAgICQoJy5sYXp5JykuTGF6eSh7XG4gICAgICAgIC8vIHlvdXIgY29uZmlndXJhdGlvbiBnb2VzIGhlcmVcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFMQVBRQVB6bDV1THI5TnJsOGU3Li4uXCIsXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyAnICsgZWxlbWVudC5kYXRhKCdzcmMnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gc2Nyb2xsIGV2ZW50XG4gICAgc2Nyb2xsRXZlbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmR5bmFtaWNQb3NpdGlvbigpO1xuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNpdGUuZHluYW1pY1Bvc2l0aW9uKCk7XG4gICAgICB9KSAgICAgIFxuICAgIH0sXG4gICAgLy8gZHluYW1pY1Bvc2l0aW9uXG4gICAgZHluYW1pY1Bvc2l0aW9uOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIHNjcm9sbHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTsgIFxuICAgICAgdmFyICRuYXZiYXIgPSAkKCcubmF2YmFyLWZpeGVkJyk7XG4gICAgICB2YXIgJHNpZGViYXJfZml4ZWQgPSAkKCcuc2lkZWJhci1maXhlZCcpO1xuICAgICAgdmFyIG5hdmJhcl9zY3JvbGwgPSBzY3JvbGx0b3AgLSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgIHZhciBzaWRlYmFyX3Njcm9sbCA9IHNjcm9sbHRvcCAtICRuYXZiYXIub3V0ZXJIZWlnaHQoKSAtIDIwO1xuICAgICAgbmF2YmFyX3Njcm9sbCA9IE1hdGgubWF4KDAsbmF2YmFyX3Njcm9sbCk7XG4gICAgICBzaWRlYmFyX3Njcm9sbCA9IE1hdGgubWF4KDAsc2lkZWJhcl9zY3JvbGwpO1xuICAgICAgJG5hdmJhci5wYXJlbnRzKCcubWFpbm5hdicpLmNzcygnaGVpZ2h0JywgJG5hdmJhci5vdXRlckhlaWdodCgpKTtcblxuICAgICAgaWYgKCBwYXJzZUludChuYXZiYXJfc2Nyb2xsKSA+IDAgKSB7XG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ25hdmJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdhY3RpdmUtc2Nyb2xsJyk7XG4gICAgICB9ZWxzZXsgICAgXG4gICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtc2Nyb2xsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCBwYXJzZUludChzaWRlYmFyX3Njcm9sbCkgPiAwICYmIHBhcnNlSW50KCQoJy53cmFwcGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpID4gcGFyc2VJbnQoJCh3aW5kb3cpLm91dGVySGVpZ2h0KHRydWUpKSkge1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5hZGRDbGFzcygnc2lkZWJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgbGV0ICRhcnRpY2xlX3Njcm9sbGJ5ID0gJHNpZGViYXJfZml4ZWQuZmluZCgnI2FydGljbGUtc2Nyb2xscHknKTtcbiAgICAgICAgaWYoJGFydGljbGVfc2Nyb2xsYnkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgJGFydGljbGVfc2Nyb2xsYnkucGFyZW50KCcuc2lkZWJhci1maXhlZCcpLmNzcygnei1pbmRleCcsIDY4KTtcbiAgICAgICAgfVxuICAgICAgICAkc2lkZWJhcl9maXhlZC5jc3MoJ3RvcCcsICRuYXZiYXIub3V0ZXJIZWlnaHQoKSArIDIwKTtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQuY3NzKCd3aWR0aCcsICRzaWRlYmFyX2ZpeGVkLnBhcmVudHMoJy5zaWRlYmFyJykub3V0ZXJXaWR0aCgpKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5yZW1vdmVDbGFzcygnc2lkZWJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIG5hdmJhci1tZW51XG4gICAgbmF2QmFyRXZlbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBuYXZiYXIgdWlcbiAgICAgICQoJy5uYXZiYXItbWVudSBsaScpLmhhcygndWwnKS5hZGRDbGFzcygnaGFzLWNoaWxkcmVuJyk7XG4gICAgICAkKCcubmF2YmFyLW1lbnUgbGknKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAvLyBob3ZlciBpblxuICAgICAgICB2YXIgb2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXInKTtcbiAgICAgIH0sZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gaG92ZXIgb3V0XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIHNtb290aFNjcm9sbFRvXG4gICAgc21vb3RoU2Nyb2xsVG86IGZ1bmN0aW9uICggcG9zLCBjYWxsYmFjaykge1xuICAgICAgJCgnaHRtbCwgYm9keScpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zIH0sIDUwMClcbiAgICAgIC5wcm9taXNlKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gY2FsbGJhY2sgY29kZSBoZXJlXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgcG9zX2J1ZmZlciApIHtcbiAgICAgIGlmKCAkKHNlbGVjdG9yKS5sZW5ndGggPiAwICl7XG4gICAgICAgIHZhciBwb3MgPSAkKHNlbGVjdG9yKS5vZmZzZXQoKS50b3AgKyBwb3NfYnVmZmVyO1xuICAgICAgICB0aGlzLnNtb290aFNjcm9sbFRvKHBvcywgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoalF1ZXJ5KTtcbmV4cG9ydCBkZWZhdWx0IFNpdGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvc2l0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=