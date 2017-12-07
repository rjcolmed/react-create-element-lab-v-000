import React from 'react';
import ReactDOM from 'react-dom';

const header = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const liOne = React.createElement('li', {}, 'JavaScript');
const liTwo = React.createElement('li', {}, 'React');
const liThree = React.createElement('li', {}, 'Movies');
const liFour = React.createElement('li', {}, 'Ice cream');
const list = React.createElement('ul', { className: 'my-interests' }, [liOne, liTwo, liThree, liFour]);
const meInReact = React.createElement('div', { className: 'me' }, [header, paragraph, list]);


// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

