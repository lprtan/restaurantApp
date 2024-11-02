import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default function ResultShowScreen({route}) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
      };

    useEffect(()=>{
        getResult(id);
    },[])

    if(!result){
        return null
    }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        margin: 10,
        borderRadius: 20
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    phone: {
        alignSelf: 'center',
        fontSize: 20
    }
})