import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

export default class WriteScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyText:'',
      submitMessage:''
      //newstory:'A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go. One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.'
    }
  }
  
  render(){
      return(
        <ScrollView>
          <View backgroundColor = 'black'>
            <View>
              <Image
                source = {require("../assets/logo.png")}
                style= {{width:200, height:200, alignSelf:'center'}}/>
              <Text style={{textAlign:'center', fontSize:20, color:'white'}}>The perfect destination for good bedtime stories</Text>
            </View>
            <View style={styles.inputView}>

            <TextInput
              style={styles.inputBox}
              placeholder="Show your skills, write a story!"
              placeholderTextColor = 'grey'
              //value={this.state.newstory}
              value = {this.state.dummyText}/>
            </View>

            <Text style={styles.submitAlert}>{this.state.submitMessage}</Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={async()=>{
                {this.state.submitMessage = 'Thank you for submitting your story, we will go through it'}
              }}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputView:{
    flexDirection: 'row',
    margin: 20,
  },
  inputBox:{
    width:340,
    height: 255,
    borderWidth: 1,
    fontSize: 13,
    padding : 15,
    borderColor:'grey',
    textAlign : 'left'
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50,
    alignSelf:'center',
    marginBottom:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'black'
  }
});
