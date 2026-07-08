const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("script.js", "utf8");
const match = source.match(/const menuData = ([\s\S]*?\n\];)/);

if (!match) {
  throw new Error("Could not find menuData in script.js");
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(`menuData = ${match[1]}`, sandbox);

const missing = [];
let linked = 0;

for (const section of sandbox.menuData) {
  for (const item of section.items) {
    if (!item.image) continue;
    linked += 1;
    if (!fs.existsSync(item.image)) {
      missing.push(`${item.name}: ${item.image}`);
    }
  }
}

console.log(`linked images: ${linked}`);
if (missing.length) {
  console.log("missing images:");
  for (const item of missing) console.log(item);
  process.exitCode = 1;
}
