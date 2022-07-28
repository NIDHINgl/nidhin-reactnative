import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';


export default function TitleHeader({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={require('../../assets/ic_back.png')} />

        </TouchableOpacity>
        <Text
            numberOfLines={1}
            style={styles.title}>
            {title}
        </Text>
        <View />
        </View>
  )
}