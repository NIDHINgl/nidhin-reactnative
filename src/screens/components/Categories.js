import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Actions from '../redux/Actions';
import styles from './Styles';

const Categories = ({
  fetchCategories,
  categories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);


  return (
    <View style={styles.categories}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}>
        <Category
          id={''}
          index={-1}>
          All
        </Category>
        {categories.map(({name}, index) => (
          <Category
            id={index}
            index={index}>
            {name}
          </Category>
        ))}
      </ScrollView>
    </View>
  );
};

const Category = ({children, selected = -1, index, id,}) => {
  // useEffect(() => {
  //   setCountValue(totalCount);
  // }, [totalCount]);

  return (
    <TouchableOpacity
      style={styles.selectedCategory}
      >
      <View
        style={styles.category}>
       
        <Text
          style={
            Boolean(id == selected)
              ? styles.categoryText
              : [styles.categoryText, styles.categoryTextSelected]
          }>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  state => ({
    categories: state.products.categories,
  }),
  {
    fetchCategories: Actions.fetchCategories,
    fetchProducts: Actions.fetchProducts,
    // setFilterState: Actions.setFilterState
  },
)(Categories);
