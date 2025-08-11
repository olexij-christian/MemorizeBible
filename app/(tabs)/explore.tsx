import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Alert } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { getVersesList } from '@/utils/BibleVerses';

import { useSQLiteContext } from "expo-sqlite";

let db

const data = getVersesList();

const onPressVerse = async (verseString) => {
  const allRows = await db.getAllAsync('SELECT * FROM verses')
  Alert.alert('Додати вірш в план', verseString + "\n " + allRows.length, [{
    text: "Відмінити",
  }, {
    text: "Додати",
  }]);
};

export default function BibleVersesLibrary() {
  db = useSQLiteContext();
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title} type="title">Додай віршів у план вивчення 📚</ThemedText>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => onPressVerse(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  title: {
    marginLeft: 20,
    marginTop: 10,
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});

