import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import Expo from 'expo';
import { Spinner, Root } from 'native-base';

class AppRoot extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Spinner color="green" />;
    }
    return (
      <Root>
      	<MainNavigator/>
      </Root>
    );
  }
}

export default AppRoot;
