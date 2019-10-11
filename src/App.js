import React, {Component} from 'react';
import {Modal, Router, Scene} from 'react-native-router-flux';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabPop';

import Main from './screens/Main';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Modal key="root" hideNavBar="true">
          <Scene title="#1" key="one" component={Main} initial={true} />
          <Scene title="#2" key="two" component={TabOne} />
          <Scene title="#3" key="three" component={TabTwo} />
          <Scene title="#4" key="four" component={TabThree} />
        </Modal>
      </Router>
    );
  }
}
