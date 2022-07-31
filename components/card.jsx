import { faker } from '@faker-js/faker';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Image source={
    require('../assets/google.png')
} {...props} style={{
    borderRadius: 30,
    backgroundColor: "#ffffff",
}}/>

function MyComponent(){ 

  const [fontsLoaded] = useFonts({
        'Product_Sans_Bold': require('../assets/fonts/Product_Sans_Bold.ttf'),
        'Product_Sans': require('../assets/fonts/Product_Sans.ttf'),
    });

    if (!fontsLoaded) {
        return null
    }
  return(
  <Card style={{
    marginTop: 20,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 25,
    elevation:3,
    height: 165,
    shadowColor: 'black',
    justifyContent: 'center',
  }}>
    <Card.Title leftStyle={{ marginTop: 10 }} title={faker.name.jobTitle()} titleStyle={{
        fontSize: 20,
        fontFamily:'Product_Sans_Bold',
        marginStart: -5,
        marginTop: 10,
    }} left={LeftContent}/>
    <Card.Content style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    }}>
      <Paragraph style={{
        fontSize: 12,
        opacity: 0.7,
        fontFamily:'Product_Sans',
      }}>20 - 50K/month</Paragraph>
      <Paragraph style={{
            marginLeft: 20,
            backgroundColor: "#f2f4f8",
            fontSize: 11,
            fontFamily:'Product_Sans',
            padding: 5,
            borderRadius: 10,
      }}> Full time </Paragraph>
    </Card.Content>
    <Card.Content style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: -5,
        justifyContent: "space-between",
    }}>
    <Card.Content style={{
        flexDirection: "row",
        marginLeft: -15,
    }}
    >
    <Paragraph style={{
        fontSize: 14,
        fontFamily:'Product_Sans_Bold',
    }}>Newziland</Paragraph>
    <Paragraph style={{
        opacity: 0.7,
    }}
    >{' \u25CF'}</Paragraph>
    <Paragraph style={{
        fontSize: 12,
        opacity: 0.7,
        fontFamily:'Product_Sans',
    }}> 10 days ago</Paragraph>
        </Card.Content>
    <Card.Actions>
      <Button style={{
        borderRadius: 10,
        backgroundColor: "#0069ff",
        padding: 3,
        height: 35,
        width: 80,
      }}
      >
        <Text style={{
            color: "#ffffff",
            fontSize: 10.2,
            fontFamily:'Product_Sans_Bold',
        }}>Apply</Text>
      </Button>
    </Card.Actions>

        </Card.Content>
  </Card>
)};

export default MyComponent