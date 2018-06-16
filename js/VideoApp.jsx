import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
render(){
    return <div>
        
        <h1>Hello world!</h1>
        <button>Klik</button>

    </div>
    }
}

// const App = () => (
//     <div>Hello</div>
// );

render(<App />, document.getElementById('app'));