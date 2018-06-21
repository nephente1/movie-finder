import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{

    render(){

    let inputAppear;
    if(this.props.showSearch){
        inputAppear = <input onChange={this.props.inputHandler} type="text" placeholder="Search" value={this.props.searchTerm} />
    } else{
        inputAppear = <h2><Link to="/search">Back</Link></h2>
    }

        return(
             <header>
                 <h1><Link to="/">Video search</Link></h1>
             {inputAppear}
            </header>
        
        )
    }
 
}

Header.defaultProps = {
    showSearch:false
}
export default Header;