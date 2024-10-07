const parseArgs = () => {
const args = process.argv.slice(2);
const parsedArgs = {};

for (let i = 0; i < args.length; i += 2) {
    const argName = args[i].replace('--','')
    const argValue = args[i+1]
    parseArgs[argName]=argValue
}

const result = Object.entries(parseArgs)
.map(([key,value])=>`${key} is ${value}`)
.join(', ')
console.log(result);
};

parseArgs();