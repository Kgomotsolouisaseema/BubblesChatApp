import React from "react";
import { StyleSheet, View ,Text } from "react-native";

export default function ChatListItems() {
  return (
    <View style={styles.container}> 
      <View  style={styles.img} />
      <View style={styles.rightContent}>
        <View style={styles.topText}>
          <Text style={styles.contactName}>Veeee</Text>
          <Text style={styles.time}>14:05</Text>
        </View>
        <View style={styles.bottomText}></View>
        <Text  style={styles.msg} >handleForgotPasswordPress . JUST TEXT </Text>
        <View  style={styles.counterContainer}>
            <Text style={styles.counter}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding : 10,
    flexDirection: 'row'    

  },
  img: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#FFFf'
  },

  rightContent:{
    flex: 1,
  },
  topText: {
    flexDirection: 'row',
    justifyContent : 'space-between'
  },

  contactName :{
    fontSize :12 ,
    fontWeight : 'bold',
    color : '#E6E6E6'
  },
time:{
    fontSize : 10,
    color: '#FFF'  
},

bottomText: {
    flexDirection: 'row',

},
msg:{
    color: '#CACACA',
    fontSize: 11
},

counterContainer: {
    height : 15,
    width : 15 ,
    borderRadius : 7.5 ,
    backgroundColor: '#FFF'
},

counter: {
    color: '#26394D',
    fontSize: 8,
}







});
