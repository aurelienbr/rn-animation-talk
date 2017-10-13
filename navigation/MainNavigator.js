import { StackNavigator } from 'react-navigation';

import ListAnimations from '../screens/ListAnimations';
import AnimationTiming from '../screens/AnimationTiming';
import AnimationSpring from '../screens/AnimationSpring';
import AnimationDecay from '../screens/AnimationDecay';
import AnimationSequence from '../screens/AnimationSequence';
import AnimationParallel from '../screens/AnimationParallel';
import AnimationStagger from '../screens/AnimationStagger';

const MainNavigator = StackNavigator({
	Main: { screen: ListAnimations },
	AnimationTiming: { screen: AnimationTiming },
	AnimationSpring: { screen: AnimationSpring },
	AnimationDecay: { screen: AnimationDecay },
	AnimationSequence: { screen: AnimationSequence },
	AnimationParallel: { screen: AnimationParallel },
	AnimationStagger: { screen: AnimationStagger },
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
