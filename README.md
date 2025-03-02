# SnapReact

A React Native iOS app built with TypeScript and Tamagui UI components.

## Project Overview

SnapReact is a mobile application built with React Native for iOS devices. It demonstrates the use of Tamagui, a UI library focused on performance and consistency across platforms.

## Features

- Clean, modern UI with React Native components
- Integration with Tamagui UI library
- Counter application example
- Tamagui component showcase

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- Yarn or npm
- Xcode (for iOS development)
- CocoaPods (for iOS dependencies)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:yourusername/snap-react.git
cd snap-react
```

2. Install the dependencies:
```bash
yarn install
# or npm install
```

3. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

4. Run the app:
```bash
yarn ios
# or npm run ios
```

## Using Tamagui in Your Components

Tamagui is already set up in this project. Here's how to use it:

1. Import components from Tamagui:
```typescript
import { Button, Text, YStack } from 'tamagui';
```

2. Use them in your component:
```typescript
<YStack spacing="$4" padding="$5">
  <Text fontSize="$6" fontWeight="bold">Hello Tamagui!</Text>
  <Button theme="blue">Click me</Button>
</YStack>
```

3. Check out the `TamaguiDemo.tsx` file for a more comprehensive example.

## Troubleshooting TypeScript Issues

If you encounter TypeScript errors with Tamagui components:

1. Make sure you're using the latest version of Tamagui
2. Try wrapping content in appropriate containers
3. Use proper typing for props and state

## Performance Optimization

This project uses the Tamagui Babel plugin for better performance:

- Static extraction of styles
- Smaller bundle size
- Better runtime performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 