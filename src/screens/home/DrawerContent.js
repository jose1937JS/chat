import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';

import { Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';

import{ AuthContext } from '../../authcontext';

export default function DrawerContent(props) {

	const { logout } = React.useContext(AuthContext)

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={ styles.logoContainer }>
						<Image
							source={ require('../../../assets/default.jpg') }
							style={{ width: 50, height: 50, borderRadius: 30 }}
						/>
                        <View style={ styles.textLogoContainer }>
    						<Text style={ styles.textLogo }>Jose Lopez</Text>
                            <Text style={ styles.textCaption }>@josepher</Text>
                        </View>
					</View>

					<DrawerItem
						activeBackgroundColor='purple'
						activeTintColor='white'
						style={ styles.items }
                        label="Crear grupo"
                        onPress={() => {props.navigation.navigate('CreateGroupScreen')}}
                        icon={({color, size}) => (
                            <Ionicons name="people-outline" size={24} color="black" />
                        )}
                    />
                    <DrawerItem
                        activeBackgroundColor='purple'
                        activeTintColor='white'
                        style={ styles.items }
                        label="Mensajes"
                        onPress={() => {props.navigation.navigate('HomeScreen')}}
                        icon={({color, size}) => (
                            <Ionicons name="chatbubbles-outline" size={24} color="black" />
                        )}
                    />
                    <DrawerItem
                    	style={ styles.items }
                        label="Mi perfil"
                        onPress={() => {props.navigation.navigate('GroupsScreen')}}
                        icon={({color, size}) => (
                            <Ionicons name="ios-person-outline" size={24} color="black" />
                        )}
                    />
                    <DrawerItem
                        style={ styles.items }
                        label="Notificaciones"
                        onPress={() => { props.navigation.navigate('') }}
                        icon={({color, size}) => (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )}
                    />
                    <DrawerItem
                    	style={ styles.items }
                        label="Información"
                        onPress={() => {props.navigation.navigate('GroupsScreen')}}
                        icon={({color, size}) => (
                            <Ionicons name="information-circle-outline" size={24} color="black" />
                        )}
                    />
				</View>
			</DrawerContentScrollView>
			<DrawerItem 
                label="Salir"
                onPress={() => { logout() }}
                icon={({color, size}) => (
                    <Ionicons name="ios-power" size={24} color="black" />
                )}
            />
		</View>
	)
}

const styles = StyleSheet.create({

	drawerContent: {
      flex: 1,
      marginTop: 10
    },
    logoContainer: {
    	flex: 1,
    	flexDirection: 'row',
    	paddingLeft: 20,
    	marginBottom: 30,
    	marginTop: 5,
    	alignItems: 'center',
    },
    textLogoContainer: {
        marginLeft: 15,
    },
    textLogo: {
    	color: 'purple',
    	fontSize: 20,
    },
    textCaption: {
        fontSize: 11,
        color: 'grey'
    },
    items: {
    	marginBottom: 0
    }
})