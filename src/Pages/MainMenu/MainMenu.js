// import React, {useState, useRef} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   ScrollView,
// } from 'react-native';

// const MainMenu = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [listData, setListData] = useState([]);
//   const [showEmptyText, setShowEmptyText] = useState(true);

//   const inputRef = useRef(null);

//   const handleInputChange = text => {
//     setInputValue(text);
//   };

//   const handleButtonPress = () => {
//     if (inputValue.trim() !== '') {
//       setListData(prevData => [...prevData, inputValue]);
//       setInputValue('');
//       inputRef.current.clear();
//       setShowEmptyText(false);
//     }
//   };

//   const handleItemDelete = index => {
//     const newData = [...listData];
//     newData.splice(index, 1);
//     setListData(newData);

//     if (newData.length === 0) {
//       setShowEmptyText(true);
//     }
//   };

//   const renderListItem = ({item, index}) => (
//     <ScrollView>
//       <View style={styles.listItem}>
//         <Text style={styles.listItemText}>{item}</Text>
//         <TouchableOpacity onPress={() => handleItemDelete(index)}>
//           <Text style={styles.deleteButton}>x</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           ref={inputRef}
//           style={styles.input}
//           placeholder="İsim Giriniz."
//           placeholderTextColor={'#841584'}
//           onChangeText={handleInputChange}
//           value={inputValue}
//           editable={true}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
//           <Text style={styles.buttonText}>EKLE</Text>
//         </TouchableOpacity>
//       </View>
//       {showEmptyText && (
//         <View style={styles.centerContainer}>
//           <Text style={styles.centerText}>Boş</Text>
//         </View>
//       )}
//       <FlatList
//         data={listData}
//         renderItem={renderListItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <TouchableOpacity style={styles.playButton}>
//         <Text style={styles.playText}>OYNA</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MainMenu;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   // İNPUT
//   inputContainer: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#4a044e',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     paddingLeft: 8,
//     paddingRight: 8,
//     fontWeight: '500',
//     fontSize: 16,
//     color: '#841584',
//   },
//   button: {
//     backgroundColor: '#4a044e',
//     padding: 10,
//     borderTopRightRadius: 9,
//     borderBottomRightRadius: 10,
//   },
//   buttonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     letterSpacing: 1.4,
//     color: 'white',
//     textAlign: 'center',
//   },
//   listItem: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 10,
//     borderRadius: 10,
//     backgroundColor: '#4a044e',
//   },
//   listItemText: {
//     fontSize: 16,
//     letterSpacing: 1.2,
//     color: '#fff',
//   },
//   deleteButton: {
//     fontSize: 20,
//     color: '#fff',
//     marginLeft: 10,
//   },
//   // CENTER TEXT
//   centerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   centerText: {
//     fontSize: 22,
//     fontWeight: '700',
//     letterSpacing: 1.1,
//   },
//   // PLAY BUTTON
//   playButton: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   playText: {
//     fontSize: 20,
//     fontWeight: '600',
//     width: 150,
//     padding: 20,
//     borderRadius: 30,
//     textAlign: 'center',
//     backgroundColor: '#4a044e',
//     color: '#fff',
//   },
// });
