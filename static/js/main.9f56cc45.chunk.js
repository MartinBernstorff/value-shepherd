(this["webpackJsonpvalue-shepherd"]=this["webpackJsonpvalue-shepherd"]||[]).push([[0],{14:function(e,t,o){},28:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(9),a=o.n(r),s=(o(14),o(3)),c=o(4),i=o(5),l=o(7),d=o(6),p=o(2),u=o.n(p),h=o(0),b=new u.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");n.Component,new u.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");var m=new u.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),f=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).propose=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",m.update(e.props.id,{Promotion:1}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.reverse=function(){var t=document.getElementById(e.props.id);t.style.opacity="1",m.update(e.props.id,{Promotion:0}).then((function(e){console.log(e),t.style.borderColor="LightGray",t.style.borderWidth="thin"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tbl7pyCYwx12t7LHu/viwnPcTZz8PXg4Smt/"+e.props.id)},e}return Object(i.a)(o,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsxs)("a",{href:this.href,className:"shadow-md hover:shadow-lg active:border-gray-500 group block rounded-lg p-4 border hover:border-gray-200 m-2 text-left justify-left text-justify",id:this.props.id,children:[Object(h.jsx)("div",{className:"grid",children:Object(h.jsx)("div",{className:"font-medium text-black text-xl",children:this.props.name})}),Object(h.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(h.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(h.jsxs)("div",{className:"grid grid-cols-3 mt-2 space-x-2",children:[Object(h.jsx)("button",{onClick:function(){return e.propose()},className:"rounded-lg px-2 py-1 border active:border-gray-500 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm",children:"Endorse"}),Object(h.jsx)("button",{onClick:function(){return e.reverse()},className:"rounded-lg px-2 py-1 border active:border-gray-500 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm",children:"Reverse"}),Object(h.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-2 py-1 border active:border-gray-500 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm",children:"Airtable"})]})]})})}}]),o}(n.Component),j=new u.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Vals");function v(e){var t=Object(n.useState)({}),o=Object(s.a)(t,2),r=o[0],a=o[1];return Object(n.useEffect)((function(){j.list({maxRecords:999,pageSize:100,view:"Weekly review",cellFormat:"json"}).then((function(e){a(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(r),console.log("Testing "+e.cycle),Object(h.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2",children:r.length>0?r.filter((function(e){return 1!==e.fields["Value certainty"]})).map((function(e){return Object(h.jsx)(f,{name:e.fields.Name,id:e.id,goals:e.fields.goal_string},e.id)})):Object(h.jsx)("p",{children:"Fetching value-shepherd if any uncompleted..."})})}var g=function(e){var t=Object(n.useState)({}),o=Object(s.a)(t,2),r=o[0],a=o[1];return console.log(r),Object(h.jsx)("div",{className:"grid mx-auto max-w-5xl",children:Object(h.jsx)("div",{className:"grid place-items-center",children:Object(h.jsx)(v,{filter:"False",reRun:a})})})};a.a.render(Object(h.jsx)(g,{tasks:[]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9f56cc45.chunk.js.map