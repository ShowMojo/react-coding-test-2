# React Native Test
### In order to be considered for a React Native position, you must complete the following steps.
Note: This task should take no longer than 2 hours to complete.


## Show Timezones
This is a boilerplate for displaying timezone list after logged in using react-native, react-navigation, redux and redux-saga.

Contains: 

* ES6 - 7 Support with Babel
* eslint to keep your js readable

## Prerequisites
* A suitable IDE, ie WebStorm, VSCode etc
* Ideally bash terminal
* Node, YARN

## Run the service
1. Open a new bash shell
2. ```cd httpService```
3. ```node app.js```

## Run the app
- Run the app on Android device.
1. Open a new bash shell
2. ```yarn install```
3. ```yarn android```

- Run the app on iOS device.
1. Open a new bash shell
2. ```yarn install```
3. ```cd ios```
4. ```pod install```
5. ```cd ..```
3. ```yarn ios```

## Run the tests
1. Open a new bash shell
2. ```yarn test```

## Existing features
1. LogInPage
- There are 2 input boxes to input the account and password, and 1 button to log in.
- When you press the button, the app will make an HTTP request to log in.
- If successful to log in, the app will navigate to the TimezoneListPage.
2. Redux
- There are actions, reducers, and sagas implemented for log-in HTTP requests.

## Requirements
We need you to implement the app that shows the timezone list after logged in. The list of timezones will be provided from http request. And this app should work on both iOS and Android devices or emulators.

1. Service interaction:
    There is a [node service](httpService/) in this repo that will interact with this app via http request.
2. UI:
    To render UI results you need to implement components, reducers and actions using redux-saga middleware.
    - Complete the `LogInPage`
        * Once the log-in is successful, the app should do automatically logged in when start.
        * If the log-in fails, the app should show the error message. You could use toast or alert as you wish.
    - Implement the `TimezoneListPage`
        * This page should have a list and a button. Place them as you wish. A better design would be a bonus.
        * The list should show the list of timezones from the [node HTTP service](httpService/) and can pull to refresh. The HTTP service provide the `id`, `value` and `text` properties for each timezone. The list item should show the `value` and `text` properties. A better design would be a bonus as well.
        * The button has an icon and a title(`Log out`). The `react-native-vector-icon` package is already included as library. You could use proper icon from the package. 
        * The function of the button is log-out. When logged out, the app should be navigated to back to the LogInPage and the related states in reducers should be initialized. And the auto log-in should be disabled.
    - Components: At least you should write a UI component for those items of the list.
    - All the HTTP request should show the activity indicator.
3. Testing:
    We need test coverage for any code implemented. Enzyme is already included as library, however feel free to implement any tests in your choice of framework.

## Once Complete
1. Commit and Push your code to your new repository
2. Send us a pull request. We will review your code and get back to you
