import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Animated, TouchableWithoutFeedback } from 'react-native';

class AnimationSpring extends React.Component{
	static navigationOptions = {
		title: 'AnimationSpring',
	}
	constructor(){
		super();
		this._animateScale = new Animated.Value(1);
		this._animateCube = new Animated.ValueXY(0);
	}
	HandleRedButtonIn = () => {
		Animated.spring(this._animateScale,{
			toValue: 0.5
		}).start();
	}
	HandleRedButtonOut = () => {
		Animated.spring(this._animateScale,{
			toValue: 1,
			friction: 3,
			tension: 40,
		}).start();
	}
	render(){
		const scaleAnimation = { transform: [{ scale: this._animateScale }] }
		const { backgroundBlack, backgroundBlue, backgroundGreen, btnStyle, ball, container } = styles;		

		return(
			<Container>
				<Content contentContainerStyle={container}>
					<TouchableWithoutFeedback onPressIn={this.HandleRedButtonIn} onPressOut={this.HandleRedButtonOut}>
						<Animated.View style={[ball, backgroundBlack, scaleAnimation]}>
							<Text style={btnStyle}>Press me !</Text>
						</Animated.View>
					</TouchableWithoutFeedback>
					<Animated.View style={[ball, backgroundBlue, scaleAnimation]}/>
				</Content>
			</Container>
		);
	}
}

const styles = {
	backgroundBlue: {
		backgroundColor: 'blue',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	backgroundGreen: {
		backgroundColor: 'green',
	},
	backgroundBlack: {
		backgroundColor: 'black',
		justifyContent: 'center',
	},
	ball: {
		height: 100,
		width: 100,
	},
	btnStyle: {
		alignSelf: 'center',
		color: 'white',
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
	},
}

export default AnimationSpring;


/*
					<Animated.View style={[ball, backgroundBlue]}/>
					<Animated.View style={[ball, backgroundGreen]}/>
*/

