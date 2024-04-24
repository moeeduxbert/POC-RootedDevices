import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import JailMonkey from 'jail-monkey';

const App = () => {
  const [deviceStatus, setDeviceStatus] = useState('');

  useEffect(() => {
    if (JailMonkey.isJailBroken()) {
      setDeviceStatus('The Device is Jailbroken');
    } else {
      setDeviceStatus('The Device is Fine to Use');
    }
  }, []);
  console.log(deviceStatus);
  return (
    <SafeAreaView style={style.container}>
      <Text>{deviceStatus}</Text>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
