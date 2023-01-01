const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const input = {
    language: 'Solidity',
    sources: {
      'Campaign.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };
// const output =  solc.compile(source, 1).contracts;
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Campaign.sol'
  ]

fs.ensureDirSync(buildPath);

for (let contract in output) {
    // console.log(output[contract]);
    fs.outputFileSync(
        path.resolve(buildPath, contract + '.json'),
        JSON.stringify(output[contract]));
}