var Site = Site || {};
(function( $ ) {
  Site = {
    //properites  
    bootstrap : function(){   
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
    collapseTrigger: function(){
      $('.collapse-trigger').each(function(index, el) {
        $($(el).attr('href')).addClass('collapse');
        $(el).click(function(event) {
          event.preventDefault();
          $($(el).attr('href')).toggleClass('collapse');
        });
      });
    },
    // highlight code
    highlightcode: function(){
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
    highlightKeywords: function(){      
      let keywords = Site.keywords();
      $('.row-section-content-item-link').each(function(index, ele){
        let text = $(ele).html();
        for(let i = 0; i< keywords.length; i++){          
          let patt = new RegExp(keywords[i],'i')
          text = text.replace( patt, "<span class=\"hl-keywords-"+ keywords[i] + "\">" + text.match(patt) + "</span>");
        }
        $(ele).html(text);
      })
    },
    keywords: function(){
      return [
        'ruby', 'rails', 'hanabi', 'sinatra',
        'angular', 'reactjs', 'vuejs', 'javascript',
        'nodejs',
        'php','laravel','lumen',
        'python','flask',
        'go'
      ];
    },
    // scrollpy
    scrollpy: function(){
      if( $('.article-scrollby').length > 0 ){
        var $article_scrollby = $('.article-scrollby');
        var article_tiles = $article_scrollby.find(':header:not(h1)');
        var $article_scrollby_sidebar = $($article_scrollby.attr('data-target'));
        var pos_buffer = $('.navbar-fixed').outerHeight(true) + parseInt($('.main-content').css('padding-top'));
        if( $article_scrollby_sidebar.length > 0 ){
          var $article_scrollpy_links = $article_scrollby_sidebar.find('.article-scrollpy-links');
          article_tiles.each(function(index, ele){
            $(ele).attr('id', 'article-titles-' + index);
            $article_scrollpy_links.append('<li><a class="article-titles-link" href="javascript:void(0);" data-href="#' + 'article-titles-' + index + '">' + $(ele).text() + '</a></li>');
          });
          // add click event
          $article_scrollpy_links.on('click','.article-titles-link', function(){
            Site.smoothScrollToElement( $(this).attr('data-href'), -1 * pos_buffer);
          });          
        }
      }
    },
    // lazy loading
    lazyLoading: function(){
      $('.lazy').Lazy({
        // your configuration goes here
        placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        onError: function(element) {
          // console.log('error loading ' + element.data('src'));
        }
      });
    },
    // scroll event
    scrollEvent: function(){
      this.dynamicPosition();
      $(window).scroll(function () {
        Site.dynamicPosition();
      })      
    },
    // dynamicPosition
    dynamicPosition: function(){
      var scrolltop = $(window).scrollTop();  
      var $navbar = $('.navbar-fixed');
      var $sidebar_fixed = $('.sidebar-fixed');
      var navbar_scroll = scrolltop - $('.header').outerHeight();
      var sidebar_scroll = scrolltop - $navbar.outerHeight() - 20;
      navbar_scroll = Math.max(0,navbar_scroll);
      sidebar_scroll = Math.max(0,sidebar_scroll);
      $navbar.parents('.mainnav').css('height', $navbar.outerHeight());

      if ( parseInt(navbar_scroll) > 0 ) {
        $navbar.addClass('navbar-fixed-active');
        $('body').addClass('active-scroll');
      }else{    
        $navbar.removeClass('navbar-fixed-active');
        $('body').removeClass('active-scroll');
      }

      if( parseInt(sidebar_scroll) > 0 && parseInt($('.wrapper').outerHeight(true)) > parseInt($(window).outerHeight(true))) {
        $sidebar_fixed.addClass('sidebar-fixed-active');
        let $article_scrollby = $sidebar_fixed.find('#article-scrollpy');
        if($article_scrollby.length > 0){
          $article_scrollby.parent('.sidebar-fixed').css('z-index', 68);
        }
        $sidebar_fixed.css('top', $navbar.outerHeight() + 20);
        $sidebar_fixed.css('width', $sidebar_fixed.parents('.sidebar').outerWidth());
      }else{
        $sidebar_fixed.removeClass('sidebar-fixed-active');
      }
    },
    // navbar-menu
    navBarEvent: function(){
      // navbar ui
      $('.navbar-menu li').has('ul').addClass('has-children');
      $('.navbar-menu li').hover(function(){
        // hover in
        var offset = $(this).offset();
        $(this).addClass('hover');
      },function(){
        // hover out
        $(this).removeClass('hover');
      });
    },
    // smoothScrollTo
    smoothScrollTo: function ( pos, callback) {
      $('html, body')
      .animate({ scrollTop: pos }, 500)
      .promise()
      .then(function(){
          // callback code here
          if (typeof callback === "function") {
              callback();
          }
      });
    },
    smoothScrollToElement: function( selector, pos_buffer ) {
      if( $(selector).length > 0 ){
        var pos = $(selector).offset().top + pos_buffer;
        this.smoothScrollTo(pos, null);
      }
    }
  };
})(jQuery);
export default Site;