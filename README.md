# Larn - Educational Mobile App

Larn is a modern educational mobile application built with React Native and Expo, featuring a dark theme and Google authentication. The app integrates with Firebase for backend services and the Deepseek API for generating educational content.

## Features

- Dark theme UI
- Google Authentication
- Firebase Integration
- Deepseek API Integration for educational content
- React Navigation for seamless screen transitions
- React Native Paper for UI components
- TypeScript support

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Firebase account
- Deepseek API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/larn.git
cd larn
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=your_google_ios_client_id
EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=your_google_android_client_id
DEEPSEEK_API_KEY=your_deepseek_api_key
```

4. Start the development server:
```bash
npx expo start
```

## Project Structure

```
larn/
├── assets/           # Static assets
├── src/
│   ├── config/      # Configuration files
│   ├── contexts/    # React Context providers
│   ├── screens/     # Screen components
│   └── theme/       # Theme configuration
├── App.tsx          # Root component
└── package.json     # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 