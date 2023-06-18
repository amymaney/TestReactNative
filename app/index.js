import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 960,
    padding: 24,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  header:{
    marginBottom: 20
  }
});

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        
        <Text style={styles.title}>bookify</Text>
        <Text style={styles.subtitle}>enhance your reading experience</Text>
        
        <div style={styles.header}> </div>

        <Button
              title="start"
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 30
                
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{
                color: 'black'
              }}
            />

      </View>
    </SafeAreaProvider>
  );
}



