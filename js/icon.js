// http://davidwalsh.name/fade-spin-css3-jquery
jQuery(document).ready(function() {

    var div = jQuery('#icons'),
      icon = jQuery('#icons a:first'),
      adj = 8,
      zIndex = 1000,
      availableWidth = div.width() - icon.width() - adj,
      availableHeight = div.height() - icon.height() - adj,
      cssPrefix = '',
      positions = [],
      $random = function(x) { return Math.random() * x; };

    // Get the proper CSS prefix
    if(jQuery.browser.webkit) {
        cssPrefix = 'webkit';
    }
    else if(jQuery.browser.mozilla) {
        cssPrefix = 'moz';
    }
    else if(jQuery.browser.opera) {
        cssPrefix = 'o';
    }

    var checkPos = function(pos, w, h) {
       // if(x1+w1<x2 || x2+w2<x1) return false;  // ｘ方向に重なっていない
         // if(y1+h1<y2 || y2+h2<y1) return false;  // ｙ方向に重なっていない
           // return true;   // どちらも重なっている
      jQuery.each(positions, function(idx, p) {
        if (pos.top + w < p.top || p.top + w < p.top) {
          return false;
        }
        if (pos.left + w < p.left || p.left + w < p.left) {
          return false;
        }
        // console.log(p.top);

      });
return  (Math.ceil(Math.random() * 10) % 2 ) === 0;
    };

    var makePos = function(w){
      var pos = {};
      do {
        pos.top = $random(availableHeight);
        pos.left = $random(availableWidth);
      } while(checkPos(pos, w, w));

      positions.push(pos);

      return pos;
    };

    // Randomize each link
    jQuery('#icons ul').show();
    jQuery.each(jQuery('#icons a'),function(index) {
        var startDeg = $random(360),
          element = jQuery(this),
          w = element.width(),
          pos, z,
          resetPlace = function() {
              element.fadeTo(250,0.6).css('-' + cssPrefix + '-transform','rotate(' + startDeg + 'deg)').css('zIndex', zIndex);
          };

        pos = makePos(w);
        element.attr( 'style','top:' + pos.top + 'px; left:' + pos.left + 'px; z-index:' + zIndex).hover(function() {
            z = zIndex + 100;
            element.fadeTo(250,1).css('zIndex', z).css('-' + cssPrefix + '-transform','rotate(0deg)');
        },resetPlace);
        resetPlace();
    });

});

