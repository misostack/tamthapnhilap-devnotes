import './Site.scss';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-scss';
import Site from './modules/site';
import Lazy from 'jquery-lazy';

(function( $ ) {
  console.log('Jquery version ' + $.fn.jquery);  
  $(document).ready(function($) {
    Site.bootstrap();
  });
})(jQuery);