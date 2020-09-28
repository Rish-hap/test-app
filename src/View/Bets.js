import React from "react"
import getWeb3 from '../utils.js';
import contract_abi from "../abi.js"
import Web3 from "web3"
const contractDeployedNetwork = "Ropsten"


const Bets  = () => {

    const [metamaskContextValue, setMetamaskContextValue] = React.useState({})
    const [flag, set_flag] = React.useState(false)

    const resetApp = (note) => {
        window.alert(note)
        window.location.reload()
    }
    const loadBlockChain = async () => {
        const error =
          typeof window !== 'undefined' && Boolean(window.ethereum || window.web3);
    
        error ? console.log('NO ERROR') : resetApp('NOT_INSTALLED');
    
        try {
          window.web3 = new window.Web3(window.ethereum);
          await window.ethereum.enable();
          const web3 = await new Web3(window.web3.currentProvider);
          const network = await web3.eth.net.getNetworkType();
          
          window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            console.log("Account Change Event")
            window.location.reload()
          })
          
          window.ethereum.on('networkChanged', function (networkId) {
            // Time to reload your interface with the new networkId
            console.log("Network Change Event")
            window.location.reload()
          })


          if (network === contractDeployedNetwork.toLowerCase()) {
            console.log('web3: ', web3);
            const accounts = await web3.eth.getAccounts();
            const bet_contract = new web3.eth.Contract(
                contract_abi,
              '0x97b6ce9801fc37b823a1abf94f92305ba13a5787',
            )
    
            setMetamaskContextValue({
              ethereumAddress: accounts[0],
              contract: bet_contract,
              web3Instance: web3,
            });

            set_flag(true)
          } else {
            set_flag(false)
            resetApp(
              `Please switch your metamask network to ${contractDeployedNetwork.toUpperCase()}`,
            );
          }
        } catch (err) {
          console.log('error catch: ', err);
          set_flag(false)
          resetApp(err.message)
        }
      };

React.useEffect(  ()=> {
    loadBlockChain()
}, [])

const toss_bet = async (val) => {
    if(!!flag){
        const data = toss_bet_fun(val)
        console.log(data,"daata")
    }else{
       window.alert('Please connect to metamask account to continue')
    }
}

 const toss_bet_fun= async (val) => {
    try {
      const result = await metamaskContextValue.contract.methods.predictTossResults(val).send({from:metamaskContextValue.ethereumAddress, gas:140000})
        .catch((e) => {
          window.alert(e.message)
        })
      console.log(result, "");
      if(!!result){
            window.alert("Bet succesfully placed")
      }
      return result;
    } catch (err) {
      console.log(" ", err);
      window.alert(err.message)
    }
  }
const match_bet = (val) => {
    if(!!flag){
        const data = match_bet_fun(val)
        console.log(data,"daata")
    }else{
       window.alert('Please connect to metamask account to continue')
    }
}
const match_bet_fun = async (val) => {
    try {
        const result = await metamaskContextValue.contract.methods.predictMatchResults(val).send({from:metamaskContextValue.ethereumAddress, gas:140000}).then(()=>{
            window.alert("Bet succesfully placed")
        })
          .catch((e) => {
            window.alert(e.message)
          })
        console.log(result, "");
        if(!!result){
              window.alert("Bet succesfully placed")
        }
        return result;
      } catch (err) {
        console.log(" ", err);
        window.alert(err.message)
      }
}
    return (<React.Fragment>
               <section className="pricing-area section-padding40 fix">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <h2>Available Bets</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="properties__card">
                            <div className="about-icon">
                                 <span className="icon-text"> TOSS </span>
                                {/* <img src="assets/img/hero/toss.jpg" alt=""/> */}
                            </div>
                            <div className="properties__caption">
                                <span className="month">Who will win the toss</span>
                                <p className="mb-25">14:21 remaining</p>
                                <div className="flex-parent">
                                    <span className="flex-child">
                                    <a onClick={()=>toss_bet(1)} className="border-btn border-btn2">KKR</a>
                                    </span>
                                    <span className="flex-child">
                                    <a  onClick={()=>toss_bet(2)} className="border-btn border-btn2">RR</a>
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="properties__card">
                            <div className="about-icon">
                                 <span className="icon-text"> Match </span>
                                {/* <img src="assets/img/hero/toss.jpg" alt=""/> */}
                            </div>
                            <div class="properties__caption">
                                <span class="month">Who will win the Match</span>
                                <p class="mb-25">14:21 remaining</p>
                                <div className="flex-parent">
                                    <span className="flex-child">
                                    <a onClick={()=>match_bet(1)} className="border-btn border-btn2">KKR</a>
                                    </span>
                                    <span className="flex-child">
                                    <a  onClick={()=>match_bet(2)} className="border-btn border-btn2">RR</a>
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
               
             </div>
        </div>
    </section>
    </React.Fragment>)
}

export default  Bets