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
          text.replace(new RegExp(keywords[i] + '/i'), "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImkiLCJrZXl3b3JkcyIsImxlbmd0aCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkYXJ0aWNsZV9zY3JvbGxieSIsImFydGljbGVfdGlsZXMiLCJmaW5kIiwiJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciIsInBvc19idWZmZXIiLCJvdXRlckhlaWdodCIsInBhcnNlSW50IiwiY3NzIiwiJGFydGljbGVfc2Nyb2xscHlfbGlua3MiLCJhcHBlbmQiLCJvbiIsInNtb290aFNjcm9sbFRvRWxlbWVudCIsIkxhenkiLCJwbGFjZWhvbGRlciIsIm9uRXJyb3IiLCJlbGVtZW50IiwiZHluYW1pY1Bvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwiJG5hdmJhciIsIiRzaWRlYmFyX2ZpeGVkIiwibmF2YmFyX3Njcm9sbCIsInNpZGViYXJfc2Nyb2xsIiwiTWF0aCIsIm1heCIsInBhcmVudHMiLCJyZW1vdmVDbGFzcyIsInBhcmVudCIsIm91dGVyV2lkdGgiLCJoYXMiLCJob3ZlciIsIm9mZnNldCIsInNtb290aFNjcm9sbFRvIiwicG9zIiwiY2FsbGJhY2siLCJhbmltYXRlIiwicHJvbWlzZSIsInRoZW4iLCJzZWxlY3RvciIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6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LElBQXpCLEVBQStCN0MsUUFBL0IsQ0FBd0MsY0FBeEM7QUFDQWYsUUFBRSxpQkFBRixFQUFxQjZELEtBQXJCLENBQTJCLFlBQVU7QUFDbkM7QUFDQSxZQUFJQyxTQUFTOUQsRUFBRSxJQUFGLEVBQVE4RCxNQUFSLEVBQWI7QUFDQTlELFVBQUUsSUFBRixFQUFRZSxRQUFSLENBQWlCLE9BQWpCO0FBQ0QsT0FKRCxFQUlFLFlBQVU7QUFDVjtBQUNBZixVQUFFLElBQUYsRUFBUXlELFdBQVIsQ0FBb0IsT0FBcEI7QUFDRCxPQVBEO0FBUUQsS0FuSUk7QUFvSUw7QUFDQU0sb0JBQWdCLHdCQUFXQyxHQUFYLEVBQWdCQyxRQUFoQixFQUEwQjtBQUN4Q2pFLFFBQUUsWUFBRixFQUNDa0UsT0FERCxDQUNTLEVBQUVqQixXQUFXZSxHQUFiLEVBRFQsRUFDNkIsR0FEN0IsRUFFQ0csT0FGRCxHQUdDQyxJQUhELENBR00sWUFBVTtBQUNaO0FBQ0EsWUFBSSxPQUFPSCxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDQTtBQUNIO0FBQ0osT0FSRDtBQVNELEtBL0lJO0FBZ0pMekIsMkJBQXVCLCtCQUFVNkIsUUFBVixFQUFvQnBDLFVBQXBCLEVBQWlDO0FBQ3RELFVBQUlqQyxFQUFFcUUsUUFBRixFQUFZM0MsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixZQUFJc0MsTUFBTWhFLEVBQUVxRSxRQUFGLEVBQVlQLE1BQVosR0FBcUJRLEdBQXJCLEdBQTJCckMsVUFBckM7QUFDQSxhQUFLOEIsY0FBTCxDQUFvQkMsR0FBcEIsRUFBeUIsSUFBekI7QUFDRDtBQUNGO0FBckpJLEdBQVA7QUF1SkQsQ0F4SkQsRUF3SkdPLE1BeEpIO2tCQXlKZXhFLEkiLCJmaWxlIjoiMC5jYzRiMGNkZDVlMmY0MWRlYTIxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNpdGUgPSBTaXRlIHx8IHt9O1xuKGZ1bmN0aW9uKCAkICkge1xuICBTaXRlID0ge1xuICAgIC8vcHJvcGVyaXRlcyAgXG4gICAgYm9vdHN0cmFwIDogZnVuY3Rpb24oKXsgICBcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0IHNpdGUgYm9vdHN0cmFwJyk7XG4gICAgICB0aGlzLmhpZ2hsaWdodGNvZGUoKTtcbiAgICAgIHRoaXMubmF2QmFyRXZlbnQoKTtcbiAgICAgIHRoaXMuc2Nyb2xsRXZlbnQoKTtcbiAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc2Nyb2xscHkoKTtcbiAgICAgIHRoaXMuY29sbGFwc2VUcmlnZ2VyKCk7XG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXdvcmRzKCk7XG4gICAgfSxcbiAgICAvLyBjb2xsYXBzZVRyaWdnZXJcbiAgICBjb2xsYXBzZVRyaWdnZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcuY29sbGFwc2UtdHJpZ2dlcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICQoJChlbCkuYXR0cignaHJlZicpKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgJChlbCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICQoJChlbCkuYXR0cignaHJlZicpKS50b2dnbGVDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIGhpZ2hsaWdodCBjb2RlXG4gICAgaGlnaGxpZ2h0Y29kZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vIGhsanMuY29uZmlndXJlKHtcbiAgICAgIC8vICAgdGFiUmVwbGFjZTogJyAgICAnLCAvLyA0IHNwYWNlc1xuICAgICAgLy8gICBjbGFzc1ByZWZpeDogJycsIC8vIGRvbid0IGFwcGVuZCBjbGFzcyBwcmVmaXhcbiAgICAgIC8vICAgdXNlQlI6IHRydWVcbiAgICAgIC8vIH0pXG4gICAgICAvLyBobGpzLmluaXRIaWdobGlnaHRpbmcoKTsgICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhsanMubGlzdExhbmd1YWdlcygpKTtcbiAgICAgIC8vIGhsanMuY29uZmlndXJlKHt1c2VCUjogdHJ1ZX0pO1xuICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgXG4gICAgfSxcbiAgICBoaWdobGlnaHRLZXl3b3JkczogZnVuY3Rpb24oKXsgICAgICBcbiAgICAgICQoJy5yb3ctc2VjdGlvbi1jb250ZW50LWl0ZW0tbGluaycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZSl7XG4gICAgICAgIGxldCB0ZXh0ID0gJChlbGUpLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IFNpdGUua2V5d29yZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIHRleHQucmVwbGFjZSggbmV3IFJlZ0V4cChrZXl3b3Jkc1tpXSArICcvaScpLCBcIjxzcGFuIGNsYXNzPVxcXCJobC1rZXl3b3Jkc1xcXCI+XCIgKyBrZXl3b3Jkc1tpXSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKGVsZSkudGV4dCh0ZXh0KTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBrZXl3b3JkczogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICdydWJ5JyxcbiAgICAgICAgJ3JhaWxzJ1xuICAgICAgXTtcbiAgICB9LFxuICAgIC8vIHNjcm9sbHB5XG4gICAgc2Nyb2xscHk6IGZ1bmN0aW9uKCl7XG4gICAgICBpZiggJCgnLmFydGljbGUtc2Nyb2xsYnknKS5sZW5ndGggPiAwICl7XG4gICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxieSA9ICQoJy5hcnRpY2xlLXNjcm9sbGJ5Jyk7XG4gICAgICAgIHZhciBhcnRpY2xlX3RpbGVzID0gJGFydGljbGVfc2Nyb2xsYnkuZmluZCgnOmhlYWRlcjpub3QoaDEpJyk7XG4gICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyID0gJCgkYXJ0aWNsZV9zY3JvbGxieS5hdHRyKCdkYXRhLXRhcmdldCcpKTtcbiAgICAgICAgdmFyIHBvc19idWZmZXIgPSAkKCcubmF2YmFyLWZpeGVkJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyBwYXJzZUludCgkKCcubWFpbi1jb250ZW50JykuY3NzKCdwYWRkaW5nLXRvcCcpKTtcbiAgICAgICAgaWYoICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIubGVuZ3RoID4gMCApe1xuICAgICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcyA9ICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIuZmluZCgnLmFydGljbGUtc2Nyb2xscHktbGlua3MnKTtcbiAgICAgICAgICBhcnRpY2xlX3RpbGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZSl7XG4gICAgICAgICAgICAkKGVsZSkuYXR0cignaWQnLCAnYXJ0aWNsZS10aXRsZXMtJyArIGluZGV4KTtcbiAgICAgICAgICAgICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzLmFwcGVuZCgnPGxpPjxhIGNsYXNzPVwiYXJ0aWNsZS10aXRsZXMtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS1ocmVmPVwiIycgKyAnYXJ0aWNsZS10aXRsZXMtJyArIGluZGV4ICsgJ1wiPicgKyAkKGVsZSkudGV4dCgpICsgJzwvYT48L2xpPicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGFkZCBjbGljayBldmVudFxuICAgICAgICAgICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzLm9uKCdjbGljaycsJy5hcnRpY2xlLXRpdGxlcy1saW5rJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFNpdGUuc21vb3RoU2Nyb2xsVG9FbGVtZW50KCAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpLCAtMSAqIHBvc19idWZmZXIpO1xuICAgICAgICAgIH0pOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gbGF6eSBsb2FkaW5nXG4gICAgbGF6eUxvYWRpbmc6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubGF6eScpLkxhenkoe1xuICAgICAgICAvLyB5b3VyIGNvbmZpZ3VyYXRpb24gZ29lcyBoZXJlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBTEFQUUFQemw1dUxyOU5ybDhlNy4uLlwiLFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgJyArIGVsZW1lbnQuZGF0YSgnc3JjJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIHNjcm9sbCBldmVudFxuICAgIHNjcm9sbEV2ZW50OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5keW5hbWljUG9zaXRpb24oKTtcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBTaXRlLmR5bmFtaWNQb3NpdGlvbigpO1xuICAgICAgfSkgICAgICBcbiAgICB9LFxuICAgIC8vIGR5bmFtaWNQb3NpdGlvblxuICAgIGR5bmFtaWNQb3NpdGlvbjogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBzY3JvbGx0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7ICBcbiAgICAgIHZhciAkbmF2YmFyID0gJCgnLm5hdmJhci1maXhlZCcpO1xuICAgICAgdmFyICRzaWRlYmFyX2ZpeGVkID0gJCgnLnNpZGViYXItZml4ZWQnKTtcbiAgICAgIHZhciBuYXZiYXJfc2Nyb2xsID0gc2Nyb2xsdG9wIC0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgc2lkZWJhcl9zY3JvbGwgPSBzY3JvbGx0b3AgLSAkbmF2YmFyLm91dGVySGVpZ2h0KCkgLSAyMDtcbiAgICAgIG5hdmJhcl9zY3JvbGwgPSBNYXRoLm1heCgwLG5hdmJhcl9zY3JvbGwpO1xuICAgICAgc2lkZWJhcl9zY3JvbGwgPSBNYXRoLm1heCgwLHNpZGViYXJfc2Nyb2xsKTtcbiAgICAgICRuYXZiYXIucGFyZW50cygnLm1haW5uYXYnKS5jc3MoJ2hlaWdodCcsICRuYXZiYXIub3V0ZXJIZWlnaHQoKSk7XG5cbiAgICAgIGlmICggcGFyc2VJbnQobmF2YmFyX3Njcm9sbCkgPiAwICkge1xuICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCduYXZiYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYWN0aXZlLXNjcm9sbCcpO1xuICAgICAgfWVsc2V7ICAgIFxuICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCduYXZiYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYWN0aXZlLXNjcm9sbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiggcGFyc2VJbnQoc2lkZWJhcl9zY3JvbGwpID4gMCAmJiBwYXJzZUludCgkKCcud3JhcHBlcicpLm91dGVySGVpZ2h0KHRydWUpKSA+IHBhcnNlSW50KCQod2luZG93KS5vdXRlckhlaWdodCh0cnVlKSkpIHtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQuYWRkQ2xhc3MoJ3NpZGViYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgIGxldCAkYXJ0aWNsZV9zY3JvbGxieSA9ICRzaWRlYmFyX2ZpeGVkLmZpbmQoJyNhcnRpY2xlLXNjcm9sbHB5Jyk7XG4gICAgICAgIGlmKCRhcnRpY2xlX3Njcm9sbGJ5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICRhcnRpY2xlX3Njcm9sbGJ5LnBhcmVudCgnLnNpZGViYXItZml4ZWQnKS5jc3MoJ3otaW5kZXgnLCA2OCk7XG4gICAgICAgIH1cbiAgICAgICAgJHNpZGViYXJfZml4ZWQuY3NzKCd0b3AnLCAkbmF2YmFyLm91dGVySGVpZ2h0KCkgKyAyMCk7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmNzcygnd2lkdGgnLCAkc2lkZWJhcl9maXhlZC5wYXJlbnRzKCcuc2lkZWJhcicpLm91dGVyV2lkdGgoKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQucmVtb3ZlQ2xhc3MoJ3NpZGViYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBuYXZiYXItbWVudVxuICAgIG5hdkJhckV2ZW50OiBmdW5jdGlvbigpe1xuICAgICAgLy8gbmF2YmFyIHVpXG4gICAgICAkKCcubmF2YmFyLW1lbnUgbGknKS5oYXMoJ3VsJykuYWRkQ2xhc3MoJ2hhcy1jaGlsZHJlbicpO1xuICAgICAgJCgnLm5hdmJhci1tZW51IGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gaG92ZXIgaW5cbiAgICAgICAgdmFyIG9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICB9LGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGhvdmVyIG91dFxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBzbW9vdGhTY3JvbGxUb1xuICAgIHNtb290aFNjcm9sbFRvOiBmdW5jdGlvbiAoIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKVxuICAgICAgLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvcyB9LCA1MDApXG4gICAgICAucHJvbWlzZSgpXG4gICAgICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIGNhbGxiYWNrIGNvZGUgaGVyZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc21vb3RoU2Nyb2xsVG9FbGVtZW50OiBmdW5jdGlvbiggc2VsZWN0b3IsIHBvc19idWZmZXIgKSB7XG4gICAgICBpZiggJChzZWxlY3RvcikubGVuZ3RoID4gMCApe1xuICAgICAgICB2YXIgcG9zID0gJChzZWxlY3Rvcikub2Zmc2V0KCkudG9wICsgcG9zX2J1ZmZlcjtcbiAgICAgICAgdGhpcy5zbW9vdGhTY3JvbGxUbyhwb3MsIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKGpRdWVyeSk7XG5leHBvcnQgZGVmYXVsdCBTaXRlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3NpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9