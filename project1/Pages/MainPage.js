import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button ,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];


const MainPage = () => {
  return (
    <>
        <View style={styles.container}>
        <View style={styles.inputForm}>
            <Input
            placeholder='선별진료소를 검색해주세요'
            />
            <Icon
            name="search-outline"
            color="black"
            style={{fontSize :30}}
            />
        </View>
       <ScrollView>
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          </ScrollView>
        </View>
     
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top : 40
  },
  inputForm :{
    width : 360,
    maxWidth : 360,
    display:'flex',
    flexDirection : 'row'
  }
});

export default MainPage;