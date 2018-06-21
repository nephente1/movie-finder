import React from 'react';
import Movie from './Movie';
// import data from '../data.json';
import Header from './header';

class Landing extends React.Component{
    
    state = {  
        searchTerm: ""
    }

    inputHandler = (event)=> {
        console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
    return(
        <div className="search">
        {/* //<Header showSearch inputHandler={this.inputHandler} /> */}
        <input onChange={this.inputHandler} type="text" placeholder="Search" value={this.searchTerm}/>
        <div>
        {this.props.shows.filter(item => `${item.title} ${item.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase())>= 0).map(el => <Movie {...el} key={el.imdbID} />)}
        </div>
    </div>
    )
  }
}

const mapStateToProps = state =>({
    searchTeram: state.searchTerm
})

export default Landing;