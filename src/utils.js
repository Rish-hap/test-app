import Web3 from 'web3'
import contract_abi from "./abi"
let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion before loading web3, to be sure it's
  // already injected
  window.addEventListener('load', function() {
    var results
    var web3 = window.web3
    // Checking if Web3 has been injected by the browser MetaMask
    
    if (typeof web3 !== 'undefined') {
      // Use MetaMask's provider.
      web3 = new Web3(web3.currentProvider)
      const bet_contract = new web3.eth.Contract(contract_abi, "0x97b6CE9801fC37B823a1abf94F92305BA13A5787")
results = {
        web3: web3,
        contract:bet_contract
      }
      console.log('Injected web3 detected.');
      window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        console.log("Account Change Event")
      })
      
      window.ethereum.on('networkChanged', function (networkId) {
        // Time to reload your interface with the new networkId
        console.log("Network Change Event")
      })
      resolve(results)
    } else {
      // If no web3 is detected, then the local web3 provider is loaded.
      results = {
        web3: false
      }
      console.log('No web3 instance injected, using Local web3.');
      resolve(results)
    }
  })
})
export default getWeb3