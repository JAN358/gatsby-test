webpackJsonp([35783957827783],[,,,,,,,,,function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(103);t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(86);t.exports=r},function(t,e,n){var r=n(29),o=r(Object,"create");t.exports=o},,,function(t,e,n){var r=n(15),o=r.Symbol;t.exports=o},function(t,e,n){var r=n(77),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=n(28),i=n(106),a="[object Symbol]";t.exports=r},,,,,,,,,,,function(t,e,n){function r(t){return null==t?void 0===t?s:u:c&&c in Object(t)?i(t):a(t)}var o=n(14),i=n(78),a=n(99),u="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(73),i=n(79);t.exports=r},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){return"undefined"==typeof A&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=new window.IntersectionObserver(function(t){t.forEach(function(t){g.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),A}e.__esModule=!0;var i=n(32),a=r(i),u=n(38),s=r(u),c=n(37),l=r(c),f=n(121),p=r(f),d=n(120),T=r(d),h=n(1),y=r(h),E=n(6),v=r(E),m=function(t){var e=(0,T.default)({},t);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},b={},_=function(t){var e=m(t),n=e.sizes?e.sizes.src:e.resolutions.src;return!!b[n]||(b[n]=!0,!1)},A=void 0,g=[],S=function(t,e){o().observe(t),g.push([t,e])},O=null,w=function(){if(null!==O)return O;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return O=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},P=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.sizes?'sizes="'+t.sizes+'" ':"",o=t.title?'title="'+t.title+'" ':"",i=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",s=t.opacity?t.opacity:"1",c=t.transitionDelay?t.transitionDelay:"0.5s";return"<img "+a+u+e+n+i+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(t){var e=t.style,n=t.onLoad,r=(0,p.default)(t,["style","onLoad"]);return y.default.createElement("img",(0,T.default)({},r,{onLoad:n,style:(0,T.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};R.propTypes={style:v.default.object,onLoad:v.default.func};var M=function(t){function e(n){(0,a.default)(this,e);var r=(0,s.default)(this,t.call(this,n)),o=!0,i=!0,u=!1,c=_(n);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,u=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,l.default)(e,t),e.prototype.handleRef=function(t){var e=this;this.state.IOSupported&&t&&S(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var t=this,e=m(this.props),n=e.title,r=e.alt,o=e.className,i=e.outerWrapperClassName,a=e.style,u=void 0===a?{}:a,s=e.imgStyle,c=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.sizes,d=e.resolutions,h=e.backgroundColor,E=e.Tag,v=void 0;v="boolean"==typeof h?"lightgray":h;var b=(0,T.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c,f),_=(0,T.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(p){var A=p;return A.srcWebp&&A.srcSetWebp&&w()&&(A.src=A.srcWebp,A.srcSet=A.srcSetWebp),y.default.createElement(E,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(E,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,T.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},y.default.createElement(E,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&y.default.createElement(R,{alt:r,title:n,src:A.base64,style:b}),A.tracedSVG&&y.default.createElement(R,{alt:r,title:n,src:A.tracedSVG,style:b}),v&&y.default.createElement(E,{title:n,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(R,{alt:r,title:n,srcSet:A.srcSet,src:A.src,sizes:A.sizes,style:_,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,T.default)({alt:r,title:n},A))}})))}if(d){var g=d,S=(0,T.default)({position:"relative",overflow:"hidden",display:"inline-block",width:g.width,height:g.height},u);return"inherit"===u.display&&delete S.display,g.srcWebp&&g.srcSetWebp&&w()&&(g.src=g.srcWebp,g.srcSet=g.srcSetWebp),y.default.createElement(E,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(E,{className:(o?o:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},g.base64&&y.default.createElement(R,{alt:r,title:n,src:g.base64,style:b}),g.tracedSVG&&y.default.createElement(R,{alt:r,title:n,src:g.tracedSVG,style:b}),v&&y.default.createElement(E,{title:n,style:{backgroundColor:v,width:g.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:g.height}}),this.state.isVisible&&y.default.createElement(R,{alt:r,title:n,width:g.width,height:g.height,srcSet:g.srcSet,src:g.src,style:_,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,T.default)({alt:r,title:n,width:g.width,height:g.height},g))}})))}return null},e}(y.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:v.default.object,responsiveSizes:v.default.object,resolutions:v.default.object,sizes:v.default.object,fadeIn:v.default.bool,title:v.default.string,alt:v.default.string,className:v.default.oneOfType([v.default.string,v.default.object]),outerWrapperClassName:v.default.oneOfType([v.default.string,v.default.object]),style:v.default.object,imgStyle:v.default.object,placeholderStyle:v.default.object,position:v.default.string,backgroundColor:v.default.oneOfType([v.default.string,v.default.bool]),onLoad:v.default.func,Tag:v.default.string},e.default=M},,,,,,,,,,,,,function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,l;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(s(t))return!!s(e)&&(t=a.call(t),e=a.call(e),c(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=u(t),p=u(e)}catch(t){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(l=f[i],!c(t[l],e[l],n))return!1;return typeof t==typeof e}var a=Array.prototype.slice,u=n(63),s=n(62),c=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},,,function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(80),i=n(81),a=n(82),u=n(83),s=n(84);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(88),i=n(89),a=n(90),u=n(91),s=n(92);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e,n){var r=n(29),o=n(15),i=r(o,"Map");t.exports=i},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(93),i=n(94),a=n(95),u=n(96),s=n(97);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(75),i=n(101);t.exports=r},function(t,e,n){function r(t){if(!a(t)||i(t))return!1;var e=o(t)?T:c;return e.test(u(t))}var o=n(105),i=n(87),a=n(30),u=n(102),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,p=l.toString,d=f.hasOwnProperty,T=RegExp("^"+p.call(d).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(u(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}var o=n(14),i=n(71),a=n(16),u=n(17),s=1/0,c=o?o.prototype:void 0,l=c?c.toString:void 0;t.exports=r},function(t,e,n){function r(t,e){return o(t)?t:i(t,e)?[t]:a(u(t))}var o=n(16),i=n(85),a=n(100),u=n(108);t.exports=r},function(t,e,n){var r=n(15),o=r["__core-js_shared__"];t.exports=o},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[s]=n:delete t[s]),o}var o=n(14),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,s=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(11);t.exports=r},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(11),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(11),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(11),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(u.test(t)||!a.test(t)||null!=e&&t in Object(e))}var o=n(16),i=n(17),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(76),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}var o=n(9),i=Array.prototype,a=i.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(9);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(9);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(9);t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(67),i=n(68),a=n(69);t.exports=r},function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(10);t.exports=r},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(10);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(10);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(10);t.exports=r},function(t,e,n){function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(107),i=500;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e,n){var r=n(98),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=a},function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(17),i=1/0;t.exports=r},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(72);t.exports=r},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==s||e==a||e==c}var o=n(28),i=n(30),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=r},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(70),i="Expected a function";r.Cache=o,t.exports=r},function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(74);t.exports=r},,,,,function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),f=r(l),p=n(6),d=r(p),T=n(115),h=r(T),y=n(61),E=r(y),v=n(114),m=n(31),b=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,E.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case m.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return s({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return s({},o,(e={},e[r.type]=a,e.titleAttributes=s({},i),e));case m.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case m.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=s({},e);return Object.keys(t).forEach(function(e){var r;n=s({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return f.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,a=i.children,u=o(i,["children"]),s=(0,v.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,a),t.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(t,i)},c(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(f.default.Component),e.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,v.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},_=function(){return null},A=(0,h.default)(v.reducePropsToState,v.handleClientStateChange,v.mapStateOnServer)(_),g=b(A);g.renderStatic=g.rewind,e.Helmet=g,e.default=g},function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(1),u=r(a),s=n(5),c=r(s),l=n(31),f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=E(t,l.TAG_NAMES.TITLE),n=E(t,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=E(t,l.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},d=function(t){return E(t,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},h=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[l.TAG_NAMES.BASE]}).map(function(t){return t[l.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(t.indexOf(a)!==-1&&n[a])return e.concat(n)}return e},[])},y=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&g("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();e.indexOf(s)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),e.indexOf(u)===-1||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,c.default)({},r[u],o[u]);r[u]=s}return t},[]).reverse()},E=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},v=function(t){return{baseTag:h([l.TAG_PROPERTIES.HREF],t),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,t),defer:E(t,l.HELMET_PROPS.DEFER),encode:E(t,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,t),linkTags:y(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],t),metaTags:y(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:y(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:y(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],t),styleTags:y(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,t)}},m=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){m(e)},0)}}(),b=function(t){return clearTimeout(t)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:t.requestAnimationFrame||m,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:t.cancelAnimationFrame||b,g=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,O=function(t){S&&A(S),t.defer?S=_(function(){w(t,function(){S=null})}):(w(t),S=null)},w=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,f=t.styleTags,p=t.title,d=t.titleAttributes;M(l.TAG_NAMES.BODY,r),M(l.TAG_NAMES.HTML,o),R(p,d);var T={baseTag:C(l.TAG_NAMES.BASE,n),linkTags:C(l.TAG_NAMES.LINK,i),metaTags:C(l.TAG_NAMES.META,a),noscriptTags:C(l.TAG_NAMES.NOSCRIPT,u),scriptTags:C(l.TAG_NAMES.SCRIPT,c),styleTags:C(l.TAG_NAMES.STYLE,f)},h={},y={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=T[t].oldTags)}),e&&e(),s(t,h,y)},P=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=P(t)),M(l.TAG_NAMES.TITLE,e)},M=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var s=a[u],c=e[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),o.indexOf(s)===-1&&o.push(s);var f=i.indexOf(s);f!==-1&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},C=function(t,e){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,n.isEqualNode(t)})?o.splice(a,1):i.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:i}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},N=function(t,e,n,r){var o=I(n),i=P(e);return o?"<"+t+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+t+">":"<"+t+" "+l.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+t+">"},L=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===l.TAG_PROPERTIES.INNER_HTML||t===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+f(r[e],n)+'"';return t?t+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[l.REACT_TAG_MAP[n]||n]=t[n],e},e)},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[l.HTML_TAG_MAP[n]||n]=t[n],e},e)},G=function(t,e,n){var r,o=(r={key:e},r[l.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,e)]},H=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=l.REACT_TAG_MAP[t]||t;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},k=function(t,e,n){switch(t){case l.TAG_NAMES.TITLE:return{toComponent:function(){return G(t,e.title,e.titleAttributes,n)},toString:function(){return N(t,e.title,e.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return H(t,e)},toString:function(){return L(t,e,n)}}}},D=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,s=t.scriptTags,c=t.styleTags,f=t.title,p=void 0===f?"":f,d=t.titleAttributes;return{base:k(l.TAG_NAMES.BASE,e,r),bodyAttributes:k(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(l.ATTRIBUTE_NAMES.HTML,o,r),link:k(l.TAG_NAMES.LINK,i,r),meta:k(l.TAG_NAMES.META,a,r),noscript:k(l.TAG_NAMES.NOSCRIPT,u,r),script:k(l.TAG_NAMES.SCRIPT,s,r),style:k(l.TAG_NAMES.STYLE,c,r),title:k(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};e.convertReactPropstoHtmlAttributes=x,e.handleClientStateChange=O,e.mapStateOnServer=D,e.reducePropsToState=v,e.requestAnimationFrame=_,e.warn=g}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){T=t(d.map(function(t){return t.props})),h.canUseDOM?e(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.peek=function(){return T},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,d=[],t},e.prototype.shouldComponentUpdate=function(t){return!f(t,this.props)},e.prototype.componentWillMount=function(){d.push(this),p()},e.prototype.componentDidUpdate=function(){p()},e.prototype.componentWillUnmount=function(){var t=d.indexOf(this);d.splice(t,1),p()},e.prototype.render=function(){return c.createElement(u,this.props)},e}(s.Component);return h.displayName="SideEffect("+r(u)+")",h.canUseDOM=l.canUseDOM,h}}var s=n(1),c=r(s),l=r(n(64)),f=r(n(117));t.exports=u},,function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;
if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),s=0;s<i.length;s++){var c=i[s];if(!u(c))return!1;var l=t[c],f=e[c];if(o=n?n.call(r,l,f,c):void 0,o===!1||void 0===o&&l!==f)return!1}return!0}},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),i=r(o),a=n(65),u=r(a),s=n(48),c=r(s),l=n(166),f=r(l);e.default=function(t){var e=t.article;return i.default.createElement("div",{className:f.default.preview},i.default.createElement(c.default,{alt:"",sizes:e.heroImage.sizes}),i.default.createElement("h3",{className:f.default.previewTitle},i.default.createElement(u.default,{to:"/blog/"+e.slug},e.title)),i.default.createElement("small",null,e.publishDate),i.default.createElement("p",{dangerouslySetInnerHTML:{__html:e.description.childMarkdownRemark.html}}))},t.exports=e.default},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={previewTitle:"src-components----article-preview-module---previewTitle---dtVfR",tag:"src-components----article-preview-module---tag---1jiS7"}},function(t,e){t.exports={hero:"src-components----hero-module---hero---35EwX",heroImage:"src-components----hero-module---heroImage---vbnMA",heroDetails:"src-components----hero-module---heroDetails---1gifn",heroHeadline:"src-components----hero-module---heroHeadline---26ulT",heroTitle:"src-components----hero-module---heroTitle---2aT9T"}},,,function(t,e){"use strict";function n(t,e,f){if("string"!=typeof e){if(l){var p=c(e);p&&p!==l&&n(t,p,f)}var d=a(e);u&&(d=d.concat(u(e)));for(var T=0;T<d.length;++T){var h=d[T];if(!(r[h]||o[h]||f&&f[h])){var y=s(e,h);try{i(t,h,y)}catch(t){}}}return t}return t}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(1),i=r(o),a=n(48),u=r(a),s=n(167),c=r(s);e.default=function(t){var e=t.data;return i.default.createElement("div",{className:c.default.hero},i.default.createElement(u.default,{className:c.default.heroImage,alt:e.name,sizes:e.heroImage.sizes}),i.default.createElement("div",{className:c.default.heroDetails},i.default.createElement("h3",{className:c.default.heroHeadline},e.name),i.default.createElement("p",{className:c.default.heroTitle},e.title),i.default.createElement("p",null,e.shortBio.shortBio)))},t.exports=e.default},,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var u=n(1),s=r(u),c=n(104),l=r(c),f=n(113),p=r(f),d=n(266),T=r(d),h=n(141),y=r(h),E=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.render=function(){var t=(0,l.default)(this,"props.data.site.siteMetadata.title"),e=(0,l.default)(this,"props.data.allContentfulBlogPost.edges"),n=(0,l.default)(this,"props.data.allContentfulPerson.edges"),r=n[0];return s.default.createElement("div",{style:{background:"#fff"}},s.default.createElement(p.default,{title:t}),s.default.createElement(T.default,{data:r.node}),s.default.createElement("div",{className:"wrapper"},s.default.createElement("h2",{className:"section-headline"},"Recent articles"),s.default.createElement("ul",{className:"article-list"},e.map(function(t){var e=t.node;return s.default.createElement("li",{key:e.slug},s.default.createElement(y.default,{article:e}))}))))},e}(s.default.Component);e.default=E;e.pageQuery="** extracted graphql fragment **"}]);
//# sourceMappingURL=component---src-pages-index-js-b8a192ca76e965234a2d.js.map