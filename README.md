# React Native iOS App

A React Native application for iOS built with TypeScript.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or newer)
- Yarn (v1.22 or newer)
- Xcode (latest version)
- CocoaPods
- Ruby version compatible with the React Native iOS requirements

## Initial Setup

1. Clone the repository:
```
git clone https://github.com/YOUR_USERNAME/snap-react.git
cd snap-react
```

2. Install project dependencies:
```
yarn install
```

3. Install CocoaPods dependencies (iOS):
```
cd ios && pod install && cd ..
```

## Running the App

### iOS

To run the app on an iOS simulator:

```
yarn ios
```

Or to run on a specific iOS device/simulator:

```
yarn ios --simulator="iPhone 14 Pro"
```

## Project Structure

- `/ios` - Contains iOS native code
- `App.tsx` - Main application component
- `index.js` - Application entry point

## Technologies Used

- React Native 0.72.6
- TypeScript
- iOS Native Modules

## Development Commands

- `yarn start` - Start the Metro bundler
- `yarn lint` - Run the linter
- `yarn test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 