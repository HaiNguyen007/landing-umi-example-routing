import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';
import Header from './Nav0';
import Footer from './Footer1';

import {
  Nav00DataSource,
  Footer10DataSource,
} from './data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div>
        <Header dataSource={Nav00DataSource} isMobile={this.state.isMobile} />
        {this.props.children}
        <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
      </div>
    );
  }
}

export default Layout;