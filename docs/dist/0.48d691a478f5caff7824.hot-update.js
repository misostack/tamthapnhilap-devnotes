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
          text.replace(keywords[i], "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImkiLCJrZXl3b3JkcyIsImxlbmd0aCIsInJlcGxhY2UiLCIkYXJ0aWNsZV9zY3JvbGxieSIsImFydGljbGVfdGlsZXMiLCJmaW5kIiwiJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciIsInBvc19idWZmZXIiLCJvdXRlckhlaWdodCIsInBhcnNlSW50IiwiY3NzIiwiJGFydGljbGVfc2Nyb2xscHlfbGlua3MiLCJhcHBlbmQiLCJvbiIsInNtb290aFNjcm9sbFRvRWxlbWVudCIsIkxhenkiLCJwbGFjZWhvbGRlciIsIm9uRXJyb3IiLCJlbGVtZW50IiwiZHluYW1pY1Bvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwiJG5hdmJhciIsIiRzaWRlYmFyX2ZpeGVkIiwibmF2YmFyX3Njcm9sbCIsInNpZGViYXJfc2Nyb2xsIiwiTWF0aCIsIm1heCIsInBhcmVudHMiLCJyZW1vdmVDbGFzcyIsInBhcmVudCIsIm91dGVyV2lkdGgiLCJoYXMiLCJob3ZlciIsIm9mZnNldCIsInNtb290aFNjcm9sbFRvIiwicG9zIiwiY2FsbGJhY2siLCJhbmltYXRlIiwicHJvbWlzZSIsInRoZW4iLCJzZWxlY3RvciIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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Q25DO0FBQ0EsWUFBSUMsU0FBUzdELEVBQUUsSUFBRixFQUFRNkQsTUFBUixFQUFiO0FBQ0E3RCxVQUFFLElBQUYsRUFBUWUsUUFBUixDQUFpQixPQUFqQjtBQUNELE9BSkQsRUFJRSxZQUFVO0FBQ1Y7QUFDQWYsVUFBRSxJQUFGLEVBQVF3RCxXQUFSLENBQW9CLE9BQXBCO0FBQ0QsT0FQRDtBQVFELEtBbElJO0FBbUlMO0FBQ0FNLG9CQUFnQix3QkFBV0MsR0FBWCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDeENoRSxRQUFFLFlBQUYsRUFDQ2lFLE9BREQsQ0FDUyxFQUFFakIsV0FBV2UsR0FBYixFQURULEVBQzZCLEdBRDdCLEVBRUNHLE9BRkQsR0FHQ0MsSUFIRCxDQUdNLFlBQVU7QUFDWjtBQUNBLFlBQUksT0FBT0gsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQ0E7QUFDSDtBQUNKLE9BUkQ7QUFTRCxLQTlJSTtBQStJTHpCLDJCQUF1QiwrQkFBVTZCLFFBQVYsRUFBb0JwQyxVQUFwQixFQUFpQztBQUN0RCxVQUFJaEMsRUFBRW9FLFFBQUYsRUFBWTFDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSXFDLE1BQU0vRCxFQUFFb0UsUUFBRixFQUFZUCxNQUFaLEdBQXFCUSxHQUFyQixHQUEyQnJDLFVBQXJDO0FBQ0EsYUFBSzhCLGNBQUwsQ0FBb0JDLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0Q7QUFDRjtBQXBKSSxHQUFQO0FBc0pELENBdkpELEVBdUpHTyxNQXZKSDtrQkF3SmV2RSxJIiwiZmlsZSI6IjAuNDhkNjkxYTQ3OGY1Y2FmZjc4MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTaXRlID0gU2l0ZSB8fCB7fTtcbihmdW5jdGlvbiggJCApIHtcbiAgU2l0ZSA9IHtcbiAgICAvL3Byb3Blcml0ZXMgIFxuICAgIGJvb3RzdHJhcCA6IGZ1bmN0aW9uKCl7ICAgXG4gICAgICBjb25zb2xlLmxvZygnaW5pdCBzaXRlIGJvb3RzdHJhcCcpO1xuICAgICAgdGhpcy5oaWdobGlnaHRjb2RlKCk7XG4gICAgICB0aGlzLm5hdkJhckV2ZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50KCk7XG4gICAgICB0aGlzLmxhenlMb2FkaW5nKCk7XG4gICAgICB0aGlzLnNjcm9sbHB5KCk7XG4gICAgICB0aGlzLmNvbGxhcHNlVHJpZ2dlcigpO1xuICAgICAgdGhpcy5oaWdobGlnaHRLZXl3b3JkcygpO1xuICAgIH0sXG4gICAgLy8gY29sbGFwc2VUcmlnZ2VyXG4gICAgY29sbGFwc2VUcmlnZ2VyOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmNvbGxhcHNlLXRyaWdnZXInKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkKCQoZWwpLmF0dHIoJ2hyZWYnKSkudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgY29kZVxuICAgIGhpZ2hsaWdodGNvZGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7XG4gICAgICAvLyAgIHRhYlJlcGxhY2U6ICcgICAgJywgLy8gNCBzcGFjZXNcbiAgICAgIC8vICAgY2xhc3NQcmVmaXg6ICcnLCAvLyBkb24ndCBhcHBlbmQgY2xhc3MgcHJlZml4XG4gICAgICAvLyAgIHVzZUJSOiB0cnVlXG4gICAgICAvLyB9KVxuICAgICAgLy8gaGxqcy5pbml0SGlnaGxpZ2h0aW5nKCk7ICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhobGpzLmxpc3RMYW5ndWFnZXMoKSk7XG4gICAgICAvLyBobGpzLmNvbmZpZ3VyZSh7dXNlQlI6IHRydWV9KTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICAgICAgIFxuICAgIH0sXG4gICAgaGlnaGxpZ2h0S2V5d29yZHM6IGZ1bmN0aW9uKCl7ICAgICAgXG4gICAgICAkKCcucm93LXNlY3Rpb24tY29udGVudC1pdGVtLWxpbmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGUpe1xuICAgICAgICBsZXQgdGV4dCA9ICQoZWxlKS50ZXh0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBTaXRlLmtleXdvcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICB0ZXh0LnJlcGxhY2Uoa2V5d29yZHNbaV0sIFwiPHNwYW4gY2xhc3M9XFxcImhsLWtleXdvcmRzXFxcIj5cIiArIGtleXdvcmRzW2ldICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAga2V5d29yZHM6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAncnVieScsXG4gICAgICAgICdyYWlscydcbiAgICAgIF07XG4gICAgfSxcbiAgICAvLyBzY3JvbGxweVxuICAgIHNjcm9sbHB5OiBmdW5jdGlvbigpe1xuICAgICAgaWYoICQoJy5hcnRpY2xlLXNjcm9sbGJ5JykubGVuZ3RoID4gMCApe1xuICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xsYnkgPSAkKCcuYXJ0aWNsZS1zY3JvbGxieScpO1xuICAgICAgICB2YXIgYXJ0aWNsZV90aWxlcyA9ICRhcnRpY2xlX3Njcm9sbGJ5LmZpbmQoJzpoZWFkZXI6bm90KGgxKScpO1xuICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciA9ICQoJGFydGljbGVfc2Nyb2xsYnkuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgICAgIHZhciBwb3NfYnVmZmVyID0gJCgnLm5hdmJhci1maXhlZCcpLm91dGVySGVpZ2h0KHRydWUpICsgcGFyc2VJbnQoJCgnLm1haW4tY29udGVudCcpLmNzcygncGFkZGluZy10b3AnKSk7XG4gICAgICAgIGlmKCAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xscHlfbGlua3MgPSAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyLmZpbmQoJy5hcnRpY2xlLXNjcm9sbHB5LWxpbmtzJyk7XG4gICAgICAgICAgYXJ0aWNsZV90aWxlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGUpe1xuICAgICAgICAgICAgJChlbGUpLmF0dHIoJ2lkJywgJ2FydGljbGUtdGl0bGVzLScgKyBpbmRleCk7XG4gICAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcy5hcHBlbmQoJzxsaT48YSBjbGFzcz1cImFydGljbGUtdGl0bGVzLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtaHJlZj1cIiMnICsgJ2FydGljbGUtdGl0bGVzLScgKyBpbmRleCArICdcIj4nICsgJChlbGUpLnRleHQoKSArICc8L2E+PC9saT4nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnRcbiAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcy5vbignY2xpY2snLCcuYXJ0aWNsZS10aXRsZXMtbGluaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBTaXRlLnNtb290aFNjcm9sbFRvRWxlbWVudCggJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKSwgLTEgKiBwb3NfYnVmZmVyKTtcbiAgICAgICAgICB9KTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGxhenkgbG9hZGluZ1xuICAgIGxhenlMb2FkaW5nOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmxhenknKS5MYXp5KHtcbiAgICAgICAgLy8geW91ciBjb25maWd1cmF0aW9uIGdvZXMgaGVyZVxuICAgICAgICBwbGFjZWhvbGRlcjogXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUxBUFFBUHpsNXVMcjlOcmw4ZTcuLi5cIixcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nICcgKyBlbGVtZW50LmRhdGEoJ3NyYycpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBzY3JvbGwgZXZlbnRcbiAgICBzY3JvbGxFdmVudDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZHluYW1pY1Bvc2l0aW9uKCk7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU2l0ZS5keW5hbWljUG9zaXRpb24oKTtcbiAgICAgIH0pICAgICAgXG4gICAgfSxcbiAgICAvLyBkeW5hbWljUG9zaXRpb25cbiAgICBkeW5hbWljUG9zaXRpb246IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc2Nyb2xsdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpOyAgXG4gICAgICB2YXIgJG5hdmJhciA9ICQoJy5uYXZiYXItZml4ZWQnKTtcbiAgICAgIHZhciAkc2lkZWJhcl9maXhlZCA9ICQoJy5zaWRlYmFyLWZpeGVkJyk7XG4gICAgICB2YXIgbmF2YmFyX3Njcm9sbCA9IHNjcm9sbHRvcCAtICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIHNpZGViYXJfc2Nyb2xsID0gc2Nyb2xsdG9wIC0gJG5hdmJhci5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICBuYXZiYXJfc2Nyb2xsID0gTWF0aC5tYXgoMCxuYXZiYXJfc2Nyb2xsKTtcbiAgICAgIHNpZGViYXJfc2Nyb2xsID0gTWF0aC5tYXgoMCxzaWRlYmFyX3Njcm9sbCk7XG4gICAgICAkbmF2YmFyLnBhcmVudHMoJy5tYWlubmF2JykuY3NzKCdoZWlnaHQnLCAkbmF2YmFyLm91dGVySGVpZ2h0KCkpO1xuXG4gICAgICBpZiAoIHBhcnNlSW50KG5hdmJhcl9zY3JvbGwpID4gMCApIHtcbiAgICAgICAgJG5hdmJhci5hZGRDbGFzcygnbmF2YmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2FjdGl2ZS1zY3JvbGwnKTtcbiAgICAgIH1lbHNleyAgICBcbiAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnbmF2YmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zY3JvbGwnKTtcbiAgICAgIH1cblxuICAgICAgaWYoIHBhcnNlSW50KHNpZGViYXJfc2Nyb2xsKSA+IDAgJiYgcGFyc2VJbnQoJCgnLndyYXBwZXInKS5vdXRlckhlaWdodCh0cnVlKSkgPiBwYXJzZUludCgkKHdpbmRvdykub3V0ZXJIZWlnaHQodHJ1ZSkpKSB7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmFkZENsYXNzKCdzaWRlYmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICBsZXQgJGFydGljbGVfc2Nyb2xsYnkgPSAkc2lkZWJhcl9maXhlZC5maW5kKCcjYXJ0aWNsZS1zY3JvbGxweScpO1xuICAgICAgICBpZigkYXJ0aWNsZV9zY3JvbGxieS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxieS5wYXJlbnQoJy5zaWRlYmFyLWZpeGVkJykuY3NzKCd6LWluZGV4JywgNjgpO1xuICAgICAgICB9XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmNzcygndG9wJywgJG5hdmJhci5vdXRlckhlaWdodCgpICsgMjApO1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5jc3MoJ3dpZHRoJywgJHNpZGViYXJfZml4ZWQucGFyZW50cygnLnNpZGViYXInKS5vdXRlcldpZHRoKCkpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gbmF2YmFyLW1lbnVcbiAgICBuYXZCYXJFdmVudDogZnVuY3Rpb24oKXtcbiAgICAgIC8vIG5hdmJhciB1aVxuICAgICAgJCgnLm5hdmJhci1tZW51IGxpJykuaGFzKCd1bCcpLmFkZENsYXNzKCdoYXMtY2hpbGRyZW4nKTtcbiAgICAgICQoJy5uYXZiYXItbWVudSBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGhvdmVyIGluXG4gICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgfSxmdW5jdGlvbigpe1xuICAgICAgICAvLyBob3ZlciBvdXRcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gc21vb3RoU2Nyb2xsVG9cbiAgICBzbW9vdGhTY3JvbGxUbzogZnVuY3Rpb24gKCBwb3MsIGNhbGxiYWNrKSB7XG4gICAgICAkKCdodG1sLCBib2R5JylcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3MgfSwgNTAwKVxuICAgICAgLnByb21pc2UoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBjYWxsYmFjayBjb2RlIGhlcmVcbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNtb290aFNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24oIHNlbGVjdG9yLCBwb3NfYnVmZmVyICkge1xuICAgICAgaWYoICQoc2VsZWN0b3IpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgdmFyIHBvcyA9ICQoc2VsZWN0b3IpLm9mZnNldCgpLnRvcCArIHBvc19idWZmZXI7XG4gICAgICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8ocG9zLCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KShqUXVlcnkpO1xuZXhwb3J0IGRlZmF1bHQgU2l0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==