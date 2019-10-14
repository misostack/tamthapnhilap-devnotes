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
        console.log(Site.keywords().length);
        for (var i = 0; i < Site.keywords().length; i++) {
          text = text.replace(new RegExp(keywords[i], 'i'), "<span class=\"hl-keywords\">" + keywords[i] + "</span>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sIm5hbWVzIjpbIlNpdGUiLCIkIiwiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsImhpZ2hsaWdodGNvZGUiLCJuYXZCYXJFdmVudCIsInNjcm9sbEV2ZW50IiwibGF6eUxvYWRpbmciLCJzY3JvbGxweSIsImNvbGxhcHNlVHJpZ2dlciIsImhpZ2hsaWdodEtleXdvcmRzIiwiZWFjaCIsImluZGV4IiwiZWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiZWxlIiwidGV4dCIsImh0bWwiLCJrZXl3b3JkcyIsImxlbmd0aCIsImkiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJGFydGljbGVfc2Nyb2xsYnkiLCJhcnRpY2xlX3RpbGVzIiwiZmluZCIsIiRhcnRpY2xlX3Njcm9sbGJ5X3NpZGViYXIiLCJwb3NfYnVmZmVyIiwib3V0ZXJIZWlnaHQiLCJwYXJzZUludCIsImNzcyIsIiRhcnRpY2xlX3Njcm9sbHB5X2xpbmtzIiwiYXBwZW5kIiwib24iLCJzbW9vdGhTY3JvbGxUb0VsZW1lbnQiLCJMYXp5IiwicGxhY2Vob2xkZXIiLCJvbkVycm9yIiwiZWxlbWVudCIsImR5bmFtaWNQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbHRvcCIsInNjcm9sbFRvcCIsIiRuYXZiYXIiLCIkc2lkZWJhcl9maXhlZCIsIm5hdmJhcl9zY3JvbGwiLCJzaWRlYmFyX3Njcm9sbCIsIk1hdGgiLCJtYXgiLCJwYXJlbnRzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJvdXRlcldpZHRoIiwiaGFzIiwiaG92ZXIiLCJvZmZzZXQiLCJzbW9vdGhTY3JvbGxUbyIsInBvcyIsImNhbGxiYWNrIiwiYW5pbWF0ZSIsInByb21pc2UiLCJ0aGVuIiwic2VsZWN0b3IiLCJ0b3AiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBT0EsUUFBUSxFQUFuQjtBQUNBLENBQUMsVUFBVUMsQ0FBVixFQUFjO0FBQ2JELFNBQU87QUFDTDtBQUNBRSxlQUFZLHFCQUFVO0FBQ3BCQyxjQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQSxXQUFLQyxhQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLFdBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0EsV0FBS0MsUUFBTDtBQUNBLFdBQUtDLGVBQUw7QUFDQSxXQUFLQyxpQkFBTDtBQUNELEtBWEk7QUFZTDtBQUNBRCxxQkFBaUIsMkJBQVU7QUFDekJULFFBQUUsbUJBQUYsRUFBdUJXLElBQXZCLENBQTRCLFVBQVNDLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzlDYixVQUFFQSxFQUFFYSxFQUFGLEVBQU1DLElBQU4sQ0FBVyxNQUFYLENBQUYsRUFBc0JDLFFBQXRCLENBQStCLFVBQS9CO0FBQ0FmLFVBQUVhLEVBQUYsRUFBTUcsS0FBTixDQUFZLFVBQVNDLEtBQVQsRUFBZ0I7QUFDMUJBLGdCQUFNQyxjQUFOO0FBQ0FsQixZQUFFQSxFQUFFYSxFQUFGLEVBQU1DLElBQU4sQ0FBVyxNQUFYLENBQUYsRUFBc0JLLFdBQXRCLENBQWtDLFVBQWxDO0FBQ0QsU0FIRDtBQUlELE9BTkQ7QUFPRCxLQXJCSTtBQXNCTDtBQUNBZixtQkFBZSx5QkFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FnQixZQUFNQyxZQUFOO0FBRUQsS0FsQ0k7QUFtQ0xYLHVCQUFtQiw2QkFBVTtBQUMzQlYsUUFBRSxnQ0FBRixFQUFvQ1csSUFBcEMsQ0FBeUMsVUFBU0MsS0FBVCxFQUFnQlUsR0FBaEIsRUFBb0I7QUFDM0QsWUFBSUMsT0FBT3ZCLEVBQUVzQixHQUFGLEVBQU9FLElBQVAsRUFBWDtBQUNBdEIsZ0JBQVFDLEdBQVIsQ0FBWW9CLElBQVo7QUFDQXJCLGdCQUFRQyxHQUFSLENBQVlKLEtBQUswQixRQUFMLEdBQWdCQyxNQUE1QjtBQUNBLGFBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUc1QixLQUFLMEIsUUFBTCxHQUFnQkMsTUFBbEMsRUFBMENDLEdBQTFDLEVBQThDO0FBQzVDSixpQkFBT0EsS0FBS0ssT0FBTCxDQUFjLElBQUlDLE1BQUosQ0FBV0osU0FBU0UsQ0FBVCxDQUFYLEVBQXVCLEdBQXZCLENBQWQsRUFBMkMsaUNBQWlDRixTQUFTRSxDQUFULENBQWpDLEdBQStDLFNBQTFGLENBQVA7QUFDRDtBQUNEM0IsVUFBRXNCLEdBQUYsRUFBT0UsSUFBUCxDQUFZRCxJQUFaO0FBQ0QsT0FSRDtBQVNELEtBN0NJO0FBOENMRSxjQUFVLG9CQUFVO0FBQ2xCLGFBQU8sQ0FDTCxNQURLLEVBRUwsT0FGSyxDQUFQO0FBSUQsS0FuREk7QUFvREw7QUFDQWpCLGNBQVUsb0JBQVU7QUFDbEIsVUFBSVIsRUFBRSxtQkFBRixFQUF1QjBCLE1BQXZCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ3JDLFlBQUlJLG9CQUFvQjlCLEVBQUUsbUJBQUYsQ0FBeEI7QUFDQSxZQUFJK0IsZ0JBQWdCRCxrQkFBa0JFLElBQWxCLENBQXVCLGlCQUF2QixDQUFwQjtBQUNBLFlBQUlDLDRCQUE0QmpDLEVBQUU4QixrQkFBa0JoQixJQUFsQixDQUF1QixhQUF2QixDQUFGLENBQWhDO0FBQ0EsWUFBSW9CLGFBQWFsQyxFQUFFLGVBQUYsRUFBbUJtQyxXQUFuQixDQUErQixJQUEvQixJQUF1Q0MsU0FBU3BDLEVBQUUsZUFBRixFQUFtQnFDLEdBQW5CLENBQXVCLGFBQXZCLENBQVQsQ0FBeEQ7QUFDQSxZQUFJSiwwQkFBMEJQLE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0FBQ3hDLGNBQUlZLDBCQUEwQkwsMEJBQTBCRCxJQUExQixDQUErQix5QkFBL0IsQ0FBOUI7QUFDQUQsd0JBQWNwQixJQUFkLENBQW1CLFVBQVNDLEtBQVQsRUFBZ0JVLEdBQWhCLEVBQW9CO0FBQ3JDdEIsY0FBRXNCLEdBQUYsRUFBT1IsSUFBUCxDQUFZLElBQVosRUFBa0Isb0JBQW9CRixLQUF0QztBQUNBMEIsb0NBQXdCQyxNQUF4QixDQUErQiwrRUFBK0UsaUJBQS9FLEdBQW1HM0IsS0FBbkcsR0FBMkcsSUFBM0csR0FBa0haLEVBQUVzQixHQUFGLEVBQU9DLElBQVAsRUFBbEgsR0FBa0ksV0FBaks7QUFDRCxXQUhEO0FBSUE7QUFDQWUsa0NBQXdCRSxFQUF4QixDQUEyQixPQUEzQixFQUFtQyxzQkFBbkMsRUFBMkQsWUFBVTtBQUNuRXpDLGlCQUFLMEMscUJBQUwsQ0FBNEJ6QyxFQUFFLElBQUYsRUFBUWMsSUFBUixDQUFhLFdBQWIsQ0FBNUIsRUFBdUQsQ0FBQyxDQUFELEdBQUtvQixVQUE1RDtBQUNELFdBRkQ7QUFHRDtBQUNGO0FBQ0YsS0F2RUk7QUF3RUw7QUFDQTNCLGlCQUFhLHVCQUFVO0FBQ3JCUCxRQUFFLE9BQUYsRUFBVzBDLElBQVgsQ0FBZ0I7QUFDZDtBQUNBQyxxQkFBYSx3REFGQztBQUdkQyxpQkFBUyxpQkFBU0MsT0FBVCxFQUFrQjtBQUN6QjtBQUNEO0FBTGEsT0FBaEI7QUFPRCxLQWpGSTtBQWtGTDtBQUNBdkMsaUJBQWEsdUJBQVU7QUFDckIsV0FBS3dDLGVBQUw7QUFDQTlDLFFBQUUrQyxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBWTtBQUMzQmpELGFBQUsrQyxlQUFMO0FBQ0QsT0FGRDtBQUdELEtBeEZJO0FBeUZMO0FBQ0FBLHFCQUFpQiwyQkFBVTtBQUN6QixVQUFJRyxZQUFZakQsRUFBRStDLE1BQUYsRUFBVUcsU0FBVixFQUFoQjtBQUNBLFVBQUlDLFVBQVVuRCxFQUFFLGVBQUYsQ0FBZDtBQUNBLFVBQUlvRCxpQkFBaUJwRCxFQUFFLGdCQUFGLENBQXJCO0FBQ0EsVUFBSXFELGdCQUFnQkosWUFBWWpELEVBQUUsU0FBRixFQUFhbUMsV0FBYixFQUFoQztBQUNBLFVBQUltQixpQkFBaUJMLFlBQVlFLFFBQVFoQixXQUFSLEVBQVosR0FBb0MsRUFBekQ7QUFDQWtCLHNCQUFnQkUsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBV0gsYUFBWCxDQUFoQjtBQUNBQyx1QkFBaUJDLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVdGLGNBQVgsQ0FBakI7QUFDQUgsY0FBUU0sT0FBUixDQUFnQixVQUFoQixFQUE0QnBCLEdBQTVCLENBQWdDLFFBQWhDLEVBQTBDYyxRQUFRaEIsV0FBUixFQUExQzs7QUFFQSxVQUFLQyxTQUFTaUIsYUFBVCxJQUEwQixDQUEvQixFQUFtQztBQUNqQ0YsZ0JBQVFwQyxRQUFSLENBQWlCLHFCQUFqQjtBQUNBZixVQUFFLE1BQUYsRUFBVWUsUUFBVixDQUFtQixlQUFuQjtBQUNELE9BSEQsTUFHSztBQUNIb0MsZ0JBQVFPLFdBQVIsQ0FBb0IscUJBQXBCO0FBQ0ExRCxVQUFFLE1BQUYsRUFBVTBELFdBQVYsQ0FBc0IsZUFBdEI7QUFDRDs7QUFFRCxVQUFJdEIsU0FBU2tCLGNBQVQsSUFBMkIsQ0FBM0IsSUFBZ0NsQixTQUFTcEMsRUFBRSxVQUFGLEVBQWNtQyxXQUFkLENBQTBCLElBQTFCLENBQVQsSUFBNENDLFNBQVNwQyxFQUFFK0MsTUFBRixFQUFVWixXQUFWLENBQXNCLElBQXRCLENBQVQsQ0FBaEYsRUFBdUg7QUFDckhpQix1QkFBZXJDLFFBQWYsQ0FBd0Isc0JBQXhCO0FBQ0EsWUFBSWUsb0JBQW9Cc0IsZUFBZXBCLElBQWYsQ0FBb0IsbUJBQXBCLENBQXhCO0FBQ0EsWUFBR0Ysa0JBQWtCSixNQUFsQixHQUEyQixDQUE5QixFQUFnQztBQUM5QkksNEJBQWtCNkIsTUFBbEIsQ0FBeUIsZ0JBQXpCLEVBQTJDdEIsR0FBM0MsQ0FBK0MsU0FBL0MsRUFBMEQsRUFBMUQ7QUFDRDtBQUNEZSx1QkFBZWYsR0FBZixDQUFtQixLQUFuQixFQUEwQmMsUUFBUWhCLFdBQVIsS0FBd0IsRUFBbEQ7QUFDQWlCLHVCQUFlZixHQUFmLENBQW1CLE9BQW5CLEVBQTRCZSxlQUFlSyxPQUFmLENBQXVCLFVBQXZCLEVBQW1DRyxVQUFuQyxFQUE1QjtBQUNELE9BUkQsTUFRSztBQUNIUix1QkFBZU0sV0FBZixDQUEyQixzQkFBM0I7QUFDRDtBQUNGLEtBdkhJO0FBd0hMO0FBQ0FyRCxpQkFBYSx1QkFBVTtBQUNyQjtBQUNBTCxRQUFFLGlCQUFGLEVBQXFCNkQsR0FBckIsQ0FBeUIsSUFBekIsRUFBK0I5QyxRQUEvQixDQUF3QyxjQUF4QztBQUNBZixRQUFFLGlCQUFGLEVBQXFCOEQsS0FBckIsQ0FBMkIsWUFBVTtBQUNuQztBQUNBLFlBQUlDLFNBQVMvRCxFQUFFLElBQUYsRUFBUStELE1BQVIsRUFBYjtBQUNBL0QsVUFBRSxJQUFGLEVBQVFlLFFBQVIsQ0FBaUIsT0FBakI7QUFDRCxPQUpELEVBSUUsWUFBVTtBQUNWO0FBQ0FmLFVBQUUsSUFBRixFQUFRMEQsV0FBUixDQUFvQixPQUFwQjtBQUNELE9BUEQ7QUFRRCxLQXBJSTtBQXFJTDtBQUNBTSxvQkFBZ0Isd0JBQVdDLEdBQVgsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3hDbEUsUUFBRSxZQUFGLEVBQ0NtRSxPQURELENBQ1MsRUFBRWpCLFdBQVdlLEdBQWIsRUFEVCxFQUM2QixHQUQ3QixFQUVDRyxPQUZELEdBR0NDLElBSEQsQ0FHTSxZQUFVO0FBQ1o7QUFDQSxZQUFJLE9BQU9ILFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDaENBO0FBQ0g7QUFDSixPQVJEO0FBU0QsS0FoSkk7QUFpSkx6QiwyQkFBdUIsK0JBQVU2QixRQUFWLEVBQW9CcEMsVUFBcEIsRUFBaUM7QUFDdEQsVUFBSWxDLEVBQUVzRSxRQUFGLEVBQVk1QyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQUl1QyxNQUFNakUsRUFBRXNFLFFBQUYsRUFBWVAsTUFBWixHQUFxQlEsR0FBckIsR0FBMkJyQyxVQUFyQztBQUNBLGFBQUs4QixjQUFMLENBQW9CQyxHQUFwQixFQUF5QixJQUF6QjtBQUNEO0FBQ0Y7QUF0SkksR0FBUDtBQXdKRCxDQXpKRCxFQXlKR08sTUF6Skg7a0JBMEplekUsSSIsImZpbGUiOiIwLmE5YjZlNTAyMDk5ZDY2N2Q5YzUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2l0ZSA9IFNpdGUgfHwge307XG4oZnVuY3Rpb24oICQgKSB7XG4gIFNpdGUgPSB7XG4gICAgLy9wcm9wZXJpdGVzICBcbiAgICBib290c3RyYXAgOiBmdW5jdGlvbigpeyAgIFxuICAgICAgY29uc29sZS5sb2coJ2luaXQgc2l0ZSBib290c3RyYXAnKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Y29kZSgpO1xuICAgICAgdGhpcy5uYXZCYXJFdmVudCgpO1xuICAgICAgdGhpcy5zY3JvbGxFdmVudCgpO1xuICAgICAgdGhpcy5sYXp5TG9hZGluZygpO1xuICAgICAgdGhpcy5zY3JvbGxweSgpO1xuICAgICAgdGhpcy5jb2xsYXBzZVRyaWdnZXIoKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5d29yZHMoKTtcbiAgICB9LFxuICAgIC8vIGNvbGxhcHNlVHJpZ2dlclxuICAgIGNvbGxhcHNlVHJpZ2dlcjogZnVuY3Rpb24oKXtcbiAgICAgICQoJy5jb2xsYXBzZS10cmlnZ2VyJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgJCgkKGVsKS5hdHRyKCdocmVmJykpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuICAgICAgICAkKGVsKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgJCgkKGVsKS5hdHRyKCdocmVmJykpLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZScpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gaGlnaGxpZ2h0IGNvZGVcbiAgICBoaWdobGlnaHRjb2RlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gaGxqcy5jb25maWd1cmUoe1xuICAgICAgLy8gICB0YWJSZXBsYWNlOiAnICAgICcsIC8vIDQgc3BhY2VzXG4gICAgICAvLyAgIGNsYXNzUHJlZml4OiAnJywgLy8gZG9uJ3QgYXBwZW5kIGNsYXNzIHByZWZpeFxuICAgICAgLy8gICB1c2VCUjogdHJ1ZVxuICAgICAgLy8gfSlcbiAgICAgIC8vIGhsanMuaW5pdEhpZ2hsaWdodGluZygpOyAgICAgIFxuICAgICAgLy8gY29uc29sZS5sb2coaGxqcy5saXN0TGFuZ3VhZ2VzKCkpO1xuICAgICAgLy8gaGxqcy5jb25maWd1cmUoe3VzZUJSOiB0cnVlfSk7XG4gICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgICAgICBcbiAgICB9LFxuICAgIGhpZ2hsaWdodEtleXdvcmRzOiBmdW5jdGlvbigpeyAgICAgIFxuICAgICAgJCgnLnJvdy1zZWN0aW9uLWNvbnRlbnQtaXRlbS1saW5rJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlKXtcbiAgICAgICAgbGV0IHRleHQgPSAkKGVsZSkuaHRtbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coU2l0ZS5rZXl3b3JkcygpLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IFNpdGUua2V5d29yZHMoKS5sZW5ndGg7IGkrKyl7ICAgICAgICAgIFxuICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoIG5ldyBSZWdFeHAoa2V5d29yZHNbaV0sJ2knKSwgXCI8c3BhbiBjbGFzcz1cXFwiaGwta2V5d29yZHNcXFwiPlwiICsga2V5d29yZHNbaV0gKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgIH1cbiAgICAgICAgJChlbGUpLmh0bWwodGV4dCk7XG4gICAgICB9KVxuICAgIH0sXG4gICAga2V5d29yZHM6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAncnVieScsXG4gICAgICAgICdyYWlscydcbiAgICAgIF07XG4gICAgfSxcbiAgICAvLyBzY3JvbGxweVxuICAgIHNjcm9sbHB5OiBmdW5jdGlvbigpe1xuICAgICAgaWYoICQoJy5hcnRpY2xlLXNjcm9sbGJ5JykubGVuZ3RoID4gMCApe1xuICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xsYnkgPSAkKCcuYXJ0aWNsZS1zY3JvbGxieScpO1xuICAgICAgICB2YXIgYXJ0aWNsZV90aWxlcyA9ICRhcnRpY2xlX3Njcm9sbGJ5LmZpbmQoJzpoZWFkZXI6bm90KGgxKScpO1xuICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xsYnlfc2lkZWJhciA9ICQoJGFydGljbGVfc2Nyb2xsYnkuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgICAgIHZhciBwb3NfYnVmZmVyID0gJCgnLm5hdmJhci1maXhlZCcpLm91dGVySGVpZ2h0KHRydWUpICsgcGFyc2VJbnQoJCgnLm1haW4tY29udGVudCcpLmNzcygncGFkZGluZy10b3AnKSk7XG4gICAgICAgIGlmKCAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICB2YXIgJGFydGljbGVfc2Nyb2xscHlfbGlua3MgPSAkYXJ0aWNsZV9zY3JvbGxieV9zaWRlYmFyLmZpbmQoJy5hcnRpY2xlLXNjcm9sbHB5LWxpbmtzJyk7XG4gICAgICAgICAgYXJ0aWNsZV90aWxlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGUpe1xuICAgICAgICAgICAgJChlbGUpLmF0dHIoJ2lkJywgJ2FydGljbGUtdGl0bGVzLScgKyBpbmRleCk7XG4gICAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcy5hcHBlbmQoJzxsaT48YSBjbGFzcz1cImFydGljbGUtdGl0bGVzLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtaHJlZj1cIiMnICsgJ2FydGljbGUtdGl0bGVzLScgKyBpbmRleCArICdcIj4nICsgJChlbGUpLnRleHQoKSArICc8L2E+PC9saT4nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnRcbiAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxweV9saW5rcy5vbignY2xpY2snLCcuYXJ0aWNsZS10aXRsZXMtbGluaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBTaXRlLnNtb290aFNjcm9sbFRvRWxlbWVudCggJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKSwgLTEgKiBwb3NfYnVmZmVyKTtcbiAgICAgICAgICB9KTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGxhenkgbG9hZGluZ1xuICAgIGxhenlMb2FkaW5nOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmxhenknKS5MYXp5KHtcbiAgICAgICAgLy8geW91ciBjb25maWd1cmF0aW9uIGdvZXMgaGVyZVxuICAgICAgICBwbGFjZWhvbGRlcjogXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUxBUFFBUHpsNXVMcjlOcmw4ZTcuLi5cIixcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nICcgKyBlbGVtZW50LmRhdGEoJ3NyYycpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBzY3JvbGwgZXZlbnRcbiAgICBzY3JvbGxFdmVudDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZHluYW1pY1Bvc2l0aW9uKCk7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU2l0ZS5keW5hbWljUG9zaXRpb24oKTtcbiAgICAgIH0pICAgICAgXG4gICAgfSxcbiAgICAvLyBkeW5hbWljUG9zaXRpb25cbiAgICBkeW5hbWljUG9zaXRpb246IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc2Nyb2xsdG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpOyAgXG4gICAgICB2YXIgJG5hdmJhciA9ICQoJy5uYXZiYXItZml4ZWQnKTtcbiAgICAgIHZhciAkc2lkZWJhcl9maXhlZCA9ICQoJy5zaWRlYmFyLWZpeGVkJyk7XG4gICAgICB2YXIgbmF2YmFyX3Njcm9sbCA9IHNjcm9sbHRvcCAtICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIHNpZGViYXJfc2Nyb2xsID0gc2Nyb2xsdG9wIC0gJG5hdmJhci5vdXRlckhlaWdodCgpIC0gMjA7XG4gICAgICBuYXZiYXJfc2Nyb2xsID0gTWF0aC5tYXgoMCxuYXZiYXJfc2Nyb2xsKTtcbiAgICAgIHNpZGViYXJfc2Nyb2xsID0gTWF0aC5tYXgoMCxzaWRlYmFyX3Njcm9sbCk7XG4gICAgICAkbmF2YmFyLnBhcmVudHMoJy5tYWlubmF2JykuY3NzKCdoZWlnaHQnLCAkbmF2YmFyLm91dGVySGVpZ2h0KCkpO1xuXG4gICAgICBpZiAoIHBhcnNlSW50KG5hdmJhcl9zY3JvbGwpID4gMCApIHtcbiAgICAgICAgJG5hdmJhci5hZGRDbGFzcygnbmF2YmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2FjdGl2ZS1zY3JvbGwnKTtcbiAgICAgIH1lbHNleyAgICBcbiAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnbmF2YmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zY3JvbGwnKTtcbiAgICAgIH1cblxuICAgICAgaWYoIHBhcnNlSW50KHNpZGViYXJfc2Nyb2xsKSA+IDAgJiYgcGFyc2VJbnQoJCgnLndyYXBwZXInKS5vdXRlckhlaWdodCh0cnVlKSkgPiBwYXJzZUludCgkKHdpbmRvdykub3V0ZXJIZWlnaHQodHJ1ZSkpKSB7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmFkZENsYXNzKCdzaWRlYmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgICBsZXQgJGFydGljbGVfc2Nyb2xsYnkgPSAkc2lkZWJhcl9maXhlZC5maW5kKCcjYXJ0aWNsZS1zY3JvbGxweScpO1xuICAgICAgICBpZigkYXJ0aWNsZV9zY3JvbGxieS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAkYXJ0aWNsZV9zY3JvbGxieS5wYXJlbnQoJy5zaWRlYmFyLWZpeGVkJykuY3NzKCd6LWluZGV4JywgNjgpO1xuICAgICAgICB9XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLmNzcygndG9wJywgJG5hdmJhci5vdXRlckhlaWdodCgpICsgMjApO1xuICAgICAgICAkc2lkZWJhcl9maXhlZC5jc3MoJ3dpZHRoJywgJHNpZGViYXJfZml4ZWQucGFyZW50cygnLnNpZGViYXInKS5vdXRlcldpZHRoKCkpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICRzaWRlYmFyX2ZpeGVkLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZpeGVkLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gbmF2YmFyLW1lbnVcbiAgICBuYXZCYXJFdmVudDogZnVuY3Rpb24oKXtcbiAgICAgIC8vIG5hdmJhciB1aVxuICAgICAgJCgnLm5hdmJhci1tZW51IGxpJykuaGFzKCd1bCcpLmFkZENsYXNzKCdoYXMtY2hpbGRyZW4nKTtcbiAgICAgICQoJy5uYXZiYXItbWVudSBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGhvdmVyIGluXG4gICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgfSxmdW5jdGlvbigpe1xuICAgICAgICAvLyBob3ZlciBvdXRcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gc21vb3RoU2Nyb2xsVG9cbiAgICBzbW9vdGhTY3JvbGxUbzogZnVuY3Rpb24gKCBwb3MsIGNhbGxiYWNrKSB7XG4gICAgICAkKCdodG1sLCBib2R5JylcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3MgfSwgNTAwKVxuICAgICAgLnByb21pc2UoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBjYWxsYmFjayBjb2RlIGhlcmVcbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNtb290aFNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24oIHNlbGVjdG9yLCBwb3NfYnVmZmVyICkge1xuICAgICAgaWYoICQoc2VsZWN0b3IpLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgdmFyIHBvcyA9ICQoc2VsZWN0b3IpLm9mZnNldCgpLnRvcCArIHBvc19idWZmZXI7XG4gICAgICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8ocG9zLCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KShqUXVlcnkpO1xuZXhwb3J0IGRlZmF1bHQgU2l0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9zaXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==