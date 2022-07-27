import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  Image
} from 'react-native';
import styles from './components/Styles';
// import {relativeWidth, SCREEN_WIDTH} from '../../utils/helpers';
import {connect} from 'react-redux';
import Actions from './redux/Actions';

const ProductDetails = ({
  route,
  productDetails,
  fetchProductDetails,
  navigation
}) => {

  useEffect(() => {
    fetchProductDetails(route?.params?.id);
  }, [fetchProductDetails, route,route?.params?.id]);



//   const dashCount = Math.ceil(
//     (SCREEN_WIDTH - relativeWidth(96)) / relativeWidth(12),
//   );

  return (
    <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={require('../assets/ic_back.png')} />

        </TouchableOpacity>
        <Text
            numberOfLines={1}
            style={styles.title}>
            {productDetails?.name}
        </Text>
        <View />
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tearContainer}>
          <ImageBackground
            style={styles.content}
            source={{uri: productDetails?.avatar}}>
            
              <View
                style={styles.tag}>
                <Text style={styles.tagText}>
                  {productDetails?.category}
                </Text>
              </View>
          </ImageBackground>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.edgeRemoveTopLeft} />
          <View style={styles.edgeRemoveTopRight} />
          <Text style={styles.title}>
            {productDetails?.name}
          </Text>

          <View style={styles.textWrap}>
            <Text style={styles.descriptionTitle}>
              Description:{' '}
              <Text style={styles.description}>
                {productDetails?.description}
              </Text>
            </Text>

            <Text style={styles.descriptionTitle}>
                Price:{' '}
              <TouchableOpacity >
                <Text style={styles.price}>
                  ${productDetails?.price}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>


          <View style={styles.edgeRemoveBottomLeft} />
          <View style={styles.edgeRemoveBottomRight} />
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(
  state => ({
    productDetails: state.products.productDetails,
  }),
  {
    fetchProductDetails: Actions.fetchProductDetails,
  },
)(ProductDetails);
