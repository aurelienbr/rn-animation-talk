import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Animated, PanResponder } from 'react-native';

class AnimationSequence extends Component{
	static navigationOptions = {
		title: 'AnimationSequence',
	}
	componentWillMount() {

		this._wAnimation = new Animated.Value(0);
		this._eAnimation = new Animated.Value(0);
		this._lAnimation = new Animated.Value(0);
		this._cAnimation = new Animated.Value(0);
		this._oAnimation = new Animated.Value(0);
		this._mAnimation = new Animated.Value(0);
		this._lastAnimation = new Animated.Value(0);
		this._scaleAnimation = new Animated.Value(0);

		const createAnimation = function(value, duration){
			return Animated.timing(value,{
				toValue: 1,
				duration
			});
		}

		Animated.sequence([
			createAnimation(this._wAnimation, 200),
			createAnimation(this._eAnimation, 200),
			createAnimation(this._lAnimation, 200),
			createAnimation(this._cAnimation, 200),
			createAnimation(this._oAnimation, 200),
			createAnimation(this._mAnimation, 200),
			createAnimation(this._lastAnimation, 200),
			Animated.spring(this._scaleAnimation, {
				toValue: 1,
				friction: 3,
			})
		]).start();
	}
	render(){
		const scaleAnimation = { transform: [{ scale: this._scaleAnimation }] }
		return(
			<Container>
				<Content contentContainerStyle={styles.container}>
					<Animated.View style={[styles.ball, scaleAnimation]}>
						<Animated.Text style={[ {opacity: this._wAnimation }, styles.text]}>W</Animated.Text>
						<Animated.Text style={[ {opacity: this._eAnimation }, styles.text]}>E</Animated.Text>
						<Animated.Text style={[ {opacity: this._lAnimation }, styles.text]}>L</Animated.Text>
						<Animated.Text style={[ {opacity: this._cAnimation }, styles.text]}>C</Animated.Text>
						<Animated.Text style={[ {opacity: this._oAnimation }, styles.text]}>O</Animated.Text>
						<Animated.Text style={[ {opacity: this._mAnimation }, styles.text]}>M</Animated.Text>
						<Animated.Text style={[ {opacity: this._lastAnimation }, styles.text]}>E</Animated.Text>
					</Animated.View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	ball: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
	},
	text: {
		fontSize: 34,
		marginLeft: 10,
		marginRight: 10,
	}
}

export default AnimationSequence;
