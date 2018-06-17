import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class DetailedMovie extends React.Component{

    componentDidMount(){
        axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
            .then(response => {
                console.log(response.data);
                this.setState(response.data);
            });
    }
    render(){
     return(
        <div className="details">
        <header><h1>Video</h1>
            <Link to="/search">powrot</Link>
        </header>
    <section>
        <h1>{this.props.show.title}</h1>
        <h2>({this.props.show.year})</h2>
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