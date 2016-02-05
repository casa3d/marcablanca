(function ($) {
  $.fn.fadeTransition = function(options) {
    var options = $.extend({pauseTime: 5000, transitionTime: 2000, ignore: null, delayStart: 0, pauseNavigation: false}, options);
    var transitionObject;

    Trans = function(obj) {
      var timer = null;
      var current = 0;
      var els = (options.ignore)?$("> *:not(" + options.ignore + ")", obj):$("> *", obj);
      $(obj).css("position", "relative");
      els.css("display", "none").css("left", "0").css("top", "0").css("position", "absolute");
      
      if (options.delayStart > 0) {
        setTimeout(showFirst, options.delayStart);
      }
      else
        showFirst();

      function showFirst() {
        if (options.ignore) {
          $(options.ignore, obj).fadeOut(options.transitionTime);
          $(els[current]).fadeIn(options.transitionTime);
        }
        else {
          $(els[current]).css("display", "block");
        }
      }

      function transition(next) {
        $(els[current]).fadeOut(options.transitionTime);
        $(els[next]).fadeIn(options.transitionTime);
        current = next;
        cue();
      };

      function cue() {
        if ($("> *", obj).length < 2) return false;
        if (timer) clearTimeout(timer);
        if (!options.pauseNavigation) {
          timer = setTimeout(function() { transition((current + 1) % els.length | 0)} , options.pauseTime);
        }
      };
      
      this.showItem = function(item) {
        if (timer) clearTimeout(timer);
        transition(item);
      };

      cue();
    }

    this.showItem = function(item) {
      transitionObject.showItem(item);
    };

    return this.each(function() {
      transitionObject = new Trans(this);
    });
  }

})(jQuery);

