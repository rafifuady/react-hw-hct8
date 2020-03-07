import React from 'react';
import Content from "../../atom/Content";

let CardText = (props) => {
    return (
        <React.Fragment>
            <div className="card">
              <div className="card-body">
                <Content className="h5 card-title" value={props.valTitle} />
                <Content className="card-text" value={props.valGreet} />
                <Content className="card-text" value={props.valBody} />
                -----
                <Content className="" value={props.valFooter} />
                <Content className="" value={props.valSign} />
                 

              </div>
            </div>
        </React.Fragment>
    )
}

export default CardText;