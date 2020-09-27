import React from "react"
import getWeb3 from '../utils.js';
import contract_abi from "../abi.js"
import web3 from "web3"


const Bets  = () => {
    const [state, set_state] = React.useState({
            web3 : '',
            address: '',
            enable:false
    })

    const [contract, set_contract] = React.useState(false)

    const enable = async () => {
        try {
            await window.ethereum.enable();
            console.log(state,"state in enable")
          
            // set_contract(bet_contract)
            // set_state({...state, enable:true})
        } catch (error) {
            console.log(error)
            window.alert(error.message)
        }
    }
React.useEffect(  ()=> {
    getWeb3.then(  async ( results )=> {
        console.log(results,"results")
        /*After getting web3, we save the informations of the web3 user by
        editing the state variables of the component */
        results.web3.eth.getAccounts( async (error,acc) => {
          //this.setState is used to edit the state variables
         
          set_state({
            address: acc[0],
            web3: results.web3,
            contract:results.contract
          })
        //   enable()
        });
      }).catch( () => {
        //If no web3 provider was found, log it in the console
        console.log('Error finding web3.')
      })
}, [])

const toss_bet = async (val) => {
    const data = toss_bet_fun(val)
    console.log(data,"data")
    if(data){

    }else{

    }
}

 const toss_bet_fun= async (val) => {
    try {
      const result = await state.contract.methods.predictTossResults(val).call()
        .catch((e) => {
          window.alert(e.message)
        })
      console.log(result, "");
      return result;
    } catch (err) {
      console.log(" ", err);
      window.alert(err.message)
    }
  }
const match_bet = (val) => {
    state.contract.methods.predictMatchResults().call(val);
}
console.log("contract",contract)
console.log("state", state)
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