import React from 'react';
import NavigationBar from "./molecules/NavigationBar";
import Card from "./molecules/Card";
import CardText from "./molecules/Card/CardText";
import Content from "./atom/Content";
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() { 
    return (
      <div className = "App">
        <NavigationBar />
        <div className="container mx-1">
          <div className="container my-3">
            <Card  /> 
          </div>

          <Content className="h5" value ="NEXT MEETUP" />
          
          <div className="container my-3">
            <CardText /> 
          </div>

          <Content className="h5" value ="About Meetup" />
          <Content className="p container" value="Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area" />
          <Content className="p container" value="Twitter: JakartaJS and we use the hashtag #jakartajs" />
          
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
