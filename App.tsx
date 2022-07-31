import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/cardlist';
import Header from './components/header';
import SearchBar from './components/searchbar';

export default function App() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar
        searchPhrase={searchQuery}
        setSearchPhrase={setSearchQuery}
        clicked={clicked}
        setClicked={setClicked}
      />
      <CardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginStart: 10,
    marginEnd: 10,
  },
  searchbar: {
    marginTop: 100,
    marginBottom: 10,
  },
});
