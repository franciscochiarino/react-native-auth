# react-native-auth

A React Native app with Firebase Auth and Analytics included.

## Setup

After you created your project, follow these steps to connect your application:

### Android

1. In the firebase console, select the Android option.

2. Add your android package name. You'll find it in `/android/app/build.gradle` under the `namespace` key.

3. In the next step, download the google-services.json file and replace the current one in `/android/app/google-services.json`.

4. Skip the rest of the steps in the firebase console.

### iOS

1. In the firebase console, select the iOS option.

2. Open your project with xcode by going to your project folder in finder and double-clicking `/ios/<your-project-name>.xcworkspace`. The bundle ID can be found within the "General" tab.

3. Download the GoogleService-Info.plist and replace the one you already have in your project folder in xcode. Make sure you remove the other one first and that the "copy" checkbox is checked when you drop the file.

4. Skip the rest of the steps in the firebase console.

## Auth

In the firebase console select Authentication and get started with the Email/Password option.

## Getting Started

Run your app using `yarn start`. Open it on the simulator of your choice.
Signup with a user and password of your choice. You should be redirected to the home screen and see a new user in the firebase console. Remember to turn on analytics from your firebase console.
