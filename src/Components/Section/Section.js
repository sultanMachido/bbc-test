import React,{Component} from 'react';




class Section extends Component {


    render(){
        return(
            <div style={this.props.styles||null}>
                 {this.props.children}
            </div>
        )
    }
}



export default Section