import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// declare data type for props here

type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}

const ListItem: React.FC<propsType> = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={[styles.flatListRow, {backgroundColor: isSelected ? colors.primary : colors.secondary}]}>
        <Text style={[styles.titleText,  {color: isSelected ? colors.text.light : colors.text.dark}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>);
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
    flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
  flatListRow: {
    // backgroundColor: "lightgreen",
    margin: 5,
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});
