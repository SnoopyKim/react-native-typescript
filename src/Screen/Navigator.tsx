import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
	createBottomTabNavigator,
	createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoading from './AuthLoading';
import Auth from './Auth';

import FullDetail from './FullDetail';

import TopTabFirst from './TopTabFirst';
import TopTabSecond from './TopTabSecond';
import TopTabThird from './TopTabThird';

import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

import Detail from './Detail';

const TopTab = createMaterialTopTabNavigator({
	TopTabFirst,
	TopTabSecond,
	TopTabThird,
});

const FirstTabStack = createStackNavigator({
	TopTab: {
		screen: TopTab,
		navigationOptions: ({ navigation }) => ({
			header: null,
		}),
	},
	Detail,
});

const MainTab = createBottomTabNavigator({
	FirstTabStack,
	SecondTab,
	ThirdTab,
});

const MainNavi = createStackNavigator({
	MainTab: {
		screen: MainTab,
		navigationOptions: ({ navigation }) => ({
			title: 'MainTab',
			headerStyle: {
				backgroundColor: '#fff',
			},
			headerTintColor: '#000',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}),
	},
	FullDetail,
});

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading,
			Auth,
			MainNavi,
		},
		{
			initialRouteName: 'AuthLoading',
		}
	)
);
