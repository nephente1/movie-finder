import React from 'react';
import {string } from 'prop-types';

const DetailedMovie = (props) => (
    <div className="details">
    <header><h1>Video</h1></header>
    <section>
        <h1>{props.show.title}</h1>
        <h2>({props.show.year})</h2>
        <img src={`/public/img/posters/${props.show.poster}`} alt={`Poster for ${props.show.title}`}/>
        <p>{props.show.description}</p>
        
    </section>
    <div><iframe src={`https://www.youtube-nocookie.com/embed/${props.show.trailer}?rel=0&amp;controls=0&amp;showinfo=0`}>
        </iframe>
        </div>
    </div>
);


export default DetailedMovie;