import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { washData } from "./washData";

const Wash = () => {
  const [theData, setTheData] = useState(washData || []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {theData && theData.length > 0 ? (
        theData.map((content, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={styles.card}>
              <Image resizeMode='contain' style={styles.cardImg} source={require("./someData/WashImg.jpg")} />
              <Text style={styles.cardText}>
                {content.theText}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1D2233",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  cardContainer: {
    alignItems: "center",
  },
  card: {
    overflow: "hidden",
    width: "90%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#A44AFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardImg: {
    height: 200,
    marginTop: 20
  },
  cardText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
  }
});

export default Wash;
