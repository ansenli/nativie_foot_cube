/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';



type Props = {};
export default class Page4 extends Component<Props> {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome toReact Page4</Text>
        <Button title={'Open Drawer'}
          onPress={()=>navigation.openDrawer()}
        ></Button>
        <Button title={'Close Drawer'}
          onPress={()=>navigation.closeDrawer()}
        ></Button>
        <Button title={'Toggle Drawer'}
          onPress={()=>navigation.toggleDrawer()}
        ></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
