import { StackNavigator } from 'react-navigation';

import ListAnimations from '../screens/ListAnimations';
import AnimationTiming from '../screens/AnimationTiming';
import AnimationSpring from '../screens/AnimationSpring';

const MainNavigator = StackNavigator({
	Main: { screen: ListAnimations },
	AnimationTiming: { screen: AnimationTiming },
	AnimationSpring: { screen: AnimationSpring },
},
{
	navigationOptions: {
		headerStyle: {
			marginTop: 24,
		},
		headerTintColor: '#9b59b6',
	}
});

export default MainNavigator;
