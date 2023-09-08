import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatListItems from '../components/ChatListItems';

function HomeScreen() {
  return (
<View style ={styles.container}>
<ChatListItems/>
<ChatListItems/>
<ChatListItems/>
<ChatListItems/>


</View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#26394D'
    
  }
})
