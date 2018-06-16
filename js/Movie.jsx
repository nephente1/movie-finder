import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const Movie = (props) => (
    <Wrapper>
        <Image src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Cover`}/>
        <div>
            <h3>{props.show.title}</h3>
            <h4>{props.show.year}</h4>
            <p>{props.show.description}</p>
        </div>
    </Wrapper>
    
);

export default Movie;