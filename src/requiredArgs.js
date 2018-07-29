export default function requiredArgs(rules = []) {
    return (target, name, descriptor) => {
        let run = descriptor.value;
        descriptor.value = function(...args) {
            rules.forEach((field, index) => {
                if (field !== classOf(args[index])) {
                    throw new Error(`${name} method need args in ${index} has ${field}`);
                }
            }) 
            return run.apply(this, args);
        }
        return descriptor;
    }
}