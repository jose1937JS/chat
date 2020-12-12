import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/auth/Login'
import RegisterScreen from '../screens/auth/Register'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="Login" component={LoginScreen} options={{
				title: 'Iniciar Sesión',
				headerShown: false
			}}/>
			<AuthStack.Screen name="Register" component={RegisterScreen} options={{
				title: 'Registro',
				headerShown: false
			}}/>
		</AuthStack.Navigator>
	);
}

export default AuthStackScreen