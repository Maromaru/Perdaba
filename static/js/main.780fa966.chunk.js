(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(241)},240:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var a,r,i,o,c,l,d,s,p,u,b,f,m,E,h,g,x,D=n(5),O=n(0),v=n.n(O),y=n(45),j=n.n(y),I=n(23),w=n(10),T=n(58),A=n(17),C=function(e){return{type:k.ADD_LIST,payload:e}},S=function(e,t,n,a,r,i){return{type:k.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexEnd:a,droppableIndexStart:n,draggableId:r,type:i}}},_=function(e,t){return{type:k.ADD_CARD,payload:{text:t,listID:e}}},k={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST"},L=2,R=6,P=[{title:"1\ubc88 \ub370\uc774\ud130 \ubca0\uc774\uc2a4",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"1\ubc88 \ub370\uc774\ud130"},{id:"card-".concat(1),text:"2\ubc88 \ub370\uc774\ud130"}]},{title:"2\ubc88 \ub370\uc774\ud130 \ubca0\uc774\uc2a4",id:"list-".concat(1),cards:[{id:"card-".concat(2),text:"1\ubc88\ub370\uc774\ud130"},{id:"card-".concat(3),text:"2\ubc88\ub370\uc774\ud130"},{id:"card-".concat(4),text:"3\ubc88\ub370\uc774\ud130"}]}],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.ADD_LIST:var n={title:t.payload,cards:[],id:"list-".concat(L)};return L+=1,[].concat(Object(A.a)(e),[n]);case k.ADD_CARD:var a={text:t.payload.text,id:"card-".concat(R)};return R+=1,console.log("action received",t),e.map(function(e){return e.id===t.payload.listID?Object(T.a)({},e,{cards:[].concat(Object(A.a)(e.cards),[a])}):e});case k.DRAG_HAPPENED:var r=t.payload,i=r.droppableIdStart,o=r.droppableIdEnd,c=r.droppableIndexEnd,l=r.droppableIndexStart,d=(r.draggableId,r.type),s=Object(A.a)(e);if("list"===d){var p=s.splice(l,1);return s.splice.apply(s,[c,0].concat(Object(A.a)(p))),s}if(i===o){var u,b=e.find(function(e){return i===e.id}),f=b.cards.splice(l,1);(u=b.cards).splice.apply(u,[c,0].concat(Object(A.a)(f)))}if(i!==o){var m,E=e.find(function(e){return i===e.id}).cards.splice(l,1);(m=e.find(function(e){return o===e.id}).cards).splice.apply(m,[c,0].concat(Object(A.a)(E)))}return s;case k.EDIT_CARD:var h=t.payload,g=h.id,x=h.listID,D=h.newText;return e.map(function(e){if(e.id===x){var t=e.cards.map(function(e){return e.id===g?(e.text=D,e):e});return Object(T.a)({},e,{cards:t})}return e});case k.DELETE_CARD:var O=t.payload,v=O.id,y=O.listID;return e.map(function(e){if(e.id===y){var t=e.cards.filter(function(e){return e.id!==v});return Object(T.a)({},e,{cards:t})}return e});case k.EDIT_LIST_TITLE:var j=t.payload,I=j.listID,w=j.newListTitle;return e.map(function(e){return e.id===I?(e.title=w,e):e});case k.DELETE_LIST:var C=t.payload.listID;return e.filter(function(e){return e.id!==C});default:return e}},H=Object(w.c)({lists:F}),N=Object(w.e)(H),z=n(11),B=n(20),M=n(15),G=n(14),J=n(16),W=n(37),$=n(56),q=n.n($),K=n(109),Q=n.n(K),U=n(108),V=n.n(U),X=n(29),Y=n(6),Z=n(19),ee=n.n(Z),te=n(102),ne=Y.b.div(a||(a=Object(D.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]))),ae=Object(Y.b)(q.a)(r||(r=Object(D.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]))),re=Object(Y.b)(te.a)(i||(i=Object(D.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]))),ie=Y.b.div(o||(o=Object(D.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]))),oe=Object(Y.b)(ee.a)(c||(c=Object(D.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]))),ce=v.a.memo(function(e){var t=e.list,n=e.text,a=void 0===n?"":n,r=e.onChange,i=e.closeForm,o=e.children,c=t?"\ub370\uc774\ud130 \ubca0\uc774\uc2a4 \uc774\ub984\uc744 \uc801\uc73c\uc138\uc694":"\ub370\uc774\ud130 \uac12\uc744 \uc9d1\uc5b4 \ub123\uc73c\uc138\uc694";return v.a.createElement(ne,null,v.a.createElement(ae,null,v.a.createElement(re,{placeholder:c,autoFocus:!0,value:a,onChange:function(e){return r(e)},onBlur:i})),v.a.createElement(ie,null,o,v.a.createElement(oe,{onMouseDown:i},"close")))}),le=n(103),de=n.n(le),se=Object(Y.b)(de.a)(l||(l=Object(D.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]))),pe=function(e){var t=e.children,n=e.onClick;return v.a.createElement(se,{variant:"contained",onMouseDown:n},t)},ue=n(69),be=Y.b.div(d||(d=Object(D.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]))),fe=Object(Y.b)(ee.a)(s||(s=Object(D.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"])),be),me=Object(Y.b)(ee.a)(p||(p=Object(D.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"])),be),Ee=v.a.memo(function(e){var t=e.text,n=e.id,a=e.listID,r=e.index,i=e.dispatch,o=Object(O.useState)(!1),c=Object(W.a)(o,2),l=c[0],d=c[1],s=Object(O.useState)(t),p=Object(W.a)(s,2),u=p[0],b=p[1],f=Object(ue.b)({opacity:1,from:{opacity:0},config:{duration:400}}),m=function(e){d(!1)},E=function(e){b(e.target.value)},h=function(e){e.preventDefault(),i(function(e,t,n){return{type:k.EDIT_CARD,payload:{id:e,listID:t,newText:n}}}(n,a,u)),d(!1)},g=function(e){i(function(e,t){return{type:k.DELETE_CARD,payload:{id:e,listID:t}}}(n,a))};return l?v.a.createElement(ce,{text:u,onChange:E,closeForm:m},v.a.createElement(pe,{onClick:h},"\uc800\uc7a5\ud558\uae30")):v.a.createElement(ue.a.div,{style:f},v.a.createElement(X.b,{draggableId:String(n),index:r},function(e){return v.a.createElement(be,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return d(!0)}}),v.a.createElement(q.a,null,v.a.createElement(fe,{onMouseDown:function(){return d(!0)},fontSize:"small"},"edit"),v.a.createElement(me,{fontSize:"small",onMouseDown:g},"delete"),v.a.createElement(V.a,null,v.a.createElement(Q.a,null,t))))}))}),he=Object(I.b)()(Ee),ge=function(e){var t=e.list,n=e.children,a=e.onClick,r=t?1:.5,i=t?"white":"inherit",o=t?"rgba(0,0,0,.15)":"inherit",c=Y.b.div(u||(u=Object(D.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "])),r,i,o);return v.a.createElement(c,{onClick:a},v.a.createElement(ee.a,null,"add"),v.a.createElement("p",{style:{flexShrink:0}},n))},xe=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(M.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={formOpen:!1,text:""},n.openForm=function(){n.setState({formOpen:!0})},n.closeForm=function(e){n.setState({formOpen:!1})},n.handleInputChange=function(e){n.setState({text:e.target.value})},n.handleAddList=function(){var e=n.props.dispatch,t=n.state.text;t&&(n.setState({text:""}),e(C(t)))},n.handleAddCard=function(){var e=n.props,t=e.dispatch,a=e.listID,r=n.state.text;r&&(n.setState({text:""}),t(_(a,r)))},n.renderOpenForm=function(){var e=n.props.list,t=e?"\ubc15\uc2a4 \ucd94\uac00":"\ub370\uc774\ud130 \ucd94\uac00",a=e?1:.5,r=e?"white":"inherit",i=e?"rgba(0,0,0,.27)":"inherit",o=Y.b.div(b||(b=Object(D.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "])),a,r,i);return v.a.createElement(o,{onClick:n.openForm},v.a.createElement(ee.a,null,"add"),v.a.createElement("p",{style:{flexShrink:0}},t))},n}return Object(J.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?v.a.createElement(ce,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},v.a.createElement(pe,{onClick:t?this.handleAddList:this.handleAddCard},t?"\ubc15\uc2a4 \ucd94\uac00":"\ub370\uc774\ud130 \ucd94\uac00")):v.a.createElement(ge,{list:t,onClick:this.openForm},t?"\ubc15\uc2a4 \ucd94\uac00":"\ub370\uc774\ud130 \ucd94\uac00")}}]),t}(v.a.PureComponent),De=Object(I.b)()(xe),Oe=Y.b.div(f||(f=Object(D.a)(["\n  background-color: #ccc;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]))),ve=Y.b.input(m||(m=Object(D.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]))),ye=Y.b.div(E||(E=Object(D.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]))),je=Object(Y.b)(ee.a)(h||(h=Object(D.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),Ie=Y.b.h4(g||(g=Object(D.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #eee;\n  }\n"])),ye),we=Object(I.b)()(function(e){var t=e.title,n=e.cards,a=e.listID,r=e.index,i=e.dispatch,o=Object(O.useState)(!1),c=Object(W.a)(o,2),l=c[0],d=c[1],s=Object(O.useState)(t),p=Object(W.a)(s,2),u=p[0],b=p[1],f=function(e){console.log("hi"),e.target.select()},m=function(e){e.preventDefault(),b(e.target.value)},E=function(e){d(!1),i(function(e,t){return{type:k.EDIT_LIST_TITLE,payload:{listID:e,newTitle:t}}}(a,u))},h=function(){i(function(e){return{type:k.DELETE_LIST,payload:{listID:e}}}(a))};return v.a.createElement(X.b,{draggableId:String(a),index:r},function(e){return v.a.createElement(Oe,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),v.a.createElement(X.c,{droppableId:String(a),type:"card"},function(e){return v.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),l?v.a.createElement("form",{onSubmit:E},v.a.createElement(ve,{type:"text",value:u,onChange:m,autoFocus:!0,onFocus:f,onBlur:E})):v.a.createElement(ye,{onClick:function(){return d(!0)}},v.a.createElement(Ie,null,u),v.a.createElement(je,{onClick:h},"delete")),n.map(function(e,t){return v.a.createElement(he,{key:e.id,text:e.text,id:e.id,index:t,listID:a})}),e.placeholder,v.a.createElement(De,{listID:a}))}))})}),Te=Y.b.div(x||(x=Object(D.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Ae=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(M.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).onDragEnd=function(e){var t=e.destination,a=e.source,r=e.draggableId,i=e.type;t&&n.props.dispatch(S(a.droppableId,t.droppableId,a.index,t.index,r,i))},n}return Object(J.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.props.lists;return v.a.createElement(X.a,{onDragEnd:this.onDragEnd},v.a.createElement("h2",null,"1\ubc88"),v.a.createElement(X.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(t){return v.a.createElement(Te,Object.assign({},t.droppableProps,{ref:t.innerRef}),e.map(function(e,t){return v.a.createElement(we,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:t})}),t.placeholder,v.a.createElement(De,{list:!0}))}))}}]),t}(O.PureComponent),Ce=Object(I.b)(function(e){return{lists:e.lists}})(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(240);var Se,_e=n(110),ke=n.n(_e),Le=Object(Y.a)(Se||(Se=Object(D.a)(["\n  html {\n    background-color: #FFFAEB;\n    box-sizing: border-box;\n    transition: all 0.5s ease-in;\n  }\n"])));j.a.render(v.a.createElement(I.a,{store:N},v.a.createElement(Le,null),v.a.createElement(Ce,null)),document.getElementById("root")),ke()(document).bind("DOMNodeRemoved",function(e){console.log("Removed: "+e.target.nodeName)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.780fa966.chunk.js.map