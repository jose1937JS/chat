import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {
	Container, Button, Badge, Content,Separator, Item, Thumbnail, Input, Right, View, Text, Header, Left, Body, Title, Subtitle, Icon, List, ListItem
} from 'native-base'

import { Ionicons } from '@expo/vector-icons';

import image from '../../../assets/default.jpg'

export default function HomeScreen(props) {

	const [loading, setLoading] = useState(false)
	
	return (
		<Container>
			<Header style={{ backgroundColor: "#4b378c" }} androidStatusBarColor="#4b378c">
				<Left>
					<Icon onPress={() => props.navigation.openDrawer() } name='menu' style={{ color: 'white' }} />
				</Left>
				<Body>
					<Title>Chat App</Title>
				</Body>
				<Right>
					<Text style={ styles.connectedText }>CONNECTED</Text>
				</Right>
			</Header>
			<Content padder contentContainerStyle={ styles.container }>
				<Item rounded>
	            	<Input placeholderTextColor="grey" style={ styles.inputSearch } placeholder='Buscar' />
					<Ionicons style={{ marginRight: 14 }} name="search-outline" size={24} color="black" />
	            </Item>

		        <View style={{ display: 'none' }}>
		            <Text style={ styles.resultFoundsText }>Resultados encontrados</Text>

		            <List style={ styles.list }>
		            	
		            	<Separator>
			            	<Text>Usuarios</Text>
			          	</Separator>

						<ListItem avatar style={ styles.listItem }>
							<Left >
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/a9fbd84d137d931d41cb5dfd22a366bd' }} />
				            </Left>
							<Body>
								<Text style={ styles.textList }>Simón Bolivar palacios flores </Text>
								<Text note style={ styles.textCaptionList }>@simoncito</Text>
							</Body>
							<Right>
								<Icon name="send" style={{ color: '#4b378c' }} onPress={() => props.navigation.navigate('ChatScreen', { user: 3 }) } />
							</Right>
						</ListItem>
						
						<ListItem avatar style={ styles.listItem }>
							<Left>
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} />
				            </Left>
							<Body>
								<Text style={ styles.textList }>Fernando Oerez</Text>
								<Text note style={ styles.textCaptionList }>@fernandop</Text>
							</Body>
							<Right>
								<Icon name="send" style={{ color: '#4b378c' }} onPress={() => props.navigation.navigate('ChatScreen', { user: 3 }) } />
							</Right>
						</ListItem>

						<Separator style={ styles.list }>
			            	<Text>Grupos</Text>
			          	</Separator>

						<ListItem avatar style={ styles.listItem }>
							<Left >
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/a9fbd84d137d931d41cb5dfd22a366bd' }} />
				            </Left>
							<Body>
								<Text style={ styles.textList }>Simón Bolivar palacios flores </Text>
								<Text note style={ styles.textCaptionList }>@simoncito</Text>
							</Body>
							<Right>
								<Icon name="send" style={{ color: '#4b378c' }} onPress={() => props.navigation.navigate('ChatScreen', { user: 3 }) } />
							</Right>
						</ListItem>
					</List>
				</View>

				<View style={{ display: 'none' }}>
					<List style={ styles.list }>

						<ListItem avatar style={ styles.listItem }>
							<Left >
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/a9fbd84d137d931d41cb5dfd22a366bd' }} />
				            </Left>
							<Body style={{ height: 70 }}>
								<Text style={ styles.textList }>Simón Bolivar palacios flores </Text>
								<Text note style={ styles.textCaptionList }>Exclente vale!</Text>
							</Body>
							<Right style={ styles.rigthIndicators }>
								<Badge>
					            	<Text>2</Text>
					            </Badge>
							</Right>
						</ListItem>
						
						<ListItem avatar style={ styles.listItem }>
							<Left>
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} />
				            </Left>
							<Body style={{ height: 70 }}>
								<Text style={ styles.textList }>Westeros</Text>
								<Text style={ styles.textCaptionList }>CEsar</Text>
								<Text note style={ styles.textCaptionList }>Todi Ben ?</Text>
							</Body>
							<Right style={ styles.rigthIndicators }>
								<Text note>14:45</Text>
							</Right>
						</ListItem>

						<ListItem avatar style={ styles.listItem }>
							<Left>
				                <Thumbnail small source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }} />
				            </Left>
							<Body style={{ height: 70 }}>
								<Text style={ styles.textList }>Uthred Bombombil</Text>
								<Text style={ styles.textCaptionList }>Tú</Text>
								<Text note style={ styles.textCaptionList }>Todi Ben ?</Text>
							</Body>
							<Right style={ styles.rigthIndicators }>
								<Text note>14 Mar</Text>
								<Ionicons style={{ marginTop: 5 }} name="checkmark" size={20} color="grey" />
							</Right>
						</ListItem>

						<ListItem avatar style={ styles.listItem }>
							<Left>
				                <Thumbnail small source={ image } />
				            </Left>
							<Body style={{ height: 70 }}>
								<Text style={ styles.textList }>Uthred Bombombil</Text>
								<Text style={ styles.textCaptionList }>Tú</Text>
								<Text note style={ styles.textCaptionList }>Todi Ben ?</Text>
							</Body>
							<Right style={ styles.rigthIndicators }>
								<Text note>14 Mar</Text>
								<Ionicons style={{ marginTop: 5 }} name="checkmark-done" size={20} color="blue" />
							</Right>
						</ListItem>

						<ListItem avatar style={ styles.listItem }>
							<Left>
				                <Thumbnail small source={ image } />
				            </Left>
							<Body style={{ height: 70 }}>
								<Text style={ styles.textList }>La jeva</Text>
								<Text note style={ styles.textCaptionList }>Te amo 😍</Text>
							</Body>
							<Right style={ styles.rigthIndicators }>
								<Text note>14 Mar</Text>
							</Right>
						</ListItem>

					</List>
				</View>

				<View style={{ display: 'flex' }}>
					<FlatList
						refreshing={loading}
						style={ styles.list }
						data={[{a: 1}, {a: 2},{a: 1}, {a: 2},{a: 1}, {a: 2},{a: 1},{a: 1}, {a: 2},{a: 1}, {a: 2},{a: 1}, {a: 2},{a: 1}]}
						onRefresh={() => setLoading(true)}
						renderItem={({item}) => (
							<ListItem avatar style={ styles.listItem }>
								<Left>
					                <Thumbnail small source={ image } />
					            </Left>
								<Body style={{ height: 70 }}>
									<Text style={ styles.textList }>Uthred Bombombil</Text>
									{ item.isMine ? <Text style={ styles.textCaptionList }>Tú</Text> : null }									
									<Text note style={ styles.textCaptionList }>Todi Ben ?</Text>
								</Body>
								<Right style={ styles.rigthIndicators }>
									{ false ? <Badge><Text>4</Text></Badge> : null }
									<Text note>14 Mar</Text>
									{ item.isMine ? 
										<Ionicons style={{ marginTop: 5 }} name="checkmark-done" size={20} color="blue" /> : <Ionicons style={{ marginTop: 5 }} name="checkmark" size={20} color="grey" />
									}
								</Right>
							</ListItem>
						) }
					/>
				</View>

			</Content>
		</Container>
	)

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	list: {
		marginTop: 10
	},
	inputSearch: {
		fontSize: 15,
		paddingLeft: 14
	},
	textList: {
		fontSize: 14
	},
	textCaptionList: {
		fontSize: 12
	},
	resultFoundsText: {
		fontSize: 14,
		color: 'grey',
		marginTop: 20
	},
	connectedText: {
		color: 'green',
		fontWeight: 'bold'
	},
	rigthIndicators: {
		justifyContent: 'center'
	},
	listItem: {
		marginLeft: 0,
		marginBottom: 5
	}
})