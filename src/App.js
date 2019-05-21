import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const helloWorld = 'Welcome to the Road to learn React';
  let name = "Dago Alexander";
  let user = {
    name: "Eliana",
    lastname: "Ramírez"
  }
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
      <h3>You must improve this app along the course. Yes, you, {name}</h3>
      <h3>We know who is your mother. We don't want your mother, {user.name} {user.lastname}, has an accident.</h3>
      {list.map(item => {
        return (
          <div key={item.objectID}>
            <span> <a href={item.url}>{item.title}</a> </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
