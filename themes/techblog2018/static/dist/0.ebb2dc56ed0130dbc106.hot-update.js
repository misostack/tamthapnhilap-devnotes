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
        for (var i = 0; i < Site.keywords.length; i++) {
          text = text.replace('Rails', "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImh0bWwiLCJpIiwia2V5d29yZHMiLCJsZW5ndGgiLCJyZXBsYWNlIiwiJGFydGljbGVfc2Nyb2xsYnkiLCJhcnRpY2xlX3RpbGVzIiwiZmluZCIsIiRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIiLCJwb3NfYnVmZmVyIiwib3V0ZXJIZWlnaHQiLCJwYXJzZUludCIsImNzcyIsIiRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzIiwiYXBwZW5kIiwib24iLCJzbW9vdGhTY3JvbGxUb0VsZW1lbnQiLCJMYXp5IiwicGxhY2Vob2xkZXIiLCJvbkVycm9yIiwiZWxlbWVudCIsImR5bmFtaWNQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbHRvcCIsInNjcm9sbFRvcCIsIiRuYXZiYXIiLCIkc2lkZWJhcl9maXhlZCIsIm5hdmJhcl9zY3JvbGwiLCJzaWRlYmFyX3Njcm9sbCIsIk1hdGgiLCJtYXgiLCJwYXJlbnRzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJvdXRlcldpZHRoIiwiaGFzIiwiaG92ZXIiLCJvZmZzZXQiLCJzbW9vdGhTY3JvbGxUbyIsInBvcyIsImNhbGxiYWNrIiwiYW5pbWF0ZSIsInByb21pc2UiLCJ0aGVuIiwic2VsZWN0b3IiLCJ0b3AiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7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QXhDO0FBQ0FmLFFBQUUsaUJBQUYsRUFBcUI2RCxLQUFyQixDQUEyQixZQUFVO0FBQ25DO0FBQ0EsWUFBSUMsU0FBUzlELEVBQUUsSUFBRixFQUFROEQsTUFBUixFQUFiO0FBQ0E5RCxVQUFFLElBQUYsRUFBUWUsUUFBUixDQUFpQixPQUFqQjtBQUNELE9BSkQsRUFJRSxZQUFVO0FBQ1Y7QUFDQWYsVUFBRSxJQUFGLEVBQVF5RCxXQUFSLENBQW9CLE9BQXBCO0FBQ0QsT0FQRDtBQVFELEtBbklJO0FBb0lMO0FBQ0FNLG9CQUFnQix3QkFBV0MsR0FBWCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeENqRSxRQUFFLFlBQUYsRUFDQ2tFLE9BREQsQ0FDUyxFQUFFakIsV0FBV2UsR0FBYixFQURULEVBQzZCLEdBRDdCLEVBRUNHLE9BRkQsR0FHQ0MsSUFIRCxDQUdNLFlBQVU7QUFDWjtBQUNBLFlBQUksT0FBT0gsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQ0E7QUFDSDtBQUNKLE9BUkQ7QUFTRCxLQS9JSTtBQWdKTHpCLDJCQUF1QiwrQkFBVTZCLFFBQVYsRUFBb0JwQyxVQUFwQixFQUFpQztBQUN0RCxVQUFJakMsRUFBRXFFLFFBQUYsRUFBWTFDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSXFDLE1BQU1oRSxFQUFFcUUsUUFBRixFQUFZUCxNQUFaLEdBQXFCUSxHQUFyQixHQUEyQnJDLFVBQXJDO0FBQ0EsYUFBSzhCLGNBQUwsQ0FBb0JDLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0Q7QUFDRjtBQXJKSSxHQUFQO0FBdUpELENBeEpELEVBd0pHTyxNQXhKSDtrQkF5SmV4RSxJIiwiZmlsZSI6IjAuZWJiMmRjNTZlZDAxMzBkYmMxMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaXRlID0gU2l0ZSB8fCB7fTtcbihmdW5jdGlvbiggJCApIHtcbiAgU2l0ZSA9IHtcbiAgICAvL3Byb3Blcml0ZXMgIFxuICAgIGJvb3RzdHJhcCA6IGZ1bmN0aW9uKCl7ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW5pdCBzaXRlIGJvb3RzdHJhcCcpO1xuICAgICAgdGhpcy5oaWdobGlnaHRjb2RlKCk7XG4gICAgICB0aGlzLm5hdkJhckV2ZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50KCk7XG4gICAgICB0aGlzLmxhenlMb2FkaW5nKCk7XG4gICAgICB0aGlzLnNjcm9sbHB5KCk7XG4gICAgICB0aGlzLmNvbGxhcHNlVHJpZ2dlcigpO1xuICAgICAgdGhpcy5oaWdobGlnaHRLZXl3b3JkcygpO1xuICAgIH0sXG4gICAgLy8gY29sbGFwc2VUcmlnZ2VyXG4gICAgY29sbGFwc2VUcmlnZ2VyOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmNvbGxhcHNlLXRyaWdnZXInKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgY29kZVxuICAgIGhpZ2hsaWdodGNvZGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7XG4gICAgICAvLyAgIHRhYlJlcGxhY2U6ICcgICAgJywgLy8gNCBzcGFjZXNcbiAgICAgIC8vICAgY2xhc3NQcmVmaXg6ICcnLCAvLyBkb24ndCBhcHBlbmQgY2xhc3MgcHJlZml4XG4gICAgICAvLyAgIHVzZUJSOiB0cnVlXG4gICAgICAvLyB9KVxuICAgICAgLy8gaGxqcy5pbml0SGlnaGxpZ2h0aW5nKCk7ICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhobGpzLmxpc3RMYW5ndWFnZXMoKSk7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7dXNlQlI6IHRydWV9KTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICAgICAgIFxuICAgIH0sXG4gICAgaGlnaGxpZ2h0S2V5d29yZHM6IGZ1bmN0aW9uKCl7ICAgICAgXG4gICAgICAkKCcucm93LXNlY3Rpb24tY29udGVudC1pdGVtLWxpbmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGUpe1xuICAgICAgICBsZXQgdGV4dCA9ICQoZWxlKS5odG1sKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBTaXRlLmtleXdvcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCAnUmFpbHMnLCBcIjxzcGFuIGNsYXNzPVxcXCJobC1rZXl3b3Jkc1xcXCI+XCIgKyBrZXl3b3Jkc1tpXSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKGVsZSkuaHRtbCh0ZXh0KTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBrZXl3b3JkczogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICdydWJ5JyxcbiAgICAgICAgJ3JhaWxzJ1xuICAgICAgXTtcbiAgICB9LFxuICAgIC8vIHNjcm9sbHB5XG4gICAgc2Nyb2xscHk6IGZ1bmN0aW9uKCl7XG4gICAgICBpZiggJCgnLmFydGljbGUtc2Nyb2xsYnknKS5sZW5ndGggPiAwICl7XG4gICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxieSA9ICQoJy5hcnRpY2xlLXNjcm9sbGJ5Jyk7XG4gICAgICAgIHZhciBhcnRpY2xlX3RpbGVzID0gJGFydGljbGVfc2Nyb2xsYnkuZmluZCgnOmhlYWRlcjpub3QoaDEpJyk7XG4gICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyID0gJCgkYXJ0aWNsZV9zY3JvbGxieS5hdHRyKCdkYXRhLXRhcmdldCcpKTtcbiAgICAgICAgdmFyIHBvc19idWZmZXIgPSAkKCcubmF2YmFyLWZpeGVkJykub3V0ZXJIZWlnaHQodHJ1ZSkgKyBwYXJzZUludCgkKCcubWFpbi1jb250ZW50JykuY3NzKCdwYWRkaW5nLXRvcCcpKTtcbiAgICAgICAgaWYoICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIubGVuZ3RoID4gMCApe1xuICAgICAgICAgIHZhciAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcyA9ICRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIuZmluZCgnLmFydGljbGUtc2Nyb2xscHktbGlua3MnKTtcbiAgICAgICAgICBhcnRpY2xlX3RpbGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZSl7XG4gICAgICAgICAgICAkKGVsZSkuYXR0cignaWQnLCAnYXJ0aWNsZS10aXRsZXMtJyArIGluZGV4KTtcbiAgICAgICAgICAgICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzLmFwcGVuZCgnPGxpPjxhIGNsYXNzPVwiYXJ0aWNsZS10aXRsZXMtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS1ocmVmPVwiIycgKyAnYXJ0aWNsZS10aXRsZXMtJyArIGluZGV4ICsgJ1wiPicgKyAkKGVsZSkudGV4dCgpICsgJzwvYT48L2xpPicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGFkZCBjbGljayBldmVudFxuICAgICAgICAgICRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzLm9uKCdjbGljaycsJy5hcnRpY2xlLXRpdGxlcy1saW5rJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFNpdGUuc21vb3RoU2Nyb2xsVG9FbGVtZW50KCAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpLCAtMSAqIHBvc19idWZmZXIpO1xuICAgICAgICAgIH0pOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gbGF6eSBsb2FkaW5nXG4gICAgbGF6eUxvYWRpbmc6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubGF6eScpLkxhenkoe1xuICAgICAgICAvLyB5b3VyIGNvbmZpZ3VyYXRpb24gZ29lcyBoZXJlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBTEFQUUFQemw1dUxyOU5ybDhlNy4uLlwiLFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgJyArIGVsZW1lbnQuZGF0YSgnc3JjJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIHNjcm9sbCBldmVudFxuICAgIHNjcm9sbEV2ZW50OiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5keW5hbWljUG9zaXRpb24oKTtcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBTaXRlLmR5bmFtaWNQb3NpdGlvbigpO1xuICAgICAgfSkgICAgICBcbiAgICB9LFxuICAgIC8vIGR5bmFtaWNQb3NpdGlvblxuICAgIGR5bmFtaWNQb3NpdGlvbjogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBzY3JvbGx0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7ICBcbiAgICAgIHZhciAkbmF2YmFyID0gJCgnLm5hdmJhci1maXhlZCcpO1xuICAgICAgdmFyICRzaWRlYmFyX2ZpeGVkID0gJCgnLnNpZGViYXItZml4ZWQnKTtcbiAgICAgIHZhciBuYXZiYXJfc2Nyb2xsID0gc2Nyb2xsdG9wIC0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgc2lkZWJhcl9zY3JvbGwgPSBzY3JvbGx0b3AgLSAkbmF2YmFyLm91dGVySGVpZ2h0KCkgLSAyMDtcbiAgICAgIG5hdmJhcl9zY3JvbGwgPSBNYXRoLm1heCgwLG5hdmJhcl9zY3JvbGwpO1xuICAgICAgc2lkZWJhcl9zY3JvbGwgPSBNYXRoLm1heCgwLHNpZGViYXJfc2Nyb2xsKTtcbiAgICAgICRuYXZiYXIucGFyZW50cygnLm1haW5uYXYnKS5jc3MoJ2hlaWdodCcsICRuYXZiYXIub3V0ZXJIZWlnaHQoKSk7XG5cbiAgICAgIGlmICggcGFyc2VJbnQobmF2YmFyX3Njcm9sbCkgPiAwICkge1xuICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCduYXZiYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYWN0aXZlLXNjcm9sbCcpO1xuICAgICAgfWVsc2V7ICAgIFxuICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCduYXZiYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYWN0aXZlLXNjcm9sbCcpO1xuICAgICAgfVxuXG4gICAgICBpZiggcGFyc2VJbnQoc2lkZWJhcl9zY3JvbGwpID4gMCAmJiBwYXJzZUludCgkKCcud3JhcHBlcicpLm91dGVySGVpZ2h0KHRydWUpKSA+IHBhcnNlSW50KCQod2luZG93KS5vdXRlckhlaWdodCh0cnVlKSkpIHtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQuYWRkQ2xhc3MoJ3NpZGViYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICAgIGxldCAkYXJ0aWNsZV9zY3JvbGxieSA9ICRzaWRlYmFyX2ZpeGVkLmZpbmQoJyNhcnRpY2xlLXNjcm9sbHB5Jyk7XG4gICAgICAgIGlmKCRhcnRpY2xlX3Njcm9sbGJ5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICRhcnRpY2xlX3Njcm9sbGJ5LnBhcmVudCgnLnNpZGViYXItZml4ZWQnKS5jc3MoJ3otaW5kZXgnLCA2OCk7XG4gICAgICAgIH1cbiAgICAgICAgJHNpZGViYXJfZml4ZWQuY3NzKCd0b3AnLCAkbmF2YmFyLm91dGVySGVpZ2h0KCkgKyAyMCk7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmNzcygnd2lkdGgnLCAkc2lkZWJhcl9maXhlZC5wYXJlbnRzKCcuc2lkZWJhcicpLm91dGVyV2lkdGgoKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJHNpZGViYXJfZml4ZWQucmVtb3ZlQ2xhc3MoJ3NpZGViYXItZml4ZWQtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBuYXZiYXItbWVudVxuICAgIG5hdkJhckV2ZW50OiBmdW5jdGlvbigpe1xuICAgICAgLy8gbmF2YmFyIHVpXG4gICAgICAkKCcubmF2YmFyLW1lbnUgbGknKS5oYXMoJ3VsJykuYWRkQ2xhc3MoJ2hhcy1jaGlsZHJlbicpO1xuICAgICAgJCgnLm5hdmJhci1tZW51IGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gaG92ZXIgaW5cbiAgICAgICAgdmFyIG9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICB9LGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGhvdmVyIG91dFxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBzbW9vdGhTY3JvbGxUb1xuICAgIHNtb290aFNjcm9sbFRvOiBmdW5jdGlvbiAoIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKVxuICAgICAgLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvcyB9LCA1MDApXG4gICAgICAucHJvbWlzZSgpXG4gICAgICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIGNhbGxiYWNrIGNvZGUgaGVyZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc21vb3RoU2Nyb2xsVG9FbGVtZW50OiBmdW5jdGlvbiggc2VsZWN0b3IsIHBvc19idWZmZXIgKSB7XG4gICAgICBpZiggJChzZWxlY3RvcikubGVuZ3RoID4gMCApe1xuICAgICAgICB2YXIgcG9zID0gJChzZWxlY3Rvcikub2Zmc2V0KCkudG9wICsgcG9zX2J1ZmZlcjtcbiAgICAgICAgdGhpcy5zbW9vdGhTY3JvbGxUbyhwb3MsIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKGpRdWVyeSk7XG5leHBvcnQgZGVmYXVsdCBTaXRlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3NpdGUuanMiXSwic291cmNlUm9vdCI6IiJ9