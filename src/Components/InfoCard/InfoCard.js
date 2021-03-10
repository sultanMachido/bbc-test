import React,{Component} from 'react';
import './InfoCard.css';
import { withTranslation } from 'react-i18next';


class InfoCard extends Component{
    

    

    render(){
        const { t } = this.props;
        return(
            <div className="InfoCard">
                <div style={{backgroundColor:this.props.color,height:'50px',margin:0,borderRadius:'5px'}}>
                    <h2 style={{color:'white',textAlign:'center'}}>{this.props.city}</h2>
                </div>
                <div style={{padding:'10px'}}>
                     <p><span style={{fontWeight:'bold'}}>{t('modalTitle1')}:</span>{' '+this.props.states}</p>
                  
                     <p><span style={{fontWeight:'bold'}}>{t('modalTitle2')}:</span>{' '+this.props.airQuality}</p>
                     <p><span style={{fontWeight:'bold'}}>{t('modalTitle3')}:</span>{' '+this.props.cigaretteEquivalent}</p>
                </div>
            </div>
        )
    }
}



export default withTranslation()(InfoCard)