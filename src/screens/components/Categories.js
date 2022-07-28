import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Actions from '../redux/Actions';
import styles from './Styles';

const Categories = ({
  fetchCategories,
  categories,
  create=false,
  selected,
  onSelect
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
        {!create&&(
            <Category
            id={0}
            selected={selected}
            onSelect={onSelect}>
            All
            </Category>
        )}
        
        {categories.map(({name,id}, index) => (
          <Category
            id={id}
            selected={selected}
            onSelect={onSelect}>
            {name}
          </Category>
        ))}
      </ScrollView>
    </View>
  );
};

const Category = ({children, selected = -1, onSelect, id}) => {
  // useEffect(() => {
  //   setCountValue(totalCount);
  // }, [totalCount]);

  return (
    <TouchableOpacity
      style={styles.selectedCategory}
      onPress={()=>onSelect(id,children)}
      >
      <View
        style={
            Boolean(id === selected)
              ? styles.categorySelected
              : styles.category}>
       
        <Text
          style={
            Boolean(id === selected)
              ? [styles.categoryText, styles.categoryTextSelected]
              : styles.categoryText
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
