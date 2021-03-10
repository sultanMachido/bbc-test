import React,{Component} from 'react';




class ColorLegend extends Component {


    render(){
        return(
            <div style={{display:'flex',width:'100%',height:'300px'}} >
               <svg width="400" height="150">
                  <circle cx="10" cy="10" r="10" fill=""  />
                  <text x="20" y="15" fill="black">not selected/no data available</text>
                  <circle cx="10" cy="30" r="10" fill="#A8D5E2"  />
                  <text x="20" y="35" fill="black">Rajasthan</text>
                  <circle cx="10" cy="50" r="10" fill="#F9A620"  />
                  <text x="20" y="55" fill="black">Maharashtra</text>
                  <circle cx="10" cy="70" r="10" fill="#FFD449"  />
                  <text x="20" y="75" fill="black">Uttar Pradesh</text>
                  <circle cx="10" cy="90" r="10" fill="#548C2F"  />
                  <text x="20" y="95" fill="black">Andhra Pradesh</text>
                  <circle cx="10" cy="110" r="10" fill="#104911"  />
                  <text x="20" y="115" fill="black">Punjab</text>

                  <circle cx="280" cy="10" r="10" fill="#ED6A5A"  />
                  <text x="290" y="15" fill="black">Gujarat</text>
                  <circle cx="280" cy="30" r="10" fill="#F4F1BB"  />
                  <text x="290" y="35" fill="black">Delhi</text>
                  <circle cx="280" cy="50" r="10" fill="#9BC1BC"  />
                  <text x="290" y="55" fill="black">Haryana</text>
                  <circle cx="280" cy="70" r="10" fill="#5CA4A9"  />
                  <text x="290" y="75" fill="black">Bihar</text>
                  <circle cx="280" cy="90" r="10" fill="#E6EBE0"  />
                  <text x="290" y="95" fill="black">Tamil Nadu</text>
                  <circle cx="280" cy="110" r="10" fill="#B0FE76"  />
                  <text x="290" y="115" fill="black">Karnataka</text>
                  <circle cx="280" cy="130" r="10" fill="#8FBB99"  />
                  <text x="290" y="135" fill="black">Kerala</text>
                 
               </svg> 

             
                 
            </div>
        )
    }
}



export default ColorLegend