import React, { useState } from 'react';
import {Button, StyleSheet, Modal, View, Image, FlatList, Text } from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const AddPhotos = (props) => {
    const [tempId, setTempId] = useState(0);

    const addPhotoHandler = () => {
        props.photos.push({ uri: `file:///storage/emulated/0/Download/placeholder${tempId}.png` });
        setTempId(tempId + 1);
    };

    return (
        <Modal visible={ props.visible } animationType='slide'>
            <View style={ styles.screen }>
                <View style={styles.header}>
                    <Text style={ styles.headerTitle }>Add Photos</Text>
                </View>                
                <Input style={ styles.photoUriInput } />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button title="Browse" color={ Colors.accent } onPress={ () => { }} />
                    </View>
                    <View style={ styles.button }>
                        <Button title="Take Photo" color={ Colors.accent } />
                    </View>
                </View>

                <View style={ styles.button }>
                    <Button title="Upload" color={ Colors.primary } onPress={ addPhotoHandler } />
                </View>

                <View style={styles.header}>
                    <Text style={ styles.header2Title }>Photos To Add</Text>
                </View>

                <View style={styles.photoListContainer} >
                    <FlatList
                        horizontal
                        data={props.photos}
                        keyExtractor={photo=> photo.uri}
                        renderItem={photo => (
                            <Card style={ styles.card }>
                                <Image style={styles.image} source={{ uri: photo.uri }}/>
                            </Card>
                        )}
                    />
                </View>

                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button title="Done" color={ Colors.accent } onPress={() => props.setIsAddPhotoModalVisible(false)} />
                    </View>                                    

                    <View style={ styles.button }>
                        <Button title="Cancel" color={ Colors.accent} onPress={() => props.setIsAddPhotoModalVisible(false) } />
                    </View>                                    
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        padding: 20,
        // alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    photoUriInput: {
        width: '100%'
    },
    button: {
        width: '40%',
        marginHorizontal: 10,
        marginVertical: 10
    }, 
    image: {
        height: '100%',
        width: '100%'
    },
    card: {
        height: 150,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        alignItems: 'center',
        marginTop: 10
     },
    headerTitle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    header2Title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    photoListContainer: {
        height: 200
    }
});

export default AddPhotos;