import{c as e}from"./array-tree-filter.ab994813.js";import{p as n}from"./performance-now.c3a4dee6.js";for(var t={exports:{}},a=n.exports,r="undefined"==typeof window?e:window,o=["moz","webkit"],c="AnimationFrame",l=r["request"+c],i=r["cancel"+c]||r["cancelRequest"+c],f=0;!l&&f<o.length;f++)l=r[o[f]+"Request"+c],i=r[o[f]+"Cancel"+c]||r[o[f]+"CancelRequest"+c];if(!l||!i){var s=0,u=0,p=[];l=function(e){if(0===p.length){var n=a(),t=Math.max(0,16.666666666666668-(n-s));s=t+n,setTimeout((function(){var e=p.slice(0);p.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(s)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(t))}return p.push({handle:++u,callback:e,cancelled:!1}),u},i=function(e){for(var n=0;n<p.length;n++)p[n].handle===e&&(p[n].cancelled=!0)}}t.exports=function(e){return l.call(r,e)},t.exports.cancel=function(){i.apply(r,arguments)},t.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=i};var m=t.exports;export{m as r};