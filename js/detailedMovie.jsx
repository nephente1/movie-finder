import React from 'react';
import {string } from 'prop-types';

const DetailedMovie = (shows, props) => (
    <div className="details">
        <pre><code>{JSON.stringify(shows,null,4)}</code></pre>
    </div>
);

DetailedMovie.propType = {
    poster:string.isRequired,
    title:string.isRequired,
    year:string.isRequired,
    description:string.isRequired
};

export default DetailedMovie;