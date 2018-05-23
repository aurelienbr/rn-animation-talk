import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Animated, TouchableWithoutFeedback } from 'react-native';


class AnimationSpring extends React.Component{
	static navigationOptions = {
		title: 'AnimationSpring',
	}
	constructor(){
		super();
		this._animatedX = new Animated.Value(0);
		this.animatedScale = new Animated.Value(1);
		this._animatedScale = new Animated.Value(1);
	}
	HandleRedButtonIn = () => {
		const createAnimationTiming = function(value, toValue, duration, delay = 0){
			return Animated.timing(value,{
				toValue,
				duration,
				delay,
			});
		}
		const createAnimationSpring = function(value, toValue){
			return Animated.spring(value,{
				toValue,
			});
		}
		createAnimationSpring(this._animatedScale, 0.5)
		Animated.sequence([
			createAnimationTiming(this._animatedX, 150, 1000),
			createAnimationSpring(this._animatedScale, 2),
			createAnimationTiming(this._animatedX, 0, 1000),
			createAnimationSpring(this._animatedScale, 1),
		]).start();
	}
	HandleRedButtonOut = () => {
		Animated.spring(this.animatedScale,{
			toValue: 1,
			friction: 3,
			tension: 40,
		}).start();
	}
	render(){
		const scaleAnimation = { transform: [{ scale: this.animatedScale }] };
		const _animatedStyle = {
			transform: [
				{ translateX: this._animatedX },
				{ scale: this._animatedScale },
			]
		}
		const { backgroundBlack, backgroundBlue, backgroundGreen, btnStyle, ball, container } = styles;		

		return(
			<Container>
				<Content contentContainerStyle={container}>
					<TouchableWithoutFeedback onPressIn={this.HandleRedButtonIn} onPressOut={this.HandleRedButtonOut}>
						<Animated.View style={[ball, backgroundBlack, scaleAnimation]}>
							<Text style={btnStyle}>Press me !</Text>
						</Animated.View>
					</TouchableWithoutFeedback>
					<Animated.View style={[ball, backgroundBlue, _animatedStyle]}/>
				</Content>
			</Container>
		);
	}
}

const styles = {
	backgroundBlue: {
		backgroundColor: 'blue',
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
