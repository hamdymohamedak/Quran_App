import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import EslamData from './EslamCummunityData';
const EslamCommunity = () => {
  const [communityData, setCommunityData] = useState(EslamData);

  const handleProfileClick = profileLink => {
    Linking.openURL(profileLink);
  };

  return (
    <View style={styles.parent}>
      <ScrollView style={styles.scrollingStyle} horizontal={true}>
        {communityData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleProfileClick(item.personProfileLink)}>
            <View style={styles.storeCard}>
              <Image style={styles.storeCardImgs} source={item.personImg} />
              {/* Render personName within a Text component */}
              <Text style={styles.normalText}>{item.personName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={{
        fontWeight: "bold",
        marginBottom: "20%",
        width: "90%",
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#863ED5",
        elevation: 3,
        shadowColor: '#863ED5',
        shadowOpacity: 1,
        shadowRadius: 3,
        padding: 5,

      }}>رَبِّ اشْرَحْ لِي صَدْرِي . وَيَسِّرْ لِي أَمْرِي . وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي . يَفْقَهُوا قَوْلِي رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#1D2233',
  },
  scrollingStyle: {
    marginTop: '10%',
  },
  storeCard: {
    backgroundColor: '#3B1E77',
    overflow: 'hidden',
    height: 470,
    width: 270,
    borderRadius: 20,
    shadowColor: '#863ED5', // Add shadow properties for iOS
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 10,
    shadowRadius: 3,
    margin: 2,
    borderWidth: 2,
    borderColor: '#3B1E77',
  },

  storeCardImgs: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    shadowColor: '#863ED5',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 10,
    shadowRadius: 3,
  },
  normalText: {
    fontWeight: '600',
    fontSize: 15,
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
  },
});


export default EslamCommunity;
