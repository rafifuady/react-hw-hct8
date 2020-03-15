import React from 'react';
// import NavigationBar from "./molecules/NavigationBar";
// import Card from "./molecules/Card";
import CardText from "./molecules/Card/CardText";
import Content from "./atom/Content";
// import logo from './logo.svg';
import './App.css';
import { Navbar, NavLink, Nav, Card, Container, Row, Col } from 'react-bootstrap';
import Button from './atom/Button';

class App extends React.Component {
  render() { 
    return (
      <div className = "App">

        {/* Navigation Bar Section */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">QTEMU</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink href="">Create Meetup</NavLink>
            <NavLink href="">Explore</NavLink>
          </Nav>
        </Navbar>
        {/* Navigation Bar Section */}
        <br />
        {/* <NavigationBar /> oldNavBar */}

        {/* Card Hacktiv8 Meetup Join Us Section */}
        <div className="container mx-1">
          <div className="container my-3">
          <Card>
              <card-body>
                <Row>
                  <Col xs="3">
                    <Card.Img style={{padding: 10, height: 150, width: 150}} variant="left" src="https://dummyimage.com/lrgrec" />
                  </Col>
                  <Col xs="6">
                    <Card.Title>Hacktiv8 Meetup</Card.Title>
                    <Card.Subtitle><p className="text-muted">Jakarta, Indonesia</p></Card.Subtitle>
                    <Card.Text>Member 1078</Card.Text>                  
                    <Card.Link href="">Join Us</Card.Link>
                  </Col>
                </Row>
              </card-body>
            <Card.Body>
            </Card.Body>
            </Card>
          </div>
        </div>
        <Container>
          <Row>
            
          </Row>  
        </Container>

        <div className="container mx-1">
          <div className="container my-3">
            <Card  
              srcImg="https://dummyimage.com/lrgrec"
              classImg="img-fluid"
              valTitle="Hacktiv8 Meetup"
              valSubtitle="Jakarta, Indonesia"
              valBody="Member 1078"
              valBtn="Join Us"
              hrefBtn="http://www.google.com"
              classBtn="btn btn-primary"  
            /> 
          </div>

          <Content className="h5" value ="NEXT MEETUP" />
          
          <div className="container my-3">
            <CardText
              valTitle="Hacktiv8 Meetup"
              valGreet="Hello, Havascript and Node.js Ninjas!"
              valBody="Get Ready for our monthly meetup JakartaJS! This is will be our fifth meetup of 2018! 
                  The meet up format will contain some short stories and technical talks. 
                  If you have a short announcement you'd like to share with the audience, 
                  you may do so during open mic announcement"
              valFooter="See You there"
              valSign="Best, Hengki, Giovanni, Sofian, Riza, 
              Agung The JakartaJS Organizers"
              /> 
          </div>

          <Content className="h5" value ="About Meetup" />
          <Content className="p container" value="Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area" />
          <Content className="p container" value="Twitter: JakartaJS and we use the hashtag #jakartajs" />
          
          <Content className="h5" value ="Members" />

          <div className="container my-3">
            <Card 
              srcImg="https://www.theramblehotel.com/wp-content/uploads/2017/11/dummy-800x800.jpg"
              classImg="img-fluid img-thumbnail rounded-circle"
              valTitle="Organizers"
              valBody="Adhy Wiranata,     4 Others"              
            />
            
          </div>

          <Content className="h5" value ="Past Meetup" />
          
          <div className="container">
            <div class="card-deck">
              <Card 
                srcImg=""
                classImg="img-fluid"
                valTitle="Hacktiv8 Meetup"
                valSubtitle="Jakarta, Indonesia"
                valBody="Member 1078"
                valBtn="Join Us"
                hrefBtn="http://www.google.com"
                classBtn="btn btn-primary"
              />

              <Card 
                srcImg=""
                classImg="img-fluid"
                valTitle="Hacktiv8 Meetup"
                valSubtitle="Jakarta, Indonesia"
                valBody="Member 1078"
                valBtn="Join Us"
                hrefBtn="http://www.google.com"
                classBtn="btn btn-primary"
              />

              <Card 
                srcImg=""
                classImg="img-fluid"
                valTitle="Hacktiv8 Meetup"
                valSubtitle="Jakarta, Indonesia"
                valBody="Member 1078"
                valBtn="Join Us"
                hrefBtn="http://www.google.com"
                classBtn="btn btn-primary"
              />
              {/* <div class="card">
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
              </div> */}
              
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
