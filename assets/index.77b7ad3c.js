var w=Object.defineProperty,F=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))B.call(o,t)&&y(e,t,o[t]);if(b)for(var t of b(o))D.call(o,t)&&y(e,t,o[t]);return e},v=(e,o)=>F(e,S(o));import{j as a,t as h,a as s,r as c,P as M,D as P,C as R,b as _,E as j,T as q,m as N,c as O,F as K,d as G,R as H,e as U}from"./vendor.7a080761.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}};W();function T({children:e,className:o=""}){return a("div",{className:[o,"container"].join(" "),children:e})}function Y(){return a("header",{className:"appbar-root",children:a(T,{className:"appbar-container",children:a("h1",{className:"appbar-title",children:"Todomatic"})})})}function C(e,o="info",t){const i={position:"bottom-left",className:"toast-root"};switch(o){case"error":h.error(n=>g(n,e,t),i);break;default:h(n=>g(n,e,t),i)}}const A=h.dismiss;function g(e,o,t){return s("div",{className:"toast-main",children:[a("div",{className:"toast-message",children:o}),t!==void 0&&a("div",{className:"toast-action",children:a("button",{type:"button",onClick:()=>t.onClick(e),children:t==null?void 0:t.label})})]})}const L=c.exports.createContext({todoItems:[],dispatch:()=>{}});function x(){return c.exports.useContext(L)}var z="/quick_add.mp3",J="/error_feedback.mp3";const Q=new Audio(z),V=new Audio(J);function X(){const[e,o]=c.exports.useState(!1),[t,i]=c.exports.useState(""),[n,l]=c.exports.useState(!1),{dispatch:d}=x(),r=()=>{if(t.trim().length===0){V.play(),l(!0),C("Please provide a name for the task","error",{label:"Dismiss",onClick:u=>A(u.id)});return}d({type:"add",payload:{todo:t,complete:!1}}),i(""),Q.play()};return s("div",{className:"add-todo-box-root","data-active":e,"data-error":n,children:[a("span",{className:"add-todo-box-leading",children:">"}),a("input",{type:"text",placeholder:"What's on your mind...",className:"add-todo-box-input",value:t,onFocus:()=>o(!0),onBlur:()=>{o(!1),l(!1)},onChange:u=>{i(u.currentTarget.value),l(!1)},onKeyPress:u=>{u.key==="Enter"&&r()}}),a("div",{className:"add-todo-button-root",children:a("button",{type:"submit",className:"add-todo-button",title:"Add todo",disabled:t.trim().length===0,onClick:r,children:a(M,{})})})]})}function Z({LeadingIcon:e,label:o,ariaLabel:t,active:i,onClick:n}){return a("li",{className:"tab-item-root","data-active":i,children:s("button",{type:"button",className:"tab-item-main",onClick:n,"aria-label":t,children:[e,o]})})}function ee({activeFilter:e,onFilterChange:o}){return a("ul",{className:"tab-group-root",children:[{filterId:"all",LeadingIcon:a(P,{}),label:"All",ariaLabel:"Show all tasks",active:e==="all",onClick:()=>{}},{filterId:"pending",LeadingIcon:a(R,{}),label:"Pending",ariaLabel:"Show pending tasks",active:e==="pending",onClick:()=>{}},{filterId:"completed",LeadingIcon:a(_,{}),label:"Completed",ariaLabel:"Show completed tasks",active:e==="completed",onClick:()=>{}}].map(i=>a(Z,{LeadingIcon:i.LeadingIcon,label:i.label,ariaLabel:i.ariaLabel,active:i.active,onClick:()=>o(i.filterId)},i.label))})}function te({Icon:e,ariaLabel:o,title:t,onClick:i}){return a("button",{className:"todo-list-item-button",type:"button",title:t,onClick:i,"aria-label":o,children:e})}function oe({todoItem:e,onDelete:o,onEdit:t,onToggleCompletion:i}){const n=[{title:"Edit Item",ariaLabel:`Edit Item "${e.todo}"`,Icon:a(j,{}),onClick:t},{title:"Delete Item",ariaLabel:`Delete Item "${e.todo}"`,Icon:a(q,{}),onClick:o}];return s(N.li,{className:"todo-list-item-root","data-completed":e.complete,layout:!0,animate:{y:[30,0],transition:{duration:.3,ease:"easeOut"}},children:[a("div",{className:"todo-list-item-click-target",onClick:i}),s("div",{className:"todo-list-item-primary-content",children:[a("input",{type:"checkbox",checked:e.complete,id:`checkbox-${e.id}`,title:`Mark item "${e.todo}" as ${e.complete?"pending":"completed"}`,onChange:i}),a("label",{className:"todo-list-item-label",htmlFor:`checkbox-${e.id}`,children:e.todo})]}),a("div",{className:"todo-list-item-actions-group",children:n.map(l=>a(te,{Icon:l.Icon,ariaLabel:l.ariaLabel,title:l.title,onClick:l.onClick},l.title))})]})}function ae({children:e,visible:o,onClose:t}){const i=s("div",{className:"modal-root","data-visible":o,onKeyDown:n=>{n.key==="Escape"&&t()},children:[a("div",{className:"modal-scrim",onClick:t}),a("div",{className:"modal-container",children:e})]});return O.exports.createPortal(i,document.querySelector("body"))}function ne({label:e,primary:o,onClick:t}){return a("button",{type:"button",className:"modal-action-button","data-primary":o,onClick:t,children:e})}let m=null;function ie({title:e,actions:o,visible:t,onClose:i,children:n}){return c.exports.useEffect(()=>{t?m=document.activeElement:m!==null&&m.focus()},[t]),s(ae,{visible:t,onClose:i,children:[a("h2",{className:"modal-title",children:e}),a("div",{className:"modal-content",children:n}),a("div",{className:"modal-actions-group",children:o.map(l=>a(ne,{label:l.label,primary:l.primary,onClick:l.onClick},l.label))})]})}function le({todoItem:e,onRename:o,onCancel:t}){var d;const[i,n]=c.exports.useState((d=e==null?void 0:e.todo)!=null?d:""),l=c.exports.useRef(null);return c.exports.useEffect(()=>{e!==void 0&&(n(e.todo),setTimeout(()=>{var r;(r=l.current)==null||r.focus()},200))},[e]),s(ie,{visible:e!==void 0,title:"Rename",onClose:t,actions:[{label:"Rename",primary:!0,onClick:()=>o(i)},{label:"Cancel",primary:!1,onClick:t}],children:["Rename item ",s("strong",{children:['"',e==null?void 0:e.todo,'"']}),a("div",{className:"todo-rename-modal-input",children:a("input",{ref:l,type:"text",className:"styled-input",placeholder:"New name",value:i,onChange:r=>n(r.currentTarget.value),onKeyPress:r=>{r.key==="Enter"&&o(i)}})})]})}const f={all:{illustration:"(^-^*)",heading:"It seems empty in here",details:"There are no tasks to show for now. Consider adding some..."},pending:{illustration:"(\u2267\u2207\u2266)\uFF89",heading:"Hooray! No pending tasks",details:"You don't have any pending tasks for now. Enjoy :)"},completed:{illustration:"(\xB4\uFF65\u03C9\uFF65`)?",heading:"Hmmm. I don't see any completed tasks",details:"It seems you have not completed any tasks so far..."}};function re({filterOption:e}){return s(N.div,{className:"todo-list-empty-state-root",animate:{scale:[1.2,.98,1],opacity:[0,1],transition:{duration:.5,type:"spring",bounce:1}},children:[a("div",{className:"todo-list-empty-state-illustration",children:f[e].illustration}),a("h2",{className:"todo-list-empty-state-heading",children:f[e].heading}),a("p",{className:"todo-list-empty-state-details",children:f[e].details})]},e)}var se="/pencil_line.mp3",de="/button_press_click_feedback.mp3",ce="/trash_crumbled_paper.mp3";const E=new Audio(se);E.volume=.3;const I=new Audio(de);I.volume=.3;const $=new Audio(ce);$.volume=.3;function ue({todoList:e,filterBy:o}){const[t,i]=c.exports.useState(void 0),{dispatch:n}=x(),l=e.filter(r=>{switch(o){case"pending":return!r.complete;case"completed":return r.complete;default:return!0}}),d=r=>{t!==void 0&&(n({type:"edit",payload:{id:t.id,todo:r}}),i(void 0))};return l.length===0?a(re,{filterOption:o}):s(K,{children:[a("ul",{className:"todo-list-root",children:l.map(r=>a(oe,{todoItem:r,onEdit:()=>i(r),onDelete:()=>{n({type:"remove",payload:r.id}),$.play(),C(`Deleted "${r.todo}"`,"info",{label:"Undo",onClick:u=>{n({type:"add",payload:{todo:r.todo,complete:r.complete}}),A(u.id)}})},onToggleCompletion:()=>{n({type:"toggleCompletion",payload:r.id}),r.complete?I.play():E.play()}},r.id))}),a(le,{todoItem:t,onRename:d,onCancel:()=>i(void 0)})]})}function pe(e,o){const t=Date.now().toString();return[v(p({},o),{id:t}),...e]}function me(e,o){return e.filter(t=>t.id!==o)}function k(e,o,t){return e.map(i=>{if(i.id===o){const n=t(i);return p(p({},i),n)}return i})}function fe(e,o){switch(o.type){case"add":const t=o.payload;return pe(e,t);case"remove":const i=o.payload;return me(e,i);case"edit":const n=o.payload,l=n.id;return k(e,l,()=>({todo:n.todo}));case"toggleCompletion":const d=o.payload;return k(e,d,r=>({complete:!r.complete}));default:return e}}const he=[{id:"1",todo:"Eat",complete:!0},{id:"2",todo:"Sleep",complete:!1},{id:"3",todo:"Repeat",complete:!1}];function be(){const[e,o]=c.exports.useReducer(fe,he),[t,i]=c.exports.useState("all");return s(L.Provider,{value:{todoItems:e,dispatch:o},children:[s("div",{className:"app",children:[a(Y,{}),a("main",{children:s(T,{children:[s("div",{className:"persistent-header",children:[a(X,{}),a(ee,{activeFilter:t,onFilterChange:n=>i(n)})]}),a(ue,{todoList:e,filterBy:t})]})})]}),a(G,{})]})}H.render(a(U.StrictMode,{children:a(be,{})}),document.getElementById("root"));