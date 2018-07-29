function requiredSelfFields(rules = {}) {
    /**
     * eg: { table: 'string' }
     * TODO 
     * eg: 
     * { 
     *      table: { 
     *         isRequired: true, 
     *         type: 'string'
     *       },
     *      identitytField: {
     *          type: 'string',
     *          default: 'id'
     *      }
     * }
     */ 
    return (target, name, descriptor) => {
        let run = descriptor.value;
        descriptor.value = function(...args) {
            Object.keys(rules).forEach(field => {
                if (rules[field] !== classOf(this[field])) {
                    throw new Error(`${name} method need self has ${field}`);
                }
            }) 
            return run.apply(this, args);
        }
        return descriptor;
    }
}