(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return v})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return w})),a.d(t,"default",(function(){return y}));var n=a(2),o=a(6),l=a(0),r=a.n(l),i=a(78),c=a(76),u=a(69),s=a(64),b=a.n(s),d=37,f=39;var m=function(e){var t=e.block,a=e.children,n=e.defaultValue,o=e.values,i=e.groupId,s=Object(c.a)(),m=s.tabGroupChoices,h=s.setTabGroupChoices,v=Object(l.useState)(n),p=v[0],w=v[1],O=Object(l.useState)(!1),y=O[0],j=O[1];if(null!=i){var g=m[i];null!=g&&g!==p&&o.some((function(e){return e.value===g}))&&w(g)}var T=function(e){w(e),null!=i&&h(i,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},I=function(){j(!1)};return Object(l.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",I)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":p===t,className:Object(u.a)("tabs__item",b.a.tabItem,{"tabs__item--active":p===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case f:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return T(t)},onClick:function(){T(t),j(!1)},onPointerDown:function(){return j(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(a).filter((function(e){return e.props.value===p}))[0]))};var h=function(e){return r.a.createElement("div",null,e.children)},v={id:"install",title:"Installing theBeat"},p={unversionedId:"thebeat/install",id:"thebeat/install",isDocsHomePage:!1,title:"Installing theBeat",description:"Let's get started!",source:"@site/docs/thebeat/install.md",slug:"/thebeat/install",permalink:"/docs/thebeat/install",version:"current",sidebar:"thebeat",next:{title:"The Library",permalink:"/docs/thebeat/library"}},w=[],O={rightToc:w};function y(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's get started!"),Object(i.b)(m,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Arch Linux",value:"arch"},{label:"Fedora",value:"fedora"}],mdxType:"Tabs"},Object(i.b)(h,{value:"windows",mdxType:"TabItem"},"Grab the ",Object(i.b)("a",{href:"https://github.com/vicr123/theInstaller/releases/download/continuous/theBeat.exe"},"theBeat installer")," and follow the instructions."),Object(i.b)(h,{value:"macos",mdxType:"TabItem"},"Unfortunately, theBeat is not available on macOS at this time."),Object(i.b)(h,{value:"arch",mdxType:"TabItem"},"Install the ",Object(i.b)("code",null,"thebeat")," package from the AUR."),Object(i.b)(h,{value:"fedora",mdxType:"TabItem"},"theBeat is coming to Fedora soon. Stay tuned!")))}y.isMDXComponent=!0}}]);