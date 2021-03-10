import React,{Component} from 'react';
import './CityPicker.css'
import { withTranslation } from 'react-i18next';



class CityPicker extends Component{
    render(){
        const { t } = this.props;
        return(
            <div style={{marginTop:'250px',width:'200px'}}>
                <h4>{t('modalTitle4')}</h4>
                <select className="Inp" onChange={e => this.props.changeCity(e)} className='Inp'>
                    <option value=''>------</option>
                    {this.props.cities.map(city=>(<option value={city.state_code}>{city.city_name}</option>)).sort()}
                </select>
            </div>
        )
    }
}


export default withTranslation()(CityPicker)