(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(c){o=!0,l=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},o=r(1003),c=r(880),i=r(9246);function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={};function f(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(l?"%"+l:"")]=!0}}var h=s.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,h=e.href,p=e.as,m=e.children,x=e.prefetch,b=e.passHref,j=e.replace,y=e.shallow,v=e.scroll,g=e.locale,_=e.onClick,w=e.onMouseEnter,N=d(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,a&&"string"===typeof r&&(r=s.default.createElement("a",null,r));var k,L=!1!==x,E=c.useRouter(),O=s.default.useMemo((function(){var e=l(o.resolveHref(E,h,!0),2),t=e[0],r=e[1];return{href:t,as:p?o.resolveHref(E,p):r||t}}),[E,h,p]),M=O.href,C=O.as,H=s.default.useRef(M),P=s.default.useRef(C);a&&(k=s.default.Children.only(r));var R=a?k&&"object"===typeof k&&k.ref:t,S=l(i.useIntersection({rootMargin:"200px"}),3),z=S[0],A=S[1],I=S[2],T=s.default.useCallback((function(e){P.current===C&&H.current===M||(I(),P.current=C,H.current=M),z(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[C,R,M,I,z]);s.default.useEffect((function(){var e=A&&L&&o.isLocalURL(M),t="undefined"!==typeof g?g:E&&E.locale,r=u[M+"%"+C+(t?"%"+t:"")];e&&!r&&f(E,M,C,{locale:t})}),[C,M,A,g,L,E]);var U={ref:T,onClick:function(e){a||"function"!==typeof _||_(e),a&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,l,a,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),t[l?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}))}(e,E,M,C,j,y,v,g)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),o.isLocalURL(M)&&f(E,M,C,{priority:!0})}};if(!a||b||"a"===k.type&&!("href"in k.props)){var J="undefined"!==typeof g?g:E&&E.locale,K=E&&E.isLocaleDomain&&o.getDomainLocale(C,J,E&&E.locales,E&&E.domainLocales);U.href=K||o.addBasePath(o.addLocale(C,J,E&&E.defaultLocale))}return a?s.default.cloneElement(k,U):s.default.createElement("a",Object.assign({},N,U),r)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1406:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),l=r(5675),a=r.n(l),s=function(e){var t=e.src,r=e.width;e.quality;return"".concat(t,"?size=").concat(r||128)};function o(){return(0,n.jsxs)("div",{className:"flex font-sans",children:[(0,n.jsx)("div",{className:"flex-none w-48 relative border-4 border-black rounded-xl",children:(0,n.jsx)(a(),{loader:s,src:"https://github.com/JoMedeiros.png",width:64,alt:"Imagem de Perfil de JoMedeiros",className:"absolute z-10 inset-0 w-full h-full object-cover rounded-lg",layout:"fill"})}),(0,n.jsxs)("form",{className:"flex-auto p-6",children:[(0,n.jsxs)("div",{className:"flex flex-wrap",children:[(0,n.jsx)("h1",{className:"flex-auto text-lg font-semibold text-slate-900",children:"Josivan Gois"}),(0,n.jsx)("div",{className:"text-lg font-semibold text-slate-500",children:"Fullstack"}),(0,n.jsx)("div",{className:"w-full flex-none text-sm font-medium text-slate-700 mt-2",children:"In stock"})]}),(0,n.jsx)("div",{className:"flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200",children:(0,n.jsxs)("div",{className:"space-x-2 flex text-sm",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"sr-only peer",name:"size",type:"radio",value:"xs",checked:!0}),(0,n.jsx)("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:"XS"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"sr-only peer",name:"size",type:"radio",value:"s"}),(0,n.jsx)("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:"S"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"sr-only peer",name:"size",type:"radio",value:"m"}),(0,n.jsx)("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:"M"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"sr-only peer",name:"size",type:"radio",value:"l"}),(0,n.jsx)("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:"L"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"sr-only peer",name:"size",type:"radio",value:"xl"}),(0,n.jsx)("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white",children:"XL"})]})]})}),(0,n.jsxs)("div",{className:"flex space-x-4 mb-6 text-sm font-medium",children:[(0,n.jsxs)("div",{className:"flex-auto flex space-x-4",children:[(0,n.jsx)("button",{className:"h-10 px-6 font-semibold rounded-md bg-black text-white",type:"submit",children:"Buy now"}),(0,n.jsx)("button",{className:"h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900",type:"button",children:"Add to bag"})]}),(0,n.jsx)("button",{className:"flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200",type:"button",ariaLabel:"Like",children:(0,n.jsx)("svg",{width:"20",height:"20",fill:"currentColor",ariaHidden:"true",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"})})})]}),(0,n.jsx)("p",{className:"text-sm text-slate-700",children:"Free shipping on all continental US orders."}),(0,n.jsx)("h1",{children:"Links"})]})]})}},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),l=r(9008),a=r.n(l),s=r(1664),o=r.n(s),c=r(7160),i=r.n(c),d=r(1406);function u(){return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"P\xe1gina Inicial - JoMedeiros"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("header",{className:"bg-black text-white font-sans mx-0 rounded-b-lg shadow shadow-black/50",children:(0,n.jsx)("nav",{className:"p-4",children:(0,n.jsxs)("ul",{className:"flex",children:[(0,n.jsx)("li",{className:"px-4 font-bold",children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{children:"P\xe1gina inicial"})})}),(0,n.jsx)("li",{className:"px-4",children:(0,n.jsx)(o(),{href:"/curriculum",children:(0,n.jsx)("a",{children:"Curriculum"})})})]})})}),(0,n.jsx)("main",{className:i().main,children:(0,n.jsx)(d.default,{})}),(0,n.jsx)("footer",{className:i().footer,children:(0,n.jsx)("a",{href:"https://github.com/JoMedeiros",target:"_blank",rel:"noopener noreferrer",children:"feito por Josivan Gois - 2022"})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[675,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);