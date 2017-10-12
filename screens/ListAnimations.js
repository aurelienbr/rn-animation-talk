import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

class ListAnimations extends Component{
	static navigationOptions = {
		title: 'List of Animation',
	}
	render(){

		const { navigate } = this.props.navigation;
		return(
			<Container>
				<Content>
					<List>
						<ListItem button onPress={() => navigate('AnimationTiming')}>
							<Text>Animation.timing</Text>
						</ListItem>
						<ListItem button onPress={() => navigate('AnimationSpring')}>
							<Text>Animation.spring</Text>
						</ListItem>
						<ListItem button onPress={() => console.log()}>
							<Text>Animation.decay</Text>
						</ListItem>
						<ListItem button onPress={() => console.log()}>
							<Text>Animation.sequence</Text>
						</ListItem>
						<ListItem button onPress={() => console.log()}>
							<Text>Animation.parallel</Text>
						</ListItem>
						<ListItem button onPress={() => console.log()}>
							<Text>Animation.stagger</Text>
						</ListItem>
						<ListItem button onPress={() => console.log()}>
							<Text>Animation.delay</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}

export default ListAnimations;
