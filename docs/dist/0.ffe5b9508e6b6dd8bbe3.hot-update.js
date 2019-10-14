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
        var text = $(ele).html();
        console.log(text);
        console.log(Site.keywords.length);
        for (var i = 0; i < Site.keywords.length; i++) {
          $(ele).html(i);
          // text = text.replace( 'Rails', "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
        }
        $(ele).html(text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImh0bWwiLCJrZXl3b3JkcyIsImxlbmd0aCIsImkiLCIkYXJ0aWNsZV9zY3JvbGxieSIsImFydGljbGVfdGlsZXMiLCJmaW5kIiwiJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciIsInBvc19idWZmZXIiLCJvdXRlckhlaWdodCIsInBhcnNlSW50IiwiY3NzIiwiJGFydGljbGVfc2Nyb2xscHlfbGlua3MiLCJhcHBlbmQiLCJvbiIsInNtb290aFNjcm9sbFRvRWxlbWVudCIsIkxhenkiLCJwbGFjZWhvbGRlciIsIm9uRXJyb3IiLCJlbGVtZW50IiwiZHluYW1pY1Bvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwiJG5hdmJhciIsIiRzaWRlYmFyX2ZpeGVkIiwibmF2YmFyX3Njcm9sbCIsInNpZGViYXJfc2Nyb2xsIiwiTWF0aCIsIm1heCIsInBhcmVudHMiLCJyZW1vdmVDbGFzcyIsInBhcmVudCIsIm91dGVyV2lkdGgiLCJoYXMiLCJob3ZlciIsIm9mZnNldCIsInNtb290aFNjcm9sbFRvIiwicG9zIiwiY2FsbGJhY2siLCJhbmltYXRlIiwicHJvbWlzZSIsInRoZW4iLCJzZWxlY3RvciIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LGNBQXhDO0FBQ0FmLFFBQUUsaUJBQUYsRUFBcUI0RCxLQUFyQixDQUEyQixZQUFVO0FBQ25DO0FBQ0EsWUFBSUMsU0FBUzdELEVBQUUsSUFBRixFQUFRNkQsTUFBUixFQUFiO0FBQ0E3RCxVQUFFLElBQUYsRUFBUWUsUUFBUixDQUFpQixPQUFqQjtBQUNELE9BSkQsRUFJRSxZQUFVO0FBQ1Y7QUFDQWYsVUFBRSxJQUFGLEVBQVF3RCxXQUFSLENBQW9CLE9BQXBCO0FBQ0QsT0FQRDtBQVFELEtBcklJO0FBc0lMO0FBQ0FNLG9CQUFnQix3QkFBV0MsR0FBWCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeENoRSxRQUFFLFlBQUYsRUFDQ2lFLE9BREQsQ0FDUyxFQUFFakIsV0FBV2UsR0FBYixFQURULEVBQzZCLEdBRDdCLEVBRUNHLE9BRkQsR0FHQ0MsSUFIRCxDQUdNLFlBQVU7QUFDWjtBQUNBLFlBQUksT0FBT0gsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQ0E7QUFDSDtBQUNKLE9BUkQ7QUFTRCxLQWpKSTtBQWtKTHpCLDJCQUF1QiwrQkFBVTZCLFFBQVYsRUFBb0JwQyxVQUFwQixFQUFpQztBQUN0RCxVQUFJaEMsRUFBRW9FLFFBQUYsRUFBWTFDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSXFDLE1BQU0vRCxFQUFFb0UsUUFBRixFQUFZUCxNQUFaLEdBQXFCUSxHQUFyQixHQUEyQnJDLFVBQXJDO0FBQ0EsYUFBSzhCLGNBQUwsQ0FBb0JDLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0Q7QUFDRjtBQXZKSSxHQUFQO0FBeUpELENBMUpELEVBMEpHTyxNQTFKSDtrQkEySmV2RSxJIiwiZmlsZSI6IjAuZmZlNWI5NTA4ZTZiNmRkOGJiZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaXRlID0gU2l0ZSB8fCB7fTtcbihmdW5jdGlvbiggJCApIHtcbiAgU2l0ZSA9IHtcbiAgICAvL3Byb3Blcml0ZXMgIFxuICAgIGJvb3RzdHJhcCA6IGZ1bmN0aW9uKCl7ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW5pdCBzaXRlIGJvb3RzdHJhcCcpO1xuICAgICAgdGhpcy5oaWdobGlnaHRjb2RlKCk7XG4gICAgICB0aGlzLm5hdkJhckV2ZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50KCk7XG4gICAgICB0aGlzLmxhenlMb2FkaW5nKCk7XG4gICAgICB0aGlzLnNjcm9sbHB5KCk7XG4gICAgICB0aGlzLmNvbGxhcHNlVHJpZ2dlcigpO1xuICAgICAgdGhpcy5oaWdobGlnaHRLZXl3b3JkcygpO1xuICAgIH0sXG4gICAgLy8gY29sbGFwc2VUcmlnZ2VyXG4gICAgY29sbGFwc2VUcmlnZ2VyOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmNvbGxhcHNlLXRyaWdnZXInKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgY29kZVxuICAgIGhpZ2hsaWdodGNvZGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7XG4gICAgICAvLyAgIHRhYlJlcGxhY2U6ICcgICAgJywgLy8gNCBzcGFjZXNcbiAgICAgIC8vICAgY2xhc3NQcmVmaXg6ICcnLCAvLyBkb24ndCBhcHBlbmQgY2xhc3MgcHJlZml4XG4gICAgICAvLyAgIHVzZUJSOiB0cnVlXG4gICAgICAvLyB9KVxuICAgICAgLy8gaGxqcy5pbml0SGlnaGxpZ2h0aW5nKCk7ICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhobGpzLmxpc3RMYW5ndWFnZXMoKSk7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7dXNlQlI6IHRydWV9KTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICAgICAgIFxuICAgIH0sXG4gICAgaGlnaGxpZ2h0S2V5d29yZHM6IGZ1bmN0aW9uKCl7ICAgICAgXG4gICAgICAkKCcucm93LXNlY3Rpb24tY29udGVudC1pdGVtLWxpbmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGUpe1xuICAgICAgICBsZXQgdGV4dCA9ICQoZWxlKS5odG1sKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhTaXRlLmtleXdvcmRzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IFNpdGUua2V5d29yZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICQoZWxlKS5odG1sKGkpO1xuICAgICAgICAgIC8vIHRleHQgPSB0ZXh0LnJlcGxhY2UoICdSYWlscycsIFwiPHNwYW4gY2xhc3M9XFxcImhsLWtleXdvcmRzXFxcIj5cIiArIGtleXdvcmRzW2ldICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgICQoZWxlKS5odG1sKHRleHQpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIGtleXdvcmRzOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ3J1YnknLFxuICAgICAgICAncmFpbHMnXG4gICAgICBdO1xuICAgIH0sXG4gICAgLy8gc2Nyb2xscHlcbiAgICBzY3JvbGxweTogZnVuY3Rpb24oKXtcbiAgICAgIGlmKCAkKCcuYXJ0aWNsZS1zY3JvbGxieScpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbGJ5ID0gJCgnLmFydGljbGUtc2Nyb2xsYnknKTtcbiAgICAgICAgdmFyIGFydGljbGVfdGlsZXMgPSAkYXJ0aWNsZV9zY3JvbGxieS5maW5kKCc6aGVhZGVyOm5vdChoMSknKTtcbiAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIgPSAkKCRhcnRpY2xlX3Njcm9sbGJ5LmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgICAgICB2YXIgcG9zX2J1ZmZlciA9ICQoJy5uYXZiYXItZml4ZWQnKS5vdXRlckhlaWdodCh0cnVlKSArIHBhcnNlSW50KCQoJy5tYWluLWNvbnRlbnQnKS5jc3MoJ3BhZGRpbmctdG9wJykpO1xuICAgICAgICBpZiggJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhci5sZW5ndGggPiAwICl7XG4gICAgICAgICAgdmFyICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzID0gJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhci5maW5kKCcuYXJ0aWNsZS1zY3JvbGxweS1saW5rcycpO1xuICAgICAgICAgIGFydGljbGVfdGlsZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlKXtcbiAgICAgICAgICAgICQoZWxlKS5hdHRyKCdpZCcsICdhcnRpY2xlLXRpdGxlcy0nICsgaW5kZXgpO1xuICAgICAgICAgICAgJGFydGljbGVfc2Nyb2xscHlfbGlua3MuYXBwZW5kKCc8bGk+PGEgY2xhc3M9XCJhcnRpY2xlLXRpdGxlcy1saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLWhyZWY9XCIjJyArICdhcnRpY2xlLXRpdGxlcy0nICsgaW5kZXggKyAnXCI+JyArICQoZWxlKS50ZXh0KCkgKyAnPC9hPjwvbGk+Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50XG4gICAgICAgICAgJGFydGljbGVfc2Nyb2xscHlfbGlua3Mub24oJ2NsaWNrJywnLmFydGljbGUtdGl0bGVzLWxpbmsnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2l0ZS5zbW9vdGhTY3JvbGxUb0VsZW1lbnQoICQodGhpcykuYXR0cignZGF0YS1ocmVmJyksIC0xICogcG9zX2J1ZmZlcik7XG4gICAgICAgICAgfSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBsYXp5IGxvYWRpbmdcbiAgICBsYXp5TG9hZGluZzogZnVuY3Rpb24oKXtcbiAgICAgICQoJy5sYXp5JykuTGF6eSh7XG4gICAgICAgIC8vIHlvdXIgY29uZmlndXJhdGlvbiBnb2VzIGhlcmVcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFMQVBRQVB6bDV1THI5TnJsOGU3Li4uXCIsXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyAnICsgZWxlbWVudC5kYXRhKCdzcmMnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gc2Nyb2xsIGV2ZW50XG4gICAgc2Nyb2xsRXZlbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLmR5bmFtaWNQb3NpdGlvbigpO1xuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNpdGUuZHluYW1pY1Bvc2l0aW9uKCk7XG4gICAgICB9KSAgICAgIFxuICAgIH0sXG4gICAgLy8gZHluYW1pY1Bvc2l0aW9uXG4gICAgZHluYW1pY1Bvc2l0aW9uOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIHNjcm9sbHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTsgIFxuICAgICAgdmFyICRuYXZiYXIgPSAkKCcubmF2YmFyLWZpeGVkJyk7XG4gICAgICB2YXIgJHNpZGViYXJfZml4ZWQgPSAkKCcuc2lkZWJhci1maXhlZCcpO1xuICAgICAgdmFyIG5hdmJhcl9zY3JvbGwgPSBzY3JvbGx0b3AgLSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgIHZhciBzaWRlYmFyX3Njcm9sbCA9IHNjcm9sbHRvcCAtICRuYXZiYXIub3V0ZXJIZWlnaHQoKSAtIDIwO1xuICAgICAgbmF2YmFyX3Njcm9sbCA9IE1hdGgubWF4KDAsbmF2YmFyX3Njcm9sbCk7XG4gICAgICBzaWRlYmFyX3Njcm9sbCA9IE1hdGgubWF4KDAsc2lkZWJhcl9zY3JvbGwpO1xuICAgICAgJG5hdmJhci5wYXJlbnRzKCcubWFpbm5hdicpLmNzcygnaGVpZ2h0JywgJG5hdmJhci5vdXRlckhlaWdodCgpKTtcblxuICAgICAgaWYgKCBwYXJzZUludChuYXZiYXJfc2Nyb2xsKSA+IDAgKSB7XG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ25hdmJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdhY3RpdmUtc2Nyb2xsJyk7XG4gICAgICB9ZWxzZXsgICAgXG4gICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtc2Nyb2xsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCBwYXJzZUludChzaWRlYmFyX3Njcm9sbCkgPiAwICYmIHBhcnNlSW50KCQoJy53cmFwcGVyJykub3V0ZXJIZWlnaHQodHJ1ZSkpID4gcGFyc2VJbnQoJCh3aW5kb3cpLm91dGVySGVpZ2h0KHRydWUpKSkge1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5hZGRDbGFzcygnc2lkZWJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgICAgbGV0ICRhcnRpY2xlX3Njcm9sbGJ5ID0gJHNpZGViYXJfZml4ZWQuZmluZCgnI2FydGljbGUtc2Nyb2xscHknKTtcbiAgICAgICAgaWYoJGFydGljbGVfc2Nyb2xsYnkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgJGFydGljbGVfc2Nyb2xsYnkucGFyZW50KCcuc2lkZWJhci1maXhlZCcpLmNzcygnei1pbmRleCcsIDY4KTtcbiAgICAgICAgfVxuICAgICAgICAkc2lkZWJhcl9maXhlZC5jc3MoJ3RvcCcsICRuYXZiYXIub3V0ZXJIZWlnaHQoKSArIDIwKTtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQuY3NzKCd3aWR0aCcsICRzaWRlYmFyX2ZpeGVkLnBhcmVudHMoJy5zaWRlYmFyJykub3V0ZXJXaWR0aCgpKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5yZW1vdmVDbGFzcygnc2lkZWJhci1maXhlZC1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIG5hdmJhci1tZW51XG4gICAgbmF2QmFyRXZlbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBuYXZiYXIgdWlcbiAgICAgICQoJy5uYXZiYXItbWVudSBsaScpLmhhcygndWwnKS5hZGRDbGFzcygnaGFzLWNoaWxkcmVuJyk7XG4gICAgICAkKCcubmF2YmFyLW1lbnUgbGknKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAvLyBob3ZlciBpblxuICAgICAgICB2YXIgb2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXInKTtcbiAgICAgIH0sZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gaG92ZXIgb3V0XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIHNtb290aFNjcm9sbFRvXG4gICAgc21vb3RoU2Nyb2xsVG86IGZ1bmN0aW9uICggcG9zLCBjYWxsYmFjaykge1xuICAgICAgJCgnaHRtbCwgYm9keScpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zIH0sIDUwMClcbiAgICAgIC5wcm9taXNlKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gY2FsbGJhY2sgY29kZSBoZXJlXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbW9vdGhTY3JvbGxUb0VsZW1lbnQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgcG9zX2J1ZmZlciApIHtcbiAgICAgIGlmKCAkKHNlbGVjdG9yKS5sZW5ndGggPiAwICl7XG4gICAgICAgIHZhciBwb3MgPSAkKHNlbGVjdG9yKS5vZmZzZXQoKS50b3AgKyBwb3NfYnVmZmVyO1xuICAgICAgICB0aGlzLnNtb290aFNjcm9sbFRvKHBvcywgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoalF1ZXJ5KTtcbmV4cG9ydCBkZWZhdWx0IFNpdGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvc2l0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=