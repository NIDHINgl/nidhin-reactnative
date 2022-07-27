import React, {useState, useEffect} from 'react';
import {Image, View, Platform,Text} from 'react-native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Products = ({product, setCategoryState,}) => {
  const {
    name,
    avatar,
    category,
    description,
    price,
    id
  } = product;

  const navigation = useNavigation();


  const onSelect = () => {
    navigation.navigate('ProductDetails',{id:id});
  };



  return (
    <View>
      <TouchableOpacity onPress={() => onSelect()} style={styles.dealsItem}>
        <View style={styles.imageWrapper}>
          <View
            style={{
              ...styles.dealItemTag,
            }}>
            <Text style={styles.dealItemTagText}>
             {category?.toString()}
            </Text>
          </View>
          <Image style={styles.image} source={{uri: avatar}} />
        </View>
        <View style={styles.rowStretched}>
        
        <Text numberOfLines={1} style={{fontWeight:'600'}} >
          {name}
        </Text>
        </View>
        <View style={styles.rowStretched}>
          <Text numberOfLines={1} style={styles.price}>
            ${price}
          </Text>
        </View>
        <View style={styles.dealItemRow}>
        <Text numberOfLines={2} style={styles.details}>
          {description}
        </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Products;
