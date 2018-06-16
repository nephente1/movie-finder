import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => (
    <div className="landing">
    <input type="text" placeholder="Search movie"/>
    <Link to="/search">Or browse our library</Link>
    </div>
)

export default Homepage;