const concat = require('mississippi').concat;
const readFile = require('fs').readFile;
const yargs = require('yargs');
const argv = yargs
    .usage('json-to-markdown [options]')
    .help('h')
    .alias('h', 'help')
    .demand('f')
    .nargs('f', 1)
    .describe('f', 'json file to translate')
    .argv;
const file = argv.f;
const writeFile = require('fs').writeFile;

var Stack = require('stackjs');
var stack = new Stack();
var content = [];

function toMarkdown(json) {
    var obj = JSON.parse(json);

    content.push("### Body");
    content.push("");
    content.push("field name | description | type | sample");
    content.push("---|---|---|---");
    describe("g", obj, 0);

    while(!stack.isEmpty()) {
        var item = stack.pop();
        content.push("### " + item[0]);
        content.push("");
        content.push("field name | description | type | sample");
        content.push("---|---|---|---");
        describe('s', item[1], 10);
    }

    writeFile(file + ".md", content.join("\r\n"), (err) => {
        if (err) throw err;
        console.log("describe successfully!");
    });
    
}

function describe(key, jsonObject, level) {
    if (jsonObject instanceof Object) {
        //array
        if (typeof jsonObject.length == "number") {
            content.push(key + "|[" + key + "](#" + key + ")|array");
            for(var i=0;i<jsonObject.length;i++) stack.push([key, jsonObject[i]]);
            
        } else {
            for(var sub in jsonObject) describe(sub, jsonObject[sub], level + 1);
        }
    } else {
        content.push(key + "||" + typeof(jsonObject) + "|" + jsonObject)
    }
}

if (file === '-') {
    process.stdin.pipe(contcat(toMarkdown));
} else {
    readFile(file, (err, dataBuffer) => {
        if (err) throw err;
        else toMarkdown(dataBuffer.toString());
    });
}