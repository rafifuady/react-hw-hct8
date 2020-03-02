import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() { 
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
        <div className="container mx-1">

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
          
          <h5 class="">Members</h5>
          <div className="container my-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img src="https://www.theramblehotel.com/wp-content/uploads/2017/11/dummy-800x800.jpg" className="img-fluid img-thumbnail rounded-circle" alt="img"></img>
                  </div>
                  <div className="col-6">
                    <h5 className="card-title">Organizers</h5>
                    <br></br>
                    <p className="card-text">Adhy Wiranata,     4 Others</p>
                  </div>
                </div> 
              </div>
              </div> 
            </div>

          <h5 class="">Past Meetup</h5>
          
          <div className="container">
            <div class="card-deck">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">27 November 2017</h4>
                  <p class="card-text">Text</p>
                  <h6 className="card-subtitle mb-2 text-muted">139 went</h6>
                  <a name="" id="" className="btn btn-primary" href="https://github.com/rafifuady" role="button">View</a>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">27 October 2017</h4>
                  <p class="card-text">Text</p>
                  <h6 className="card-subtitle mb-2 text-muted">113 went</h6>
                  <a name="" id="" className="btn btn-primary" href="https://github.com/rafifuady" role="button">View</a>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">27 September 2017</h4>
                  <p class="card-text">Text</p>
                  <h6 className="card-subtitle mb-2 text-muted">110 went</h6>
                  <a name="" id="" className="btn btn-primary" href="https://github.com/rafifuady" role="button">View</a>
                </div>
              </div>
              
            </div>
          </div>  
              <div class="text-center card-footer text-muted my-5">
                <i class="fa fa-copyright" aria-hidden="true">Copyright Hacktiv8 2018</i>
              </div>
        </div>

      </div>
    );
  }
}

export default App;
