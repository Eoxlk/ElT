(function(f,l,a){"use strict";const o="abcdefghijklmnopqrstuvwxyz";function m(n){return[...crypto.getRandomValues(new Uint8Array(n)).map(function(e){return e%o.length})].map(function(e){return o.charAt(e)}).join("")}const u=f.findByProps("uploadLocalFiles");a.storage.nameLength??=8,l.before("uploadLocalFiles",u,function(n){const{fileItems:e}=n[0];if(!e)return;const i=parseInt(a.storage.nameLength),d=isNaN(i)?8:i;for(const t of e){const r=t.filename.lastIndexOf("."),c=r!==-1?t.filename.slice(r):"",s=m(d);t.filename=s+c,t.item&&(t.item.filename=s+c)}})})(vendetta.metro,vendetta.patcher,vendetta.plugin);