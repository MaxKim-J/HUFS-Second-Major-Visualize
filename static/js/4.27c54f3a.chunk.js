(this["webpackJsonphufs-second-major-visual"]=this["webpackJsonphufs-second-major-visual"]||[]).push([[4],{109:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return c}));var a=[{name:"\uc601\uc5b4\ub300\ud559",icon:"./images/english.png"},{name:"\ud504\ub791\uc2a4\uc5b4\ud559\ubd80",icon:"./images/france.png"},{name:"\uc2a4\ud398\uc778\uc5b4\uacfc",icon:"./images/spain.png"},{name:"\ub9c8\uc778\uc5b4\uacfc",icon:"./images/indonesia.png"},{name:"\ubca0\ud2b8\ub0a8\uc5b4\uacfc",icon:"./images/vietnam.png"},{name:"\uc911\uad6d\uc5b4\ub300",icon:"./images/china.png"},{name:"\uc77c\ubcf8\uc5b4\ub300",icon:"./images/japan.png"},{name:"\uc0ac\uacfc\ub300",icon:"./images/social.png"},{name:"\ubbf8\ub514\uc5b4\ucee4\ubba4\ub2c8\ucf00\uc774\uc158\ud559\ubd80",icon:"./images/broad.png"},{name:"\uc0c1\uacbd\ub300\ud559",icon:"./images/line.png"},{name:"\uacbd\uc601\ud559\uc804\uacf5",icon:"./images/business.png"},{name:"LD/LT",icon:"./images/ldlt.png"},{name:"\uc778\uae30\uc735\ud569\uc804\uacf5",icon:"./images/converge.png"},{name:"\uad6d\uc81c\ud559\ubd80",icon:"./images/inter.png"}],r=[{name:"\uc601\uc5b4\ud1b5\ubc88\uc5ed\ud559\uacfc",icon:"./images/trans.png"},{name:"\uacbd\uc0c1\ub300",icon:"./images/bus.png"},{name:"\ud1b5\uacc4\ud559\uacfc",icon:"./images/statistics.png"},{name:"\uc778\uae30\uc735\ud569\uc804\uacf5",icon:"./images/converge.png"}],c=[{name:"2018-1",icon:null},{name:"2018-2",icon:null},{name:"2019-1",icon:null},{name:"2019-2",icon:null}]},110:function(n,e,t){"use strict";var a=t(0),r=t.n(a),c=t(63),i=t(64);e.a=function(n){var e=n.themeArr,t=n.callFunction,a=n.useIcon;return r.a.createElement("div",{className:"chart-search"},r.a.createElement(i.a,null,e.map((function(n,e){return r.a.createElement("span",{key:e,onClick:function(){return t(n.name)}},r.a.createElement(c.a,{major:n.name,icon:a?n.icon:null}))}))))}},383:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(62),i=t(109),o=t(110),u=function(n){var e=n.onGetBaDataByInput;return r.a.createElement(o.a,{useIcon:!0,themeArr:i.b,callFunction:function(n){e(n)}})},l=t(68),m=t(1),f=t(55),s=t(2);function d(){var n=Object(m.a)(["\n  font-size: 1.2rem;\n  font-weight: 700;\n  @media screen and (max-width: 750px) {\n    font-size: 12px;\n  }\n  @media screen and (max-width: 420px) {\n    font-size: 12px;\n  }\n"]);return d=function(){return n},n}function g(){var n=Object(m.a)(["\n  font-weight: 700;\n  margin: 0.3rem 0;\n  @media screen and (max-width: 750px) {\n    font-size: 13px;\n  }\n\n  @media screen and (max-width: 420px) {\n    font-size: 13px;\n  }\n"]);return g=function(){return n},n}function p(){var n=Object(m.a)(["\n  @media screen and (max-width: 750px) {\n    font-size: 13px;\n  }\n\n  @media screen and (max-width: 420px) {\n    font-size: 13px;\n  }\n"]);return p=function(){return n},n}function v(){var n=Object(m.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: #e2e2e2;\n  border-radius: 50%;\n"]);return v=function(){return n},n}function E(){var n=Object(m.a)(["\n  width: 25%;\n  text-align: center;\n"]);return E=function(){return n},n}function b(){var n=Object(m.a)(["\n  display: flex;\n  text-align: left;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n"]);return b=function(){return n},n}var h=s.a.div(b()),x=s.a.div(E()),j=s.a.div(v()),y=s.a.div(p()),k=s.a.div(g()),O=s.a.div(d()),w=function(n){var e=n.baData,t=e.semester,a=e.passScore,c=e.averageScore,i=e.examPasser,o=e.examTaker,u=(i/o*100).toFixed(1);return r.a.createElement(r.a.Fragment,null,e.semester&&r.a.createElement(f.c,null,r.a.createElement("div",null,r.a.createElement(k,null,"\uc120\ud0dd\ud559\uae30 : ",t),r.a.createElement(j,null)),r.a.createElement(h,null,r.a.createElement(x,null,r.a.createElement(y,null,"\ud569\uaca9\uc810\uc218"),r.a.createElement(O,null,a,"/60")),r.a.createElement(x,null,r.a.createElement(y,null,"\ud3c9\uade0\uc810\uc218"),r.a.createElement(O,null,c,"/60")),r.a.createElement(x,null,r.a.createElement(y,null,"\ud569\uaca9/\uc751\uc2dc"),r.a.createElement(O,null,i,"/",o,"\uba85")),r.a.createElement(x,null,r.a.createElement(y,null,"\ud569\uaca9\ub960"),r.a.createElement(O,null,u,"%")))))},z=["\uc774\uc911\uc804\uacf5 \ubcc0\uacbd, \uc2e0\uccad, \ud6c4\uae30\uc774\uc911\uc804\uacf5 \uc2e0\uccad \uc751\uc2dc\uc790 \ub370\uc774\ud130\ub97c \ubaa8\ub450 \ud569\uc0b0\ud588\uc2b5\ub2c8\ub2e4.(\ud574\ub2f9 \ud559\uae30\uc5d0 \uc2dc\ud5d8 \uc751\uc2dc\ud55c \ud559\uc0dd \uc804\ubd80)","\ud3c9\uade0 \uc810\uc218\ub294 \uc18c\uc218\uc810 \ub458\uc9f8\uc790\ub9ac\uc5d0\uc11c \ubc18\uc62c\ub9bc\ud588\uc2b5\ub2c8\ub2e4.","\ub9e4\ub144 1\ud559\uae30\uc5d0\ub294 \uc774\uc911\uc804\uacf5 \ubcc0\uacbd \uc2e0\uccad\uc790\uac00 \ub9ce\uace0, 2\ud559\uae30\uc5d0\ub294 \uc0c8\ub0b4\uae30\ubd84\ub4e4\uc758 \uc774\uc911\uc804\uacf5 \uc2e0\uccad\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.","\uc790\uc138\ud55c \uc2dc\ud5d8\uc77c\uc815\uacfc \uc815\ubcf4\ub294 \uacbd\uc601\ub300\ud559 \ud648\ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc138\uc694."],D=t(69),F=function(n){var e=n.baData,t=n.onGetBaDataByInput,a=e.passPerAdmission;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"\uacbd\uc601\ub300\ud559 \uc774\uc911 \uc2dc\ud5d8 \uc815\ubcf4",subTitle:"4\ud559\uae30\uac04\uc758 \uacbd\uc601\ub300\ud559 \uacbd\uc601\ud559\uc804\uacf5 \uc774\uc911 \ud544\uae30 \uc2dc\ud5d8\uc758 \ud559\ubc88\ubcc4 \ud569\uaca9 \ud1b5\uacc4\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4. \ud559\uae30\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."}),r.a.createElement(u,{onGetBaDataByInput:t}),r.a.createElement(D.a,{selectedInfo:a,chartType:"ba"}),r.a.createElement(w,{baData:e}),r.a.createElement(l.a,{selectedInfo:z,majorNoticeType:!1}))},I=t(5),T=t(13);e.default=function(){var n=Object(I.c)((function(n){return n.data})),e=Object(I.b)();return r.a.createElement(F,{baData:n.baData,onGetBaDataByInput:function(n){e(Object(T.b)(n))}})}},55:function(n,e,t){"use strict";t.d(e,"c",(function(){return m})),t.d(e,"b",(function(){return f})),t.d(e,"a",(function(){return s})),t.d(e,"e",(function(){return d})),t.d(e,"d",(function(){return g}));var a=t(1),r=t(2);function c(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n"]);return c=function(){return n},n}function i(){var n=Object(a.a)(["\n  background-color: ",";\n  width: 12px;\n  height: 12px;\n  margin-right: 0.3rem;\n  display: inline-block;\n  margin-top: 1rem;\n"]);return i=function(){return n},n}function o(){var n=Object(a.a)(["\n  margin-right: 1rem;\n  @media screen and (max-width: 750px) {\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 420px) {\n    font-size: 0.6rem;\n    text-align: left;\n    margin-left: 1rem;\n  }\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n  @media screen and (max-width: 440px) {\n    flex-direction: column;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f7f7f7;\n  margin-top: 1rem;\n"]);return l=function(){return n},n}var m=r.a.div(l()),f=r.a.div(u()),s=r.a.div(o()),d=r.a.span(i(),(function(n){return n.color})),g=r.a.div(c())},62:function(n,e,t){"use strict";var a=t(1),r=t(0),c=t.n(r),i=t(2);function o(){var n=Object(a.a)(["\n  margin-bottom: 1rem;\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: 0.7rem;\n"]);return u=function(){return n},n}var l=i.a.div(u()),m=i.a.div(o());e.a=function(n){var e=n.title,t=n.subTitle;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null,e),c.a.createElement(m,null,t))}},63:function(n,e,t){"use strict";var a=t(1),r=t(0),c=t.n(r),i=t(2),o=t(4);function u(){var n=Object(a.a)(["\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.3rem;\n  margin-top: 0.1rem;\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n  font-size: 0.8rem;\n"]);return l=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin-left: 1rem;\n"]);return m=function(){return n},n}function f(){var n=Object(a.a)(["\n  padding: 0.2rem 1rem;\n  background-color: #f6f9fc;\n  border-radius: 20px;\n  margin: 0 0.5rem 0.5rem 0;\n  font-size: 0.8rem;\n  display: flex;\n  cursor: pointer;\n  transition: background-color 0.5s;\n  &:hover {\n    background-color: #d0d9e2;\n  }\n"]);return f=function(){return n},n}var s=i.a.span(f()),d=i.a.div(m()),g=i.a.div(l()),p=i.a.img(u());e.a=function(n){var e=n.major,t=n.icon,a=n.cancelFunction;return c.a.createElement(s,null,t?c.a.createElement(p,{src:t,alt:t}):null,c.a.createElement(g,null,e),a?c.a.createElement(d,{className:"chart-major-box-close",onClick:function(){return a(e)}},c.a.createElement(o.a,{label:"cancel",emoji:"\u274c"})):null)}},64:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(1);function r(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  transition: background-color 0.8s;\n\n  @media screen and (max-width: 750px) {\n    width: 95%;\n  }\n\n  @media screen and (max-width: 380px) {\n    width: 100%;\n  }\n"]);return r=function(){return n},n}var c=t(2).a.div(r())},68:function(n,e,t){"use strict";var a=t(1),r=t(0),c=t.n(r),i=t(2);function o(){var n=Object(a.a)(["\n  margin-bottom: 0.2rem;\n  padding-left: 0.5rem;\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: #e2e2e2;\n  margin-top: 1rem;\n  border-radius: 50%;\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n  background-color: #ececec;\n  padding: 0.1rem 0.5rem;\n  margin-right: 0.8rem;\n  font-weight: 700;\n  display: inline-block;\n  margin-bottom: 0.2rem;\n"]);return l=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin-bottom: 1rem;\n  @media screen and (max-width: 750px) {\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 420px) {\n    font-size: 0.7rem;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(a.a)(["\n  padding-top: 1rem;\n"]);return f=function(){return n},n}var s=i.a.div(f()),d=i.a.div(m()),g=i.a.div(l()),p=i.a.div(u()),v=i.a.div(o()),E=function(n){var e=n.noticeResource;return c.a.createElement(c.a.Fragment,null,e.map((function(n,e){return n.notice?c.a.createElement(d,{key:e},c.a.createElement(g,null,n.name," \uc9c0\uc6d0 \uc720\uc758\uc0ac\ud56d"),c.a.createElement("div",null,n.notice.split("&").map((function(n,e){return c.a.createElement(v,{key:e},e+1,". ",n)}))),c.a.createElement(p,null)):null})))},b=function(n){var e=n.noticeResource;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null,c.a.createElement(g,null,"\uc720\uc758\uc0ac\ud56d"),c.a.createElement("div",null,e.map((function(n,e){return c.a.createElement(v,{key:e},e+1,". ",n)})))))};e.a=function(n){var e=n.selectedInfo,t=n.majorNoticeType;return c.a.createElement(s,null,t?c.a.createElement(E,{noticeResource:e}):c.a.createElement(b,{noticeResource:e}))}},69:function(n,e,t){"use strict";var a=t(3),r=t(0),c=t.n(r),i=t(9),o=t(55),u=t(111),l=function(n){var e=n.direction,t=n.chart,l=Object(r.useState)(!0),m=Object(a.a)(l,2),f=m[0],s=m[1];return c.a.createElement(o.c,null,c.a.createElement(o.b,null,e.map((function(n,e){return c.a.createElement(o.a,{key:e},c.a.createElement(o.e,{color:n.color}),c.a.createElement("span",null,n.title))}))),c.a.createElement(u.e,{width:"100%",height:300},c.a.createElement(u.c,{data:t,margin:{top:30,right:30,left:-20,bottom:5}},c.a.createElement(u.b,{strokeDasharray:"3 3"}),c.a.createElement(u.g,{dataKey:"name"}),c.a.createElement(u.h,null),c.a.createElement(u.f,{isAnimationActive:!1}),f?e.map((function(n,e){return c.a.createElement(u.a,{key:e,dataKey:n.title,fill:n.color})})):e.map((function(n,e){return c.a.createElement(u.d,{type:"linear",key:e,dataKey:n.title,stroke:n.color,strokeWidth:4,dot:{strokeWidth:6}})})))),c.a.createElement(o.d,null,e.length>0?c.a.createElement(i.b,{onClick:function(){return s(!f)}},f?"\uaebe\uc740\uc120 \uadf8\ub798\ud504\ub85c \ubc14\uafb8\uae30":"\ub9c9\ub300 \uadf8\ub798\ud504\ub85c \ubc14\uafb8\uae30"):null))},m=function(n){var e=n.direction,t=n.chart;return c.a.createElement(o.c,null,c.a.createElement(o.b,null,e.map((function(n,e){return c.a.createElement(o.a,{key:e},c.a.createElement(o.e,{color:n.color}),c.a.createElement("span",null,n.title))}))),c.a.createElement(u.e,{width:"100%",height:300},c.a.createElement(u.c,{data:t,margin:{top:30,right:30,left:-20,bottom:5}},c.a.createElement(u.b,{strokeDasharray:"3 3"}),c.a.createElement(u.g,{dataKey:"name"}),c.a.createElement(u.h,null),c.a.createElement(u.f,{isAnimationActive:!1}),c.a.createElement(u.a,{dataKey:"\ud569\uaca9\uc790",stackId:"a",fill:"#82ca9d"}),c.a.createElement(u.a,{dataKey:"\ubd88\ud569\uaca9\uc790",stackId:"a",fill:"#FFC658"}),c.a.createElement(u.d,{dataKey:"\uc751\uc2dc\uc790",strokeWidth:3,stroke:"#8884D8"}))))},f=t(82),s=["2018-2","2019-1","2019-2","2020-1"],d=["#8884d8","#82ca9d","#ffc658"];e.a=function(n){var e=n.selectedInfo,t=n.chartType,i=Object(r.useState)({direction:[],chart:[]}),o=Object(a.a)(i,2),u=o[0],g=o[1];Object(r.useEffect)((function(){if(e){var n="major"===t?function(n){var e=[],t=[];return n.forEach((function(n,e){t=[].concat(Object(f.a)(t),[{title:n.name,color:d[e]}])})),s.forEach((function(t,a){e=[].concat(Object(f.a)(e),[{name:t}]),n.forEach((function(n){e[a][n.name]=function(n){switch(n){case-1:return"\ub370\uc774\ud130 \uc5c6\uc74c";case-2:return"\uc81c\ud55c \uc5c6\uc74c";default:return n}}(n.data[a])}))})),{direction:t,chart:e}}(e):function(n){var e=[];return n.forEach((function(n){var t=n.id,a=n.admission,r=n.examPasser,c=n.examTaker,i={id:t,name:"".concat(a,"\ud559\ubc88"),"\ubd88\ud569\uaca9\uc790":c-r,"\ud569\uaca9\uc790":r,"\uc751\uc2dc\uc790":c};e=[].concat(Object(f.a)(e),[i])})),{direction:[{title:"\uc751\uc2dc\uc790",color:"#8884D8"},{title:"\ubd88\ud569\uaca9\uc790",color:"#FFC658"},{title:"\ud569\uaca9\uc790",color:"#82ca9d"}],chart:e}}(e);g(n)}}),[e,t]);var p=u.direction,v=u.chart;return c.a.createElement(c.a.Fragment,null,"major"===t?c.a.createElement(l,{direction:p,chart:v}):c.a.createElement(m,{direction:p,chart:v}))}}}]);
//# sourceMappingURL=4.27c54f3a.chunk.js.map