import React from 'react';
import Header from './components/header'
// import Headline from './components/headline'
import Login from './components/login'
import './app.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      {/* <section className="main">
        <Headline header="Posts" desc="Click the button to render posts."/>
      </section> */}
    </div>
  );
}

export default App;
