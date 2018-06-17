import React from 'react';
import {Link} from 'react-router-dom';
import Spinner from './spinner';
import axios from 'axios';
import Header from './header';


class DetailedMovie extends React.Component{

    state = {
        rate: ''
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    rate: response.data.rating
                })
            });
    }
    render(){
        let loading;
        if(this.state.rate !== ""){
            loading = <h3>{this.state.rate}</h3>
        } else {
            loading = <Spinner/>
        }

     return(
        <div className="details">
        <Header />
    <section>
        <h1>{this.props.show.title}</h1>
        <h2>({this.props.show.year})</h2>
        {loading}
        <img src={`/public/img/posters/${this.props.show.poster}`} alt={`Poster for ${this.props.show.title}`}/>
        <p>{this.props.show.description}</p>
        
    </section>
    <div><iframe src={`https://www.youtube-nocookie.com/embed/${this.props.show.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}></iframe>
        </div>
    </div>
);    

}
}
    


export default DetailedMovie;