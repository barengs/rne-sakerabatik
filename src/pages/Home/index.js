import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Banner from '../../components/Banner'
import Product from '../../components/Product'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal={true} >
            <Banner />
            <Banner />
        </ScrollView>
        <ScrollView horizontal={true} style={styles.product}>
            <Product nama={'Batik Palengaan'} onPress={() => navigation.navigate('detil')} />
            <Product nama={'Batik Pamekasan'} />
            <Product />
            <Product />
            <Product />
        </ScrollView>
        <Text>Baju Terpopuler</Text>
        <ScrollView horizontal={true} style={styles.product}>
            <Product nama={'Batik Palengaan'} onPress={() => navigation.navigate('detil')} />
            <Product nama={'Batik Pamekasan'} />
            <Product />
            <Product />
            <Product />
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // flex: 1,
        padding: 10,
    },
    product: {
        paddingTop: 20,
        // borderWidth: 1,
    }
})