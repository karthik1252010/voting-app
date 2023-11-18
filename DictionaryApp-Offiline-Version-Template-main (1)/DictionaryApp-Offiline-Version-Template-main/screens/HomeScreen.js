import React, {Component} from 'react';
import {
  Text,
  View,
  Stylesheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends component {
  TeamA(){
    db.ref('/').update({
      TeamA:1
    })
    
  }
  TeamB(){
    db.ref('/').update({
      'TeamB':2
    })
  }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20}}>Team B</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor:"#FFC300",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});

  
 



