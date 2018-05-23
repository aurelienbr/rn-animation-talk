import React from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { Animated, Easing } from 'react-native';

class AnimationTiming extends React.Component{
	static navigationOptions = {
		title: 'AnimationTiming',
	}
	constructor(){
		super();
		this._animateOpacity = new Animated.Value(0);
		this._animateX = new Animated.Value(0);
		this._animateY = new Animated.Value(0);
	}
	componentWillMount(){
		this.animationGo();
	}
	animationGo = () => {
		Animated.timing(this._animateOpacity, {
			toValue: 1,
			duration: 1000,
		}).start();
		Animated.timing(this._animateX, {
			toValue: 125,
			easing: Easing.bounce,
			duration: 1000,
		}).start();
		Animated.timing(this._animateY, {
			toValue: -185,
			easing: Easing.elastic(2),
			duration: 1000,
		}).start();
	}
	animationReset = () => {
		Animated.timing(this._animateOpacity, {
			toValue: 0,
			duration: 1000,
		}).start();
		Animated.timing(this._animateX, {
			toValue: -125,
			easing: Easing.bounce,
			duration: 1000,
		}).start();
		Animated.timing(this._animateY, {
			toValue: 0,
			easing: Easing.elastic(2),
			duration: 1000,
		}).start(this.animationGo);
	}
	render(){
		const animationOpacity = { opacity: this._animateOpacity };
		const animateX = { transform: [{translateX: this._animateX }]};
		const animateY = { transform: [{translateY: this._animateY }]};
		const { backgroundBlue, backgroundGreen, backgroundRed, ball, container } = styles;		

		return(
			<Container>
				<Content contentContainerStyle={container}>
					<Button light style={{ alignSelf: 'center' }} onPress={this.animationReset}>
						<Text>Click me !</Text>
					</Button>
					<Animated.View style={[ball, backgroundRed, animationOpacity]}/>
					<Animated.View style={[ball, backgroundBlue, animateX]}/>
					<Animated.View style={[ball, backgroundGreen, animateY]}/>
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
	backgroundRed: {
		backgroundColor: 'red',
	},
	ball: {
		height: 100,
		width: 100,
		borderRadius: 100,
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
	},
}

export default AnimationTiming;
