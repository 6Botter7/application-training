class g{static async perform(t,r,a,e){await this[t.action]?.(t,r,a,e)}static async create_context(t,r,a,e){const s=a.id||t?.args?.context_id||"process_context",n=crs.binding.data.addObject(s);return a!=null&&(a.parameters=a.parameters||{},a.parameters.bId=n),crs.binding.data.addContext(n,{}),n}static async free_context(t,r,a,e){a.parameters.bId!=null&&(crs.binding.data.remove(a.parameters.bId),delete a.parameters.bId)}static async get_property(t,r,a,e){const s=t.args.property,n=await crs.binding.data.getProperty(a.parameters.bId,s);return t.args.target!=null&&await crs.process.setValue(t.args.target,n,r,a,e),n}static async set_property(t,r,a,e){const s=t.args.property,n=await crs.process.getValue(t.args.value,r,a,e);crs.binding.data.setProperty(a.parameters.bId,s,n)}static async get_data(t,r,a,e){const s=crs.binding.data._data[a.parameters.bId];t.args.target!=null&&await crs.process.setValue(t.args.target,s,r,a,e)}static async set_errors(t,r,a,e){const s=t.args.error_store||"errors",n=await crs.process.getValue(t.args.errors,r,a,e),c=[];for(let i of n)c.push({message:i});await crs.binding.data.setProperty(a.parameters.bId,s,c)}static async set_global(t,r,a,e){const s=await crs.process.getValue(t.args.property,r,a,e),n=await crs.process.getValue(t.args.value,r,a,e);crs.binding.data.setProperty(crs.binding.$globals,s,n)}static async set_globals(t,r,a,e){const s=await crs.process.getValue(t.args.values,r,a,e),n=Object.keys(s);for(let c of n)crs.binding.data.setProperty(crs.binding.$globals,c,s[c])}static async get_global(t,r,a,e){const s=await crs.process.getValue(t.args.property,r,a,e),n=crs.binding.data.getProperty(crs.binding.$globals,s);return t.args.target!=null&&await crs.process.setValue(t.args.target,n,r,a,e),n}static async get_globals(t,r,a,e){const s=await crs.process.getValue(t.args.values,r,a,e),n=Object.keys(s);for(let c of n){const i=crs.binding.data.getProperty(crs.binding.$globals,c);s[c]=i}return t.args.target!=null&&await crs.process.setValue(t.args.target,value,r,a,e),s}}crs.intent.binding=g;export{g as BindingActions};
