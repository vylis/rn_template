/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <View testID="view" style={styles.container}>
        <Text testID="title" style={styles.title}>
          Title
        </Text>
        <Text testID="text" style={styles.text}>
          Test App
        </Text>

        <TouchableOpacity
          testID="pressable"
          style={styles.pressable}
          onPress={() => {
            setShow(!show);
          }}
        >
          <Text style={styles.text}> Click Me</Text>
        </TouchableOpacity>
        {show && (
          <Text testID="hidden" style={styles.text}>
            Hidden Word
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  title: {
    margin: 20,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  text: {
    margin: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
  },
  pressable: {
    padding: 40,
    backgroundColor: "red",
  },
});

export default App;
