import React,{Component} from 'react';
import './InfoCard.css';



class InfoCard extends Component{


    render(){
        return(
            <div className="InfoCard">
                <div style={{backgroundColor:this.props.color,height:'50px',margin:0,borderRadius:'5px'}}>
                    <h2 style={{color:'white',textAlign:'center'}}>{this.props.city}</h2>
                </div>
                <div style={{padding:'10px'}}>
                     <p><span style={{fontWeight:'bold'}}>State:</span>{' '+this.props.states}</p>
                  
                     <p><span style={{fontWeight:'bold'}}>Air Quality:</span>{' '+this.props.airQuality}</p>
                     <p><span style={{fontWeight:'bold'}}>Cigarette Equivalent:</span>{' '+this.props.cigaretteEquivalent}</p>
                </div>
            </div>
        )
    }
}



export default InfoCard