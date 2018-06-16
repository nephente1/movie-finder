const rc = React.createElement;

const menuItem = (props) => {
    return React.createElement('a',null,props.title);
}

const menu = () => {
    return rc('nav',null, [menuItem({title:'dupa'}),menuItem({title:'inna dupa'})]);
}

const myFirst = () =>{
    return rc('div',null,menu());
}


const reference = document.getElementById('app');

ReactDOM.render(myFirst(),reference);