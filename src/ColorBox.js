import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {

  render() {
    return(

        <div style={{background: this.props.background}} className='ColorBox'>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{this.props.name}</span>
            </div>
            <CopyToClipboard text={this.props.background} >
              <button className='copy-button'>Copy</button>
            </CopyToClipboard>
          </div>
          <span className='see-more'>see more</span>
        </div>

    )
  }
}

export default ColorBox;