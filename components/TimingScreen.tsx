import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';

const TimingScreen = () => {
  const [salahTime, setSalahTime] = useState({});
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  const fetchSalahTimings = async () => {
    try {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1; // Month is zero-based, so add 1
      const api = `http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=30.033333&longitude=31.233334&method=2`;

      const response = await fetch(api);
      const json = await response.json();

      if (json.data && json.data.length > 0) {
        const todayTimings = json.data[0].timings;
        setSalahTime(todayTimings);
      } else {
        console.error('No data available for today.');
        Alert.alert('Error', 'No data available for today.');
      }
    } catch (error) {
      console.error('Error fetching Salah times:', error);
      Alert.alert('Error', 'Failed to fetch Salah times. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchSalahTimings();
  }, []);

  return (
    <View style={styles.parent}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {Object.keys(salahTime).map((key) => (
            <Text key={key} style={styles.text}>
              {key}: {salahTime[key]}
            </Text>
          ))}
          <View style={{ marginTop: 20 }}>
            <Button title="Refresh" onPress={fetchSalahTimings} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D2233',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
});

export default TimingScreen;
