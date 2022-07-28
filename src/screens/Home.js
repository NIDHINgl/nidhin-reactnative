import { View, FlatList,Text,TouchableOpacity,Image,RefreshControl,Animated } from 'react-native'
import React,{useEffect} from 'react';
import Categories from './components/Categories';
import styles from './components/Styles';
import Products from './components/Products';
import Actions from './redux/Actions';
import {connect} from 'react-redux';

const Home = ({products,fetchProducts,navigation,filterProducts}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const rotation = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.Value(0)).current;
  const scaling = React.useRef(new Animated.Value(0)).current;
  const [categoryId, setCategoryId] = React.useState(0);

      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchProducts();
        });
    
        return unsubscribe;
      }, [fetchProducts,navigation]);
      const handleReload = () => {
        setRefreshing(true);
        fetchProducts();
        Animated.sequence([
          Animated.parallel([
            Animated.timing(rotation, {
              duration: 300,
              toValue: 1,
              useNativeDriver: true,
            }),
            Animated.timing(animation, {
              duration: 300,
              toValue: 1,
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(scaling, {
            duration: 300,
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start(({finished}) => finished && setRefreshing(false));
      };

      const filterCategory = (cat) =>{
        filterProducts(cat)
      }

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
        <Categories selected={categoryId} onSelect={(id,name)=>{setCategoryId(id);filterCategory(name)}} />
        <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{marginTop: '3%'}}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.dealsColumn}
        renderItem={props => <Products product={props.item} />}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleReload} />
          }
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateProduct');
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
      filterProducts:Actions.filterProducts
    },
  )(Home);