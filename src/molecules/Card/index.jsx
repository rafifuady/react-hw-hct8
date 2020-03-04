import React from 'react';
import Button from "../../atom/Button";
import Content from "../../atom/Content";
import Images from "../../atom/Images";

let Card = (props) => {
    return (
        <React.Fragment>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <Images src="https://dummyimage.com/lrgrec" />
                  </div>
                  <div className="col-6">
                    <Content className="h5 card-title" value="Hacktiv8 Meetup" />
                    <Content className="h6 card-subtitle mb-2 text-muted" value="Jakarta, Indonesia" />
                    <Content className="card-text" value="Member 1078" />
                    <Button className="btn btn-primary" href="www.google.com" value="Join Us" />
                  </div>
                </div> 
              </div>
            </div>
        </React.Fragment>
    )
}

export default Card;
