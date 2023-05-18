
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrScreen() {
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === 'granted') {
        setScanned(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.dataContainer}>
          <Text style={styles.data}>{data}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  dataContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  data: {
    fontSize: 20,
  },
});


