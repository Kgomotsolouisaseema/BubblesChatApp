import React from "react";
import { StyleSheet, TextInput, TouchableOpacity ,Text } from "react-native";
import { View, Image } from "react-native";
// import { CameraIcon } from "../assets/camera-light.svg";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/kgomotsoprofile.png")}
          />
          <View style={styles.camContainer}>
          <Image style={styles.camIcon} source={require('../assets/camera-solid.svg')} />

          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.innerContainer} >
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Email"/>
                <TextInput style={styles.textInput} placeholder="Name"/>
                <TextInput style={styles.textInput} placeholder="Password"/>
                <TextInput style={styles.textInput} placeholder="Status"/>

            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.saveOpt}> 
                <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#26394D",
    alignItems: "center",
  },
  topContainer: {
    height: 280,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: "green",
  },
  imageContainer: {
    width: 200,
    height: 200,
    // backgroundColor: 'yellow'
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  camContainer: {
    height: 42,
    width: 42,
    backgroundColor: "#1EA0E5",
    borderRadius: 21,
    position: "absolute",
    top: 146,
    left: 146,
    justifyContent: "center",
    alignItems: "center",
  },
  camIcon: {
    width: 24,
    height: 20,
  },

  bottomContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
    alignItems: 'center'
  },

  innerContainer:{
    height: 380 ,
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
    width: 320

  },
  textInput:{
    borderRadius : 15,
    borderColor: '#1EA0E5',
    borderWidth: 1,
    padding: 10,
    height: 46,
    marginVertical: 10  //spaces in between the input areas 

  },

  actionContainer:{
    height: 60,
    marginTop: 10 ,
    // backgroundColor: 'red', //include these for checking purposes 
    justifyContent: 'center'
  },

  saveOpt:{
    backgroundColor: "#1EA0E5",
    borderRadius : 15 ,
    justifyContent : 'center',
    alignItems: 'center' , 
    width: 280, //width of the save button ,
    height: 46
  },

  saveText : {
    color: '#FFF',
    fontSize:17 ,
    fontWeight: 'bold'
  }
});
