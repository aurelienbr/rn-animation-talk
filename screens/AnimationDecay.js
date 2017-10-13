import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Animated, PanResponder } from 'react-native';

class AnimationDecay extends Component{
	static navigationOptions = {
		title: 'AnimationDecay',
	}
	componentWillMount() {
		this._animatedXY = new Animated.ValueXY();
		this._value = { x: 0, y: 0 };
		this._animatedXY.addListener((value) => this._value = value);
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderGrant: (e, gestureState) => {
				this._animatedXY.setOffset({
					x: this._value.x,
					y: this._value.y,
				})
				this._animatedXY.setValue({ x: 0, y: 0});
			},
			onPanResponderMove: Animated.event([
				null, { dx: this._animatedXY.x, dy: this._animatedXY.y }
			]),
			onPanResponderRelease: (e, gestureState) => {
				this._animatedXY.flattenOffset();
				Animated.decay(this._animatedXY,{
					deceleration: 0.997,
					velocity: { x: gestureState.vx, y: gestureState.vy }
				}).start();
			},
		})
	}
	render(){
		const animatedStyle = {
			transform: this._animatedXY.getTranslateTransform()
		}
		return(
			<Container>
				<Content contentContainerStyle={styles.container}>
					<Animated.View style={[styles.ball, animatedStyle]} {...this.panResponder.panHandlers}>
						<Text style={styles.text}>Drag me</Text>
					</Animated.View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	ball: {
		alignItems: 'center',
		backgroundColor: 'black',
		height: 100,
		justifyContent: 'center',
		width: 100,
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
	}
}

export default AnimationDecay;
