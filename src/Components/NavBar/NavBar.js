import React,{Component} from 'react';
import image from '../../bbc-logo.png';
import './NavBar.css'



class NavBar extends Component {


    render(){
        return(
            <div  >
                <div className="NavbarContainer">
                    <img src={image} width={200} className="NavbarLogo"/>
                </div>

                <div style={{backgroundColor:'#bb1919',height:'50px'}}>
                    <ul className="ListItem">
                        <li>News</li>
                        <li>Work</li>
                        <li>Sports Reel</li>
                        <li>Life</li>
                    </ul>
                </div>
            </div>
        )
    }
}



export default NavBar