import{j as T}from"./jsx-runtime-ffb262ed.js";import{$ as G,f as F,a as N,_ as y,c as B,g,h as K,i as U,j as Y}from"./index-249b4978.js";import{r as n}from"./index-76fb7be0.js";import{$ as j,a as X,b as z,c as W,d as J}from"./index-20c503a8.js";import{$ as Q,a as S}from"./index-46d22cb5.js";import{$ as Z}from"./index-1d6df041.js";const[O,Me]=G("Tooltip",[j]),R=j(),ee="TooltipProvider",te=700,D="tooltip.open",[oe,k]=O(ee),ne=t=>{const{__scopeTooltip:o,delayDuration:e=te,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:c}=t,[s,u]=n.useState(!0),l=n.useRef(!1),p=n.useRef(0);return n.useEffect(()=>{const i=p.current;return()=>window.clearTimeout(i)},[]),n.createElement(oe,{scope:o,isOpenDelayed:s,delayDuration:e,onOpen:n.useCallback(()=>{window.clearTimeout(p.current),u(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:n.useCallback(i=>{l.current=i},[]),disableHoverableContent:a},c)},L="Tooltip",[re,P]=O(L),ae=t=>{const{__scopeTooltip:o,children:e,open:r,defaultOpen:a=!1,onOpenChange:c,disableHoverableContent:s,delayDuration:u}=t,l=k(L,t.__scopeTooltip),p=R(o),[i,d]=n.useState(null),v=F(),f=n.useRef(0),$=s??l.disableHoverableContent,x=u??l.delayDuration,b=n.useRef(!1),[h=!1,m]=Q({prop:r,defaultProp:a,onChange:I=>{I?(l.onOpen(),document.dispatchEvent(new CustomEvent(D))):l.onClose(),c==null||c(I)}}),C=n.useMemo(()=>h?b.current?"delayed-open":"instant-open":"closed",[h]),E=n.useCallback(()=>{window.clearTimeout(f.current),b.current=!1,m(!0)},[m]),_=n.useCallback(()=>{window.clearTimeout(f.current),m(!1)},[m]),A=n.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{b.current=!0,m(!0)},x)},[x,m]);return n.useEffect(()=>()=>window.clearTimeout(f.current),[]),n.createElement(X,p,n.createElement(re,{scope:o,contentId:v,open:h,stateAttribute:C,trigger:i,onTriggerChange:d,onTriggerEnter:n.useCallback(()=>{l.isOpenDelayed?A():E()},[l.isOpenDelayed,A,E]),onTriggerLeave:n.useCallback(()=>{$?_():window.clearTimeout(f.current)},[_,$]),onOpen:E,onClose:_,disableHoverableContent:$},e))},M="TooltipTrigger",ce=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=P(M,e),c=k(M,e),s=R(e),u=n.useRef(null),l=N(o,u,a.onTriggerChange),p=n.useRef(!1),i=n.useRef(!1),d=n.useCallback(()=>p.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),n.createElement(z,y({asChild:!0},s),n.createElement(B.button,y({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:l,onPointerMove:g(t.onPointerMove,v=>{v.pointerType!=="touch"&&!i.current&&!c.isPointerInTransitRef.current&&(a.onTriggerEnter(),i.current=!0)}),onPointerLeave:g(t.onPointerLeave,()=>{a.onTriggerLeave(),i.current=!1}),onPointerDown:g(t.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:g(t.onFocus,()=>{p.current||a.onOpen()}),onBlur:g(t.onBlur,a.onClose),onClick:g(t.onClick,a.onClose)})))}),V="TooltipPortal",[se,le]=O(V,{forceMount:void 0}),ie=t=>{const{__scopeTooltip:o,forceMount:e,children:r,container:a}=t,c=P(V,o);return n.createElement(se,{scope:o,forceMount:e},n.createElement(S,{present:e||c.open},n.createElement(K,{asChild:!0,container:a},r)))},w="TooltipContent",ue=n.forwardRef((t,o)=>{const e=le(w,t.__scopeTooltip),{forceMount:r=e.forceMount,side:a="top",...c}=t,s=P(w,t.__scopeTooltip);return n.createElement(S,{present:r||s.open},s.disableHoverableContent?n.createElement(q,y({side:a},c,{ref:o})):n.createElement(pe,y({side:a},c,{ref:o})))}),pe=n.forwardRef((t,o)=>{const e=P(w,t.__scopeTooltip),r=k(w,t.__scopeTooltip),a=n.useRef(null),c=N(o,a),[s,u]=n.useState(null),{trigger:l,onClose:p}=e,i=a.current,{onPointerInTransitChange:d}=r,v=n.useCallback(()=>{u(null),d(!1)},[d]),f=n.useCallback(($,x)=>{const b=$.currentTarget,h={x:$.clientX,y:$.clientY},m=be(h,b.getBoundingClientRect()),C=xe(h,m),E=me(x.getBoundingClientRect()),_=ye([...C,...E]);u(_),d(!0)},[d]);return n.useEffect(()=>()=>v(),[v]),n.useEffect(()=>{if(l&&i){const $=b=>f(b,i),x=b=>f(b,l);return l.addEventListener("pointerleave",$),i.addEventListener("pointerleave",x),()=>{l.removeEventListener("pointerleave",$),i.removeEventListener("pointerleave",x)}}},[l,i,f,v]),n.useEffect(()=>{if(s){const $=x=>{const b=x.target,h={x:x.clientX,y:x.clientY},m=(l==null?void 0:l.contains(b))||(i==null?void 0:i.contains(b)),C=!he(h,s);m?v():C&&(v(),p())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[l,i,s,p,v]),n.createElement(q,y({},t,{ref:c}))}),[de,fe]=O(L,{isInside:!1}),q=n.forwardRef((t,o)=>{const{__scopeTooltip:e,children:r,"aria-label":a,onEscapeKeyDown:c,onPointerDownOutside:s,...u}=t,l=P(w,e),p=R(e),{onClose:i}=l;return n.useEffect(()=>(document.addEventListener(D,i),()=>document.removeEventListener(D,i)),[i]),n.useEffect(()=>{if(l.trigger){const d=v=>{const f=v.target;f!=null&&f.contains(l.trigger)&&i()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,i]),n.createElement(U,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:i},n.createElement(W,y({"data-state":l.stateAttribute},p,u,{ref:o,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),n.createElement(Y,null,r),n.createElement(de,{scope:e,isInside:!0},n.createElement(Z,{id:l.contentId,role:"tooltip"},a||r))))}),$e="TooltipArrow",ve=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=R(e);return fe($e,e).isInside?null:n.createElement(J,y({},a,r,{ref:o}))});function be(t,o){const e=Math.abs(o.top-t.y),r=Math.abs(o.bottom-t.y),a=Math.abs(o.right-t.x),c=Math.abs(o.left-t.x);switch(Math.min(e,r,a,c)){case c:return"left";case a:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function xe(t,o,e=5){const r=[];switch(o){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function me(t){const{top:o,right:e,bottom:r,left:a}=t;return[{x:a,y:o},{x:e,y:o},{x:e,y:r},{x:a,y:r}]}function he(t,o){const{x:e,y:r}=t;let a=!1;for(let c=0,s=o.length-1;c<o.length;s=c++){const u=o[c].x,l=o[c].y,p=o[s].x,i=o[s].y;l>r!=i>r&&e<(p-u)*(r-l)/(i-l)+u&&(a=!a)}return a}function ye(t){const o=t.slice();return o.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),Te(o)}function Te(t){if(t.length<=1)return t.slice();const o=[];for(let r=0;r<t.length;r++){const a=t[r];for(;o.length>=2;){const c=o[o.length-1],s=o[o.length-2];if((c.x-s.x)*(a.y-s.y)>=(c.y-s.y)*(a.x-s.x))o.pop();else break}o.push(a)}o.pop();const e=[];for(let r=t.length-1;r>=0;r--){const a=t[r];for(;e.length>=2;){const c=e[e.length-1],s=e[e.length-2];if((c.x-s.x)*(a.y-s.y)>=(c.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const ge=ne,Ce=ae,Ee=ce,_e=ie,we=ue,Pe=ve;var Oe="la997z0";const H=({children:t,content:o,side:e="top",align:r="center",options:a,rootOptions:c,portalOptions:s})=>T.jsx(ge,{children:T.jsxs(Ce,{delayDuration:500,...c,children:[T.jsx(Ee,{asChild:!0,children:t}),T.jsx(_e,{...s,children:T.jsxs(we,{className:Oe,side:e,align:r,sideOffset:5,...a,children:[o,T.jsx(Pe,{height:6,width:10,fill:"var(--affine-tooltip)"})]})})]})});try{H.displayName="Tooltip",H.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},side:{defaultValue:{value:"top"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},rootOptions:{defaultValue:null,description:"",name:"rootOptions",required:!1,type:{name:'Omit<TooltipProps, "children">'}},portalOptions:{defaultValue:null,description:"",name:"portalOptions",required:!1,type:{name:"TooltipPortalProps"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:'Omit<TooltipContentProps, "side" | "align">'}}}}}catch{}export{H as T};
//# sourceMappingURL=tooltip-23e0d603.js.map
