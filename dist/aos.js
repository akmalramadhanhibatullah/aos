!function(t,e){var o=[],n=[],a=[],f=0,r=0,s={offset:120,delay:0,easing:"ease",duration:400};getOffset=function(t){for(var e=0,o=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollTop:0),o+=t.offsetTop-("BODY"!=t.tagName?t.scrollLeft:0),t=t.offsetParent;return{top:o,left:e}};var i=function(t){var e=$(t),o=0,n=s.offset,a={offset:$(t).attr("aos-offset"),anchor:$(t).attr("aos-anchor")};return a.offset&&!isNaN(a.offset)&&(n=parseInt(a.offset)),a.anchor&&$(a.anchor)&&(e=$(a.anchor)),o=getOffset(e.get(0)).top,o+n},u=function(){r=t.scrollY;for(var e=0;e<n.length;e++)r>=n[e]-f?o.eq(e).addClass("aos-animate"):o.eq(e).removeClass("aos-animate")},c=function(){o=$("[aos]"),n=[],a=[],f=$(t).height(),o.addClass("aos-init").each(function(t,e){a.push($(e).attr("aos-delay")||0),n.push(i(e))})},l=function(o){s=$.extend({},s,o),$("body").attr("aos-easing",s.easing),$("body").attr("aos-duration",s.duration),$(e).on("ready",function(){c(),u()}),$(t).on("resize orientationchange",h(c,50,!0)).on("scroll",h(u,15,!0))},d={init:l,refresh:c};"function"==typeof define&&define.amd?define([],function(){return d}):"undefined"!=typeof module&&module.exports?module.exports=d:t.AOS=d;var p=Date.now||function(){return(new Date).getTime()},h=function(t,e,o){var n,a,f,r,s,i=function(){var u=p()-r;e>u&&u>0?n=setTimeout(i,e-u):(n=null,o||(s=t.apply(f,a),n||(f=a=null)))};return function(){f=this,a=arguments,r=p();var u=o&&!n;return n||(n=setTimeout(i,e)),u&&(s=t.apply(f,a),f=a=null),s}}}(window,document);