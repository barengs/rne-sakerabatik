import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text>Banner</Text>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        height: 60,
        width: 200,
        padding: 5,
        marginEnd: 10,
    }
})