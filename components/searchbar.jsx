import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity, Image} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import { Text } from "react-native-paper";
import AppLoading from "expo-app-loading";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {

  const countries = ["Job", "Internship"]
  const [ jobdes, type ] = React.useState("Job");
  return (
    <View style={styles.container}>
      <View
        style={styles.searchBar}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1, opacity: 0.4 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* Picker */}
      <View style={styles.picker}>
      <Picker style={{
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
      }} mode="dropdown" selectedValue={jobdes} onValueChange={(itemValue, itemIndex) =>
          type(itemValue)
        }>
          {countries.map((jobtype, index) => (
            <Picker.Item key={index} label={jobtype} value={jobtype} />
          ))}
        </Picker>
        </View>
        <TouchableOpacity style={styles.buttonGPlusStyle} onPress={() => {console.log()}}>
          <Image source={require("../assets/settings1.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginStart: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    marginBottom: 20,

  },
  picker: {
    width: "40%",
    height: "70%",
    borderRadius: 10,
    backgroundColor: "#f2f4f8",
    justifyContent: "center",
    position: "absolute",
    right: 7,

  },
  searchBar: {
    paddingStart: 10,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    height: 57,
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 20,
    
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    width: "90%",
  },
  buttonGPlusStyle: {
    width: "23%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 20,
  },
});