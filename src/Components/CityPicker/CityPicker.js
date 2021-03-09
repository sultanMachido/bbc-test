import React,{Component} from 'react';
import './CityPicker.css'



class CityPicker extends Component{
    render(){
        return(
            <div style={{marginTop:'250px',width:'200px'}}>
                <h4>Select City</h4>
                <select className="Inp" onChange={e => this.props.changeCity(e)} className='Inp'>
                    <option value=''>------</option>
                    {this.props.cities.map(city=>(<option value={city.state_code}>{city.city_name}</option>)).sort()}
                </select>
            </div>
        )
    }
}


export default CityPicker