//make a flatlist of MyComponent

import { faker } from '@faker-js/faker';
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MyComponent from './card';


export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [
            {
            id: 1,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: true,
            image: require('../assets/google.png'),
            },
            {
            id: 2,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: true,
            image: require('../assets/google.png'),
            },
            {
            id: 3,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: true,
            },
            {
            id: 4,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            },
            {
            id: 5,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            },
            {
            id: 6,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            },
            {
            id: 7,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            },
            {
            id: 8,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            },
            {
            id: 9,
            title: faker.name.jobTitle(),
            salary: '20 - 50K/month',
            type: 'Full time',
            }
        ]
        };
    }

    render() {
        return (
            <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item }) => <MyComponent/>}
            keyExtractor={item => item.id.toString()}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


