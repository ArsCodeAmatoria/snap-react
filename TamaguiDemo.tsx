import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, H1, Paragraph, XStack, YStack } from 'tamagui';

interface TamaguiDemoProps {
  onClose: () => void;
}

/**
 * A sample Tamagui component that can be imported and used later
 * when the TypeScript issues are resolved
 */
export function TamaguiDemo({ onClose }: TamaguiDemoProps) {
  return (
    <View style={styles.container}>
      <YStack space="$4" padding="$4">
        <H1>Tamagui Demo</H1>
        <Paragraph>
          This is a sample Tamagui component that demonstrates some of the UI components.
          You can use this as a reference when building your own components.
        </Paragraph>
        
        <XStack space="$4" justifyContent="center">
          <Button theme="blue" size="$4">
            Button 1
          </Button>
          <Button theme="green" size="$4">
            Button 2
          </Button>
          <Button theme="red" size="$4">
            Button 3
          </Button>
        </XStack>
        
        <Button onPress={onClose} theme="gray" size="$3">
          Close Demo
        </Button>
      </YStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TamaguiDemo; 