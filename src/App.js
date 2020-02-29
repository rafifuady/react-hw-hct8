import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">
      <nav className="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="nav-item col-4">
          <a className="navbar-brand active" href="https://github.com/rafifuady">QTEMU</a>
        </li>
        <li className="nav-item col-5">
          <a className="navbar-text" href="https://github.com/rafifuady">Create Meetup</a>
        </li>
        <li className="nav-item col-3">
          <a className="navbar-text" href="https://github.com/rafifuady">Explore</a>
        </li>
      </ul>
      </nav>
      
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <img src="https://dummyimage.com/lrgrec" className="img-fluid" alt="img"></img>
              </div>
              <div className="col-6">
                <h5 className="card-title">Hacktiv8 Meetup</h5>
            <h6 className="card-subtitle mb-2 text-muted">Jakarta, Indonesia</h6>
            <p className="card-text">Member 1078</p>
            <a name="" id="" className="btn btn-primary" href="https://github.com/rafifuady" role="button">Join Us</a>
              </div>
            </div> 
          </div>
        </div> 
      </div>

      <h5 class="">NEXT MEETUP</h5>
      
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
              <h5 className="card-title">Hacktiv8 Meetup</h5>
              <p className="card-text">Hello, Havascript and Node.js Ninjas!</p>
              <p className="card-text">Get Ready for our monthly meetup JakartaJS! This is will be our fifth meetup of 2018! 
              The meet up format will contain some short stories and technical talks. 
              If you have a short announcement you'd like to share with the audience, 
              you may do so during open mic announcement</p>
              ----
              <br></br>
              See You there
              <br></br>
              Best, Hengki, Giovanni, Sofian, Riza, 
              Agung The JakartaJS Organizers

          </div>
        </div> 
      </div>

      <h5 class="">About Meetup</h5>
      <p className="container">Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area</p>
      <p className="container">Twitter: JakartaJS and we use the hashtag #jakartajs</p>

    </div>
    



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
