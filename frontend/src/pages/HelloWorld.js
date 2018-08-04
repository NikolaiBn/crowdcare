import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

export default class HelloWorld extends Component {

  handleClose(){
    alert("button clicked :)");
  }

  render(){
    return (
      <div>
        Hello World
        <Button color="primary" onClick={this.handleClose}>OK</Button>
      </div>
    );
  }


}
