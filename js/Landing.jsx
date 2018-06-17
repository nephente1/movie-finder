import React from 'react';
import Movie from './Movie';
// import data from '../data.json';

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
        <header><h1>Video search</h1>
        <input onChange={this.inputHandler} type="text" placeholder="Search" value={this.state.searchTerm} />
        </header>
        <div>

        {this.props.shows.filter(item => `${item.title} ${item.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase())>= 0).map(el => <Movie {...el} key={el.imdbID} />)}
        </div>
    </div>
    )
  }
}

export default Landing;