import React from 'react';

let Button = (props) =>{
      return(
          <div>
            <a className={props.className} href={props.href} target="_blank" rel="noopener noreferrer">{props.value}</a>
        </div>
      )
  }
export default Button;