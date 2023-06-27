(function(r,l,f,u,e,d,h){"use strict";const{FormInput:o}=f.Forms;function g(){return u.useProxy(e.storage),React.createElement(l.ReactNative.ScrollView,null,React.createElement(o,{title:"Length for filenames",keyboardType:"numeric",placeholder:"0-9",value:e.storage.nameLength.toString(),onChange:function(t){return e.storage.nameLength=t.replace(/[^0-9]/g,"")}}),React.createElement(o,{title:"Characters to use for filenames",keyboardType:"default",placeholder:"a-z A-z 0-9",value:e.storage.nameChars.toString(),onChange:function(t){return e.storage.nameChars=t.replace(/[^a-zA-Z0-9]+$/,"")}}))}function v(t){return[...crypto.getRandomValues(new Uint8Array(t)).map(function(a){return a%e.storage.nameChars.length})].map(function(a){return e.storage.nameChars.charAt(a)}).join("")}const y=d.findByProps("uploadLocalFiles");h.before("uploadLocalFiles",y,function(t){if(!t[0])return;const{items:a}=t[0],s=parseInt(e.storage.nameLength),C=isNaN(s)?8:s;for(const n of a){const c=n.filename.lastIndexOf("."),m=c!==-1?n.filename.slice(c):"",i=v(C);n.filename=i+m,n.item&&(n.item.filename=i+m)}}),e.storage.nameLength??=8,e.storage.nameChars??="abcdefghijklmnopqrstuvwxyz";var p={settings:g};return r.default=p,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.metro.common,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.patcher);
