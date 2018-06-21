import React from 'react';
import {shallow, mount} from 'enzyme';
import Landing from '../Landing';
import data from '../../data.json';
import {render} from 'react-testing-library';
import Router, {Link} from 'react-router-dom';
import Movie from "../Movie";

//asercja / czyli jedno wystąpienie
//pierwszy argumen - informacja sie pojawi kiedy sie sypnie
test('Landing should be rendered', ()=>{
    //Arrange - zbieramy dane
    //zamiast shallow może być render
const component = shallow(<Landing shows={data.shows} />);
    //Act - wykonujemy operacje

    //Assert - sprawdzamy warunki
    expect(component).toMatchSnapshot();
});

test('Landing should show all shows from data', ()=>{
    //Arrange
    const component = shallow(<Landing shows={data.shows} />);
    const dataCounter = data.shows.length;
    //Act

    //Assert
    expect(component.find(Movie).length).toEqual(dataCounter);
})

test('Search should find movie', ()=>{
    //Arrange
    const component = mount(<Landing shows={data.shows} />);
    const phrase ='black';
    
    //Act
    component.find('input').simulate('change', { target: {value: phrase} });

    //Assert
    expect(component.find(Movie).length).toEqual(2);

})

test('Search should find 1 movie bacause of SearchTerm', () => {
    //Arrange
    const component = mount(<Landing shows={data.shows}/>);
    const phrase = 'game';

    //Act
    component.find('input').simulate('change', { target: { value: phrase } });

    //Assert
    expect(component.find(Movie).length).toEqual(1);
});

test('Landing should be rendered deeply', () => {
    //Arrange - zbieramy dane
    const component = renderer.create(
        <MemoryRouter>
            <Landing shows={data.shows}/>
        </MemoryRouter>
    );

    //Act - wykonujemy operacje

    //Assert - sprawdzamy warunki
    expect(component).toMatchSnapshot();
});

//metoda do kilku testów na raz
describe('Search', () ={
    it('Search should find movie', ()=>{

    })
    it('test', ()=>{
        
    })
    it('test', ()=>{
        
    })
})
