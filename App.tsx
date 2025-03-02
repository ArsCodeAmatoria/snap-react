import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  useColorScheme, 
  View, 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import TamaguiDemo from './TamaguiDemo';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [showTamaguiDemo, setShowTamaguiDemo] = useState(false);

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to SnapReact</Text>
          <Text style={styles.subtitle}>A React Native iOS app with Tamagui</Text>
          
          <View style={styles.counterContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.buttonSubtract, count === 0 && styles.buttonDisabled]}
              onPress={() => setCount(prev => Math.max(0, prev - 1))}
              disabled={count === 0}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.counter}>{count}</Text>
            
            <TouchableOpacity 
              style={[styles.button, styles.buttonAdd]}
              onPress={() => setCount(prev => prev + 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.demoButton, { marginTop: 30 }]}
            onPress={() => setShowTamaguiDemo(true)}
          >
            <Text style={styles.buttonText}>Show Tamagui Demo</Text>
          </TouchableOpacity>
        </View>
        
        {showTamaguiDemo && (
          <View style={styles.overlay}>
            <TamaguiDemo onClose={() => setShowTamaguiDemo(false)} />
          </View>
        )}
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60
  },
  buttonAdd: {
    backgroundColor: '#4285F4'
  },
  buttonSubtract: {
    backgroundColor: '#DB4437'
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC'
  },
  resetButton: {
    backgroundColor: '#0F9D58',
    paddingHorizontal: 30
  },
  demoButton: {
    backgroundColor: '#673AB7',
    paddingHorizontal: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App; 