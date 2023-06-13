import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Product = ({onPress, nama}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.image}>
            <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 78, height: 90 }} />
        </View>
        <View style={styles.deskripsi}>
            <Text>{nama}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        height: 150,
        width: 80,
        borderRadius: 5,
        // padding: 5,
        backgroundColor: 'lightgreen',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginEnd: 5,
    },
    image: {
        flex: 3,
        alignItems: 'center',
        paddingTop: 2,
    },
    deskripsi: {
        // borderWidth: 1,
        flex: 2,
        padding: 5,
    }
})