import React from 'react';

let Button = (props) =>{
      return(
          <div>
            <a className={props.className} href={props.href}>{props.value}</a>
        </div>
      )
  }
export default Button;