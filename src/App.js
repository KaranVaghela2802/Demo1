import React from 'react';
import './App.css';

const App=()=> {
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded" // <-- Specifying the Content-Type
        })
      }
    )
      .then(response => response.json())
      .then(responseText => {
        console.log(responseText);
      })
      .catch(error => {
        console.error(error);
      });
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hiiiiiiiiii</h1>
      </header>
    </div>
  );
}

export default App;
