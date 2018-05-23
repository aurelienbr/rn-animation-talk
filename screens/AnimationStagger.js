import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native'

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

class AnimationStagger extends Component{
  static navigationOptions = {
    title: 'AnimationStagger',
  }
  constructor(){
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount () {
    const animations = arr.map((item) => {
      return Animated.timing(this.animatedValue[item],{
          toValue: 1,
          duration: 4000
        }
      )
    })
    Animated.stagger(10, animations).start()
  }

  render(){
    const animations = arr.map((a, i) => {
      return <Animated.View key={i} style={[ {opacity: this.animatedValue[a]}, styles.box]} />
    });

    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = {
  box: {
    height: 20, 
    width: 20, 
    backgroundColor: 'red', 
    marginLeft: 3, 
    marginTop: 3,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
};

export default AnimationStagger;