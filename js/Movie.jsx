import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';

const Wrapper = styled(Link)`
    width:32%;
    border: 0.125rem solid #333;
    border-radius: 0.25rem;
    margin-bottom: 25px;
    padding-right: 0.675rem;
    overflow:hidden;
`
const Image = styled.img`
    width:46%;
    float:left;
    margin-right:10px;
`

const Movie = props => (
    
    <Wrapper to={`/details/${props.imdbID}`}>
        <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Cover`}/>
        <div>
            <h3>{props.title}</h3>
            <h4>{props.year}</h4>
            <p>{props.description}</p>
        </div>
    </Wrapper>
    
);

Movie.propTypes = {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
};

export default Movie;