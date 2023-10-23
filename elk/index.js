(function(o,h,p,g,e,s,i,y){"use strict";const{FormInput:f}=p.Forms;function v(){return g.useProxy(e.storage),React.createElement(h.ReactNative.ScrollView,null,React.createElement(f,{title:"Length for filenames",keyboardType:"numeric",placeholder:"0-9",value:e.storage.nameLength.toString(),onChange:function(t){return e.storage.nameLength=t.replace(/[^0-9]/g,"")}}),React.createElement(f,{title:"Characters to use for filenames",keyboardType:"default",placeholder:"a-z A-z 0-9",value:e.storage.nameChars.toString(),onChange:function(t){return e.storage.nameChars=t.replace(/[^a-zA-Z0-9]+$/,"")}}))}function C(t){return[...crypto.getRandomValues(new Uint8Array(t)).map(function(n){return n%e.storage.nameChars.length})].map(function(n){return e.storage.nameChars.charAt(n)}).join("")}const L=s.findByProps("uploadLocalFiles");i.before("uploadLocalFiles",L,function(t){if(!t[0])return;const{items:n}=t[0],a=parseInt(e.storage.nameLength),c=isNaN(a)?8:a;for(const r of n){const m=r.filename.lastIndexOf("."),u=m!==-1?r.filename.slice(m):"",d=C(c);r.filename=d+u,r.item&&(r.item.filename=d+u)}}),e.storage.nameLength??=8,e.storage.nameChars??="abcdefghijklmnopqrstuvwxyz",s.findByName("ChatInput");const I=s.findByProps("ChatInput");let l;var b={settings:v,onLoad(){l=i.after(I.ChatInput.prototype,"render",function(t,n){const a=y.findInReactTree(n,function(c){return typeof c.props?.canSendVoiceMessage=="boolean"});a&&(a.props.canSendVoiceMessage=!1)})},onUnload:l};return o.default=b,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro.common,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.utils);
