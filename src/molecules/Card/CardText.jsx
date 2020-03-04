import React from 'react';
import Content from "../../atom/Content";

let CardText = () => {
    return (
        <React.Fragment>
            <div className="card">
              <div className="card-body">
                <Content className="h5 card-title" value="Hacktiv8 Meetup" />
                <Content className="card-text" value="Hello, Havascript and Node.js Ninjas!" />
                <Content className="card-text" value="Get Ready for our monthly meetup JakartaJS! This is will be our fifth meetup of 2018! 
                  The meet up format will contain some short stories and technical talks. 
                  If you have a short announcement you'd like to share with the audience, 
                  you may do so during open mic announcement" />
                  ----
                  <br></br>
                  See You there
                  <br></br>
                  Best, Hengki, Giovanni, Sofian, Riza, 
                  Agung The JakartaJS Organizers

              </div>
            </div>
        </React.Fragment>
    )
}

export default CardText;