import { View, FlatList,Text,TouchableOpacity,Image } from 'react-native'
import React,{useEffect} from 'react';
import Categories from './components/Categories';
import styles from './components/Styles';
import Products from './components/Products';
import Actions from './redux/Actions';
import {connect} from 'react-redux';

const Home = ({products,fetchProducts}) => {
    useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);

  return (
    <View style={styles.container}>
        <View style={[styles.titleContainer,{width:'90%',alignSelf:'center'}]}>
        <Text
            numberOfLines={1}
            style={[styles.title,{fontWeight:'bold'}]}>
            UPayments Store
        </Text>
        
        <View />
        </View>
        <Categories />
        <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{marginTop: '3%'}}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.dealsColumn}
        renderItem={props => <Products product={props.item} />}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PostScreen');
        }}
        style={styles.addPostButton}>
        <Image style={styles.addPost} source={require('../assets/ic_add.png')} />

      </TouchableOpacity>
    </View>
  )
}

export default connect(
    state => ({
        products: state.products.products,
    }),
    {
      fetchProducts: Actions.fetchProducts,
    },
  )(Home);