/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button,StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class HomePage extends Component<Props> {
  // 对于navigationOptions的配置除了在appnavigators中配置也可以用下面的方式配置
  // static navigationOptions = {
  //   title:'Home',
  //   headerBackTitle:'返回'
  // }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome toReact HomePage</Text>
        <Button
          title = {'go to Page1'}
          onPress = {()=>{
            navigation.navigate('Page1',{name:'动态的'})
          }}
        />
        <Button
          title = {'go to Page2'}
          onPress = {()=>{
            navigation.navigate('Page2')
          }}
        />
        <Button
          title = {'go to Page3'}
          onPress = {()=>{
            navigation.navigate('Page3',{name:'Devio'})
          }}
        />
        <Button
          title = {'go to Bottom Navigator'}
          onPress = {()=>{
            navigation.navigate('Bottom')
          }}
        />
        <Button
          title = {'go to Top Navigator'}
          onPress = {()=>{
            navigation.navigate('Top')
          }}
        />
        <Button
          title = {'go to Drawer Navigator'}
          onPress = {()=>{
            navigation.navigate('DrawerNav')
          }}
        />

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
