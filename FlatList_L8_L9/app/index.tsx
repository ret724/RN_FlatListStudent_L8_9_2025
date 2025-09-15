import ListItemSeparator from "@/components/ListItemSeperator";
import { DATA, dataType } from "@/data/appData";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [selectedId, setSelectedId] = useState<string>("1");

  const itemSelected = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data = {DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator color='red'/>}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => itemSelected(item)}>
                <View style={[styles.flatListRow, {backgroundColor: item.id === selectedId ? colors.primary : colors.secondary}]}>
                  <Text style={[styles.titleText, {color: item.id === selectedId ? colors.text.light : colors.text.dark}]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
