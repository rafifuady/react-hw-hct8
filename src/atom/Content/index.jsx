import React from 'react';

let Button = (props) => {
        return(
            <p className={props.className}>{props.value}</p>
        )
  }

export default Button;