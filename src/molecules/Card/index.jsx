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
                    <Images src={props.srcImg} classImg={props.classImg} />
                  </div>
                  <div className="col-6">
                    <Content className="h5 card-title" value={props.valTitle} />
                    <Content className="h6 card-subtitle mb-2 text-muted" value={props.valSubtitle} />
                    <Content className="card-text" value={props.valBody} />
                    <Button className={props.classBtn} href={props.hrefBtn} value={props.valBtn}  />
                  </div>
                </div> 
              </div>
            </div>
        </React.Fragment>
    )
}

export default Card;
