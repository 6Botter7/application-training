import{ClassListBase as c}from"./classlist-base.js";class i extends c{get providerKey(){return"classlist.if"}async parse(s,l){const e=n(s.value);await super.parse(s,l,e,async r=>await crs.binding.expression.ifFactory(r))}}function n(t){const e=t.split("?")[1].replaceAll("[","").replaceAll("]",":").replaceAll(",",":").replaceAll("'","").split(":").map(a=>a.trim()).filter(a=>a.length>0),r=new Set(e);return Array.from(r)}export{i as default};