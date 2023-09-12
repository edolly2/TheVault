import React from 'react';
import {StyleSheet, View, Text, Pressable, ToastAndroid} from 'react-native';
const Button = () => {
  return (
    <Pressable
      style={styles.btnContainer}
      android_ripple={{color: '#a1a1a1', foreground: true}}>
      {/* <View> */}
      <Text style={styles.btnText}>Login</Text>
      {/* </View> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // flex: 1,
    overflow: 'hidden',
    backgroundColor: '#2e2e2e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b19a1b',
  },
});

export default Button;
