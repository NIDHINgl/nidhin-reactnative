

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  Text,
  TextInput
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './components/Styles';
import Categories from './components/Categories';
import TitleHeader from './components/TitleHeader';
import Actions from './redux/Actions';


const INIT_ERRORS = {
  title: false,
  price: false,
  avatar:false,
  category:false
};

const CreateProduct = ({addProduct}) => {
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    name: '',
    price: null,
    avatar: '',
    description: '',
    category: '',
    developerEmail:'abeynidhin.g.l@gmail.com'
  });
  const [categoryId, setCategoryId] = React.useState(0);

  const [errors, setErrors] = React.useState(INIT_ERRORS);


  const onResult = (data, status) => {
    Alert.alert('', data, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          status == 'success' ? navigation.goBack() : null;
        },
      },
    ]);
  };

  const handleSubmit = () => {
    setErrors(INIT_ERRORS);
    const newErrors = {
      name: !data?.name,
      price: !data?.price,
      avatar:!data?.avatar,
      category:!data?.category

    };
    const hasErrors = Object.values(newErrors).includes(true);
    if (hasErrors) {
      setErrors(newErrors);
    } else {
        addProduct(data,(data, status)=>onResult(data, status))
    }
  };


  return (
    <View style={{borderTopRadius: 13, backgroundColor: 'white',flex:1}}>
      <View style={{marginHorizontal:24}}>
      <TitleHeader title='Create Product' />
        <KeyboardAwareScrollView
        style={{marginTop:'10%'}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          <View>
            <View style={styles.inputHead}>
              <View style={{flexDirection:'row'}}>
                <Text caption bold marginBottom={10}>
                  Product Title
                </Text>
                <Text style={{color: '#FF4E4E'}}>*</Text>
              </View>
              {errors.name && (
                <Text style={styles.errorMsg}>
                  Required
                </Text>
              )}
            </View>
            <TextInput
              value={data.name}
              textAlignVertical="top"
              placeholder="Product Title..."
              placeholderTextColor={'gray'}
              onChangeText={value => setData({...data, name: value})}
              style={{...styles.multiline, height: 50}}
            />
          </View>
          <View style={{marginTop:16}}>
            <View style={styles.inputHead}>
              <View style={{flexDirection:'row'}}>
                <Text caption bold marginBottom={10}>
                  Price
                </Text>
                <Text style={{color: '#FF4E4E'}}>*</Text>
              </View>
              {errors.price && (
                <Text style={styles.errorMsg}>
                  Required
                </Text>
              )}
            </View>
            <TextInput
              value={data.price}
              textAlignVertical="top"
              placeholder="Price"
              keyboardType='number-pad'
              placeholderTextColor={'gray'}
              onChangeText={value => setData({...data, price: value})}
              style={{...styles.multiline, height: 50}}
            />
          </View>
          <View style={{marginTop:16}}>
            <View style={styles.inputHead}>
              <View style={{flexDirection:'row'}}>
                <Text caption bold marginBottom={10}>
                  Description
                </Text>
              </View>
            </View>
            <TextInput
              multiline
              value={data?.description}
              textAlignVertical="top"
              placeholder="Description..."
              placeholderTextColor={'gray'}
              onChangeText={value => setData({...data, description: value})}
              style={styles.multiline}
            />
          </View>
          <View style={{marginTop:16}}>
            <View style={styles.inputHead}>
              <View style={{flexDirection:'row'}}>
                <Text caption bold marginBottom={10}>
                  Image Link
                </Text>
                <Text style={{color: '#FF4E4E'}}>*</Text>
              </View>
              {errors.avatar && (
                <Text style={styles.errorMsg}>
                  Required
                </Text>
              )}
            </View>
            <TextInput
              value={data?.avatar}
              textAlignVertical="top"
              placeholder="Image Link..."
              placeholderTextColor={'gray'}
              keyboardType='url'
              onChangeText={value => setData({...data, avatar: value})}
              style={{...styles.multiline, height: 50}}
            />
          </View>

          <View style={{marginTop:16}}>
            <View style={styles.inputHead}>
              <View style={{flexDirection:'row'}}>
                <Text caption bold marginBottom={10}>
                  Select Category
                </Text>
                <Text style={{color: '#FF4E4E'}}>*</Text>
              </View>
              {errors.category && (
                <Text style={styles.errorMsg}>
                  Required
                </Text>
              )}
            </View>
            <Categories selected={categoryId} onSelect={(id,name)=>{setCategoryId(id);setData({...data, category: name})}} create={true} />
          </View>

          <TouchableOpacity onPress={()=>handleSubmit()} style={styles.submit}>
            <Text style={styles.submitText}>Add Product</Text>
          </TouchableOpacity>

         
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};
export default connect(state => ({
    categories: state.products.categories,
  }), {
    addProduct: Actions.addProduct,
  })(CreateProduct);

// const styles = StyleSheet.create({
  
  
  
//   typeContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '98%',
//     alignSelf: 'center',
//     marginTop: '3%',
//     marginBottom: '8%',
//   },
//   keyText: {
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: 13,
//     lineHeight: 15,
//     alignItems: 'center',
//     letterSpacing: -0.01,
//     color: '#2A353F',
//   },
//   valueText: {
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: 12,
//     lineHeight: 20,
//     color: '#11243D',
//     maxWidth: '40%',
//   },
//   typeButton: {
//     // backgroundColor: '#EFEFEF',
//     borderWidth: 1,
//     borderRadius: 26,
//     borderColor: '#D4D4D6',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     height: 33,
//     width: '48%',
//     alignItems: 'center',
//     paddingHorizontal: '4%',
//   },
//   visibilityButton: {
//     backgroundColor: '#EFEFEF',
//     borderColor: '#D4D4D6',
//   },
// });
