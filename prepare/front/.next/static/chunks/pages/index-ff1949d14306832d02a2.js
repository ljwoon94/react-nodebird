_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return p}));var c=n("nKUr"),i=n("q1tI"),r=n("/MKj"),a=n("1zst"),o=n("ODXe"),s=n("Vl3Y"),l=n("5rEg"),u=n("2/Rp"),d=n("p+NB"),j=n("3zrx"),f=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.post})),n=t.imagePaths,a=t.addPostDone,f=Object(j.a)(""),b=Object(o.a)(f,3),p=b[0],O=b[1],h=b[2];Object(i.useEffect)((function(){a&&h("")}),[a]);var m=Object(i.useCallback)((function(){if(!p||!p.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud558\uc138\uc694.");var t=new FormData;return n.forEach((function(e){t.append("image",e)})),t.append("content",p),e({type:d.e,data:t})}),[p,n]),g=Object(i.useRef)(),v=Object(i.useCallback)((function(){g.current.click()}),[g.current]),w=Object(i.useCallback)((function(t){console.log("images",t.target.files);var n=new FormData;[].forEach.call(t.target.files,(function(e){n.append("image",e)})),e({type:d.G,data:n})}),[]),x=Object(i.useCallback)((function(t){return function(){e({type:d.v,data:t})}}),[]);return Object(c.jsxs)(s.a,{style:{margin:"10px 0 20px"},encType:"multipart/form-data",onFinish:m,children:[Object(c.jsx)(l.a.TextArea,{value:p,onChange:O,maxLength:140,placeholder:"\uc5b4\ub5a4 \uc2e0\uae30\ud55c \uc77c\uc774 \uc788\uc5c8\ub098\uc694?"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:g,onChange:w}),Object(c.jsx)(u.a,{onClick:v,children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),Object(c.jsx)(u.a,{type:"primary",style:{float:"right"},htmlType:"submit",children:"\ub4f1\ub85d"})]}),Object(c.jsx)("div",{children:n.map((function(e,t){return Object(c.jsxs)("div",{style:{display:"inline-block"},children:[Object(c.jsx)("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{onClick:x(t),children:"\uc81c\uac70"})})]},e)}))})]})},b=n("kduo"),p=!0;t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.user})).me,n=Object(r.c)((function(e){return e.post})),o=n.mainPosts,s=n.hasMorePosts,l=n.loadPostsLoading,u=n.retweetError;return Object(i.useEffect)((function(){u&&alert(u)}),[u]),Object(i.useEffect)((function(){function t(){if(window.pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&s&&!l){var t,n=null===(t=o[o.length-1])||void 0===t?void 0:t.id;e({type:d.n,lastId:n})}}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[s,l,o]),Object(c.jsxs)(a.a,{children:[t&&Object(c.jsx)(f,{}),o.map((function(e){return Object(c.jsx)(b.a,{post:e},e.id)}))]})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,4,7,0,3,5,6,8]]]);