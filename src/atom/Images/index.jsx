import React from 'react';

let Images = (props) => {
        return(
            <React.Fragment>
            <img src={props.src} className={props.classImg} alt="text"></img>
            </React.Fragment>
        )
  }

export default Images;