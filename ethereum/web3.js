import Web3 from "web3";
 
let web3;
let accounts;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/39b80fc42546415da1cea587fe90c993"
  );
  web3 = new Web3(provider);
  accounts = web3.eth.getAccounts();
}

 
export default web3;