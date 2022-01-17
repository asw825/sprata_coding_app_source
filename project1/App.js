import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeProvider, Button ,FAB } from 'react-native-elements';
import APi from './Pages/APi';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';


// axios.get('http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList/resultCode')
//      .then(console.log('데이터 가져 오기성공'))

export default function App() {
  return (
    <ThemeProvider>
       <DetailPage/>
      <MainPage/> 
      {/* <APi/> */}
    </ThemeProvider>
  );
}

