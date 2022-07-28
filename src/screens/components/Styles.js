
import {Platform, StyleSheet,PixelRatio,Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const WIDTH_SCALE = SCREEN_WIDTH / 375;


const relativeWidth = (width = 0) => {
    const newSize = width * WIDTH_SCALE;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  };

  const edgeRemove = {
    position: 'absolute',
    backgroundColor: '#E6EEF6',
    height: 32,
    width: 32,
    borderRadius: 32,
  };

const styles = StyleSheet.create({


    container:{
        width:'100%',
        height:'100%',
        marginTop:'6%'
    },

    categories: {
        paddingHorizontal: 16,
    },
    categoryList: {
        flexDirection: 'row',
        // backgroundColor: '#ffffff',
        marginTop: '7%',
        marginBottom: '3%',
        paddingVertical: '4%',

    },
    selectedCategory: {
        shadowColor: '#505588',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    
        elevation: 5,
        
    },
    counter: {
        backgroundColor: '#FF9E9EB2',
        height: relativeWidth(22),
        width: relativeWidth(22),
        position: 'absolute',
        top: -relativeWidth(10),
        right: -relativeWidth(1),
        borderRadius: relativeWidth(22),
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    counterText: {
        color: '#FF4E4E',
        fontSize: 10,
        fontWeight: '600',
    },
    categoryTextSelected: {
        color: '#ffffff',
    },
    categoryText: {
        color: '#000000',
        fontSize: relativeWidth(14),
        fontWeight: '600',
        lineHeight: relativeWidth(21),
    },
    category: {
        // backgroundColor: '#EFEFEF',
        paddingHorizontal: relativeWidth(24),
        paddingVertical: relativeWidth(6),
        borderRadius: 38,
        marginRight: 8,
        backgroundColor:'#5267F0',
        borderEndColor:12
      },
      categorySelected: {
        // backgroundColor: '#EFEFEF',
        paddingHorizontal: relativeWidth(24),
        paddingVertical: relativeWidth(6),
        borderRadius: 38,
        marginRight: 8,
        backgroundColor:'green',
        borderEndColor:12
      },

      dealsColumn: {
        flex: 1,
        justifyContent: 'space-around',
        paddingVertical: 8,
        paddingHorizontal: 16,
      },

      dealsItem: {
        height: relativeWidth(201),
        width: relativeWidth(160),
        shadowColor: '#505588',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 10,
    
        elevation: 5,
        padding: relativeWidth(8),
      },

      imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
      },

      dealItemTag: {
        position: 'absolute',
        backgroundColor: '#53D769',
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        height: relativeWidth(20),
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 8,
        top: -2,
        right: -4.2,
        marginRight: -relativeWidth(8),
      },

      dealItemTagText: {
        fontSize: relativeWidth(10),
        color: '#000000',
      },

      image: {
        borderRadius: relativeWidth(16),
        marginTop: 24,
        height: relativeWidth(62),
        width: relativeWidth(70),
      },
      dealItemRow: {
        marginTop: relativeWidth(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
     

      details: {
        marginTop: 8,
        fontSize: relativeWidth(11),
        minHeight: relativeWidth(28),
        color: '#000000',
      },
      price: {
        fontSize: relativeWidth(12),
        color: '#000000',
      },
      //details
      detailContainer: {
        backgroundColor: '#E6EEF6',
        padding: 24,
        flex: 1,
      },
      tearContainer: {
        marginTop: 24,
        backgroundColor: '#000000',
        height: relativeWidth(180),
        borderRadius: relativeWidth(8),
      },
      content: {
        overflow: 'hidden',
        margin: 16,
        height: relativeWidth(150),
        // backgroundColor: '#408AE6',
        borderRadius: relativeWidth(8),
        padding: relativeWidth(8),
        justifyContent: 'flex-end',
      },
      tag: {
        backgroundColor: '#53D769',
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        height: relativeWidth(25),
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 8,
        marginRight: -relativeWidth(8),
        position:'absolute',
        top:0,
        right:8
      },
      tagText: {
        fontSize: relativeWidth(11),

        color: '#000000',
      },
      detailsRow: {
        marginTop: relativeWidth(4),
        alignItems: 'flex-end',
      },
      detailDiscount: {
        fontSize: relativeWidth(35),
        lineHeight: relativeWidth(52.5),
        color: '#000000',
        fontWeight: '600',

        marginTop: relativeWidth(36),
      },
      detailDate: {
        color: '#000000',
        opacity: 0.8,

        fontSize: relativeWidth(12),
      },

      descContainer: {
        // width: relativeWidth(335),
        marginTop: 16,
        backgroundColor: '#000000',
        padding: 24,
        marginBottom: 32,
      },
      edgeRemoveTopLeft: {
        ...edgeRemove,
        top: -16,
        left: -16,
      },
      edgeRemoveTopRight: {
        ...edgeRemove,
        top: -16,
        right: -16,
      },
      edgeRemoveBottomRight: {
        ...edgeRemove,
        bottom: -16,
        right: -16,
      },
      edgeRemoveBottomLeft: {
        ...edgeRemove,
        bottom: -16,
        left: -16,
      },
      title: {
        fontSize: relativeWidth(18),
        fontWeight: '400',
        textTransform: 'capitalize',
        color:'#000000'

      },
      descriptionTitle: {
        fontSize: 17,
        flexWrap: 'wrap',
        color:'white',
        lineHeight: relativeWidth(21),
        marginTop: 16,
      },
      description: {
        fontSize: 14,
        color: 'white',
        lineHeight: 17,
        opacity: 0.6,
      },
      price: {
        fontSize: 15,
        color: 'white',
        lineHeight: 17,
        opacity: 0.6,
        fontWeight:'700'
      },
      titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: relativeWidth(40),
      },
      header: {
        fontSize: 20,
        color: 'black',
        // fontFamily: fonts.primary,
        fontWeight: '600',
        marginTop:'2%',
        bottom:Platform.OS == "android"?'3%':'1%',
        
      },
      back:{
        alignSelf: 'flex-start',
        width:22,
        height:22
      },

      addPostButton:{
        position: 'absolute',                                          
        bottom: 45,
        right:20,
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
        height: 1,
        width: 1
        }, 
        borderWidth:2,
        borderColor:'#000000'
      },

      addPost:{
        width:26,
        height:26
      },

      //form
      inputHead:{flex:0,justifyContent:'space-between',flexDirection:'row'},
      multiline: {
        borderBottomColor: '#8F92A1',
        borderBottomWidth: 0.25,
        borderColor: 'white',
        borderRadius: 4,
        // color: COLORS.gray,
        fontSize: 14,
        fontWeight: '500',
        height: 122,
        paddingTop: 14,
        backgroundColor: 'rgba(247, 247, 247, 0.1)',
        color: '#000000',
      },
      errorMsg:{
        fontSize:12,
        color:'red'
      },
      submit:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000',
        width:150,
        height:40,
        borderRadius:12,
        borderWidth:1,
        borderColor:'white',
        alignSelf:'center',
        marginTop:'8%'
    },
    submitText:{
        color:'white',
        fontWeight:'bold'
    }


  
});

export default styles;
