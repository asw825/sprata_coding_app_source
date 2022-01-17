import React from 'react'

import { View, StyleSheet, Image, FlatList } from 'react-native';
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
  Rating, 
  RatingProps
} from 'react-native-elements';

function DetailPage() {
    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
      };
    
      const ratingProps = {};
    return (
        <>  
            <View style={styles.container}>
                <View>
                    <Text>선별진료소</Text>
                </View>
                <View>
                    <Text>위치</Text>
                </View>
                <View style={styles.list}>
                    <ListItem style={{borderRadius : 5, borderWidth : 2 , width : '100%'}}>
                            {/* <Avatar source={'https://randomuser.me/api/portraits/women/57.jpg'} /> */}
                            <ListItem.Content>
                                <ListItem.Title>
                                    글쓰기
                                </ListItem.Title>
                                <View style={styles.subtitleView}>
                                    <Rating
                                        imageSize={20}
                                        onFinishRating={ratingCompleted}
                                    />
                                    <View style={{display : 'flex' , flexDirection : 'row' }}>
                                        <View>
                                            <Text>대기시간</Text>
                                            <Text style={styles.ratingText}>날짜</Text>
                                        </View>
                                        <View>
                                            <Button containerStyle={{width :70 }} title={'글쓰기'}/>
                                        </View>
                                    </View>
                                </View>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem style={{borderRadius : 5, borderWidth : 2 , width : '100%'}}>
                            {/* <Avatar source={'https://randomuser.me/api/portraits/women/57.jpg'} /> */}
                            <ListItem.Content>
                                <ListItem.Title>
                                    글쓸내용
                                </ListItem.Title>
                                <View style={styles.subtitleView}>
                                    <Rating
                                        imageSize={20}
                                        onFinishRating={ratingCompleted}
                                    />
                                    <View>
                                        <Text>대기시간</Text>
                                        <Text style={styles.ratingText}>날짜</Text>
                                    </View>
                                    <View>
                                        <Text>추천</Text>
                                        <Text>비추천</Text>
                                    </View>
                                </View>
                            </ListItem.Content>
                        </ListItem>
                </View>
            </View>
        </>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top : 40,
      },
    list: {
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: colors.greyOutline,
      display : 'flex'
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5,
    },
    ratingImage: {
      height: 19.21,
      width: 100,
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey',
    },
  });

export default DetailPage
