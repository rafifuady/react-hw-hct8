import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <img src={this.props.src} className="img-fluid" alt="text"></img>
        )
  }
}
export default Button;