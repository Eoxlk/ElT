(function(s,g,h,p,e,c,i,v){"use strict";const{FormInput:m}=h.Forms;function y(){return p.useProxy(e.storage),React.createElement(g.ReactNative.ScrollView,null,React.createElement(m,{title:"Length for filenames",keyboardType:"numeric",placeholder:"0-9",value:e.storage.nameLength.toString(),onChange:function(t){return e.storage.nameLength=t.replace(/[^0-9]/g,"")}}),React.createElement(m,{title:"Characters to use for filenames",keyboardType:"default",placeholder:"a-z A-z 0-9",value:e.storage.nameChars.toString(),onChange:function(t){return e.storage.nameChars=t.replace(/[^a-zA-Z0-9]+$/,"")}}))}function C(t){return[...crypto.getRandomValues(new Uint8Array(t)).map(function(n){return n%e.storage.nameChars.length})].map(function(n){return e.storage.nameChars.charAt(n)}).join("")}const L=c.findByProps("uploadLocalFiles");i.before("uploadLocalFiles",L,function(t){if(!t[0])return;const{items:n}=t[0],a=parseInt(e.storage.nameLength),o=isNaN(a)?8:a;for(const r of n){const l=r.filename.lastIndexOf("."),u=l!==-1?r.filename.slice(l):"",d=C(o);r.filename=d+u,r.item&&(r.item.filename=d+u)}}),e.storage.nameLength??=8,e.storage.nameChars??="abcdefghijklmnopqrstuvwxyz";const R=c.findByName("ChatInput");let f;var b={settings:y,onLoad(){f=i.after("render",R.prototype,function(t,n){const a=v.findInReactTree(n,function(o){return"CanSendVoiceMessage"in o.props&&o.props.actions});a&&(a.props.CanSendVoiceMessage=!1)})},onUnload:f};return s.default=b,Object.defineProperty(s,"__esModule",{value:!0}),s})({},vendetta.metro.common,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.utils);
