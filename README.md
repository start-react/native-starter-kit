**Discontinued in favour of [ReactNativeSeed.com](https://reactnativeseed.com/)**

## Native Starter Kit v6.1.0

### A Starter Kit for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](https://nativebase.io/) + [React Navigation](https://reactnavigation.org/) + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) Apps (iOS & Android)

*Brought to you by [NativeBase](https://nativebase.io/)*


![Native-Starter-Kit](/Screenshots/logo.png)


#### A simple starter project for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](https://nativebase.io/) + [React Navigation](https://reactnavigation.org/) + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) apps on iOS and Android.
**Note:** Shifted to [React Navigation](https://reactnavigation.org/) from [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) in the master branch. [React Navigation](https://reactnavigation.org/) has become standard for navigation solution in [React Native](https://facebook.github.io/react-native/docs/getting-started.html). We are just keeping up with the current trend.

No need of reinventing the wheel. To have immediately something to continue building on, it would be best to start from some starter kit for getting React Native - based applications off the ground in a hurry.

This is a starter kit that you can install on the fly to get the basic plumbing of React Native with NativeBase, Redux and CodePush.

*Find out more Free [React JS Themes](http://www.startreact.com/) and [React Native Themes](https://www.startreact.com/).*

# Content

-	[Screens](#screens)
-	[Technologies](#technologies)
-	[Get Started](#get-started)


## Screens

 ![ios-demo](/Screenshots/iOS/demo.gif)

## Technologies
*Technologies used in Native Starter Kit*

### [React Native](https://github.com/facebook/react-native)
React Native helps in making the development work easier and allowing the developers to focus on the core app features in every new release. It is the fastest-developing mobile app development that essentially permits you to create an isolated product with often outcomes.

**The hymn of React Native — learn once, write anywhere.**

React Native takes charge of the view controllers and programmatically generates native views using javascript. This means that you can have all the speed and power of a native application, with the ease of development that comes with React.


### [NativeBase](https://nativebase.io/)

NativeBase is a free and open source framework.

This framework enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6. NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development.

The applications stack of components is built using native UI components and because of that, there are no compromises with the User Experience of the applications.  NativeBase is targeted specially on the look and feel, and UI interplay of your app.

NativeBase without a doubt fits in well with mobile applications which cut downs one huge part of your app The Front end.

-	*[On GitHub](https://github.com/GeekyAnts/NativeBase)*
-	*[NativeBase Features](https://docs.nativebase.io/)*
-	*[NativeBase Components](https://docs.nativebase.io/Components.html#Components)*
-	*[Docs](https://docs.nativebase.io/Components.html#Components)*
-	*[Blog](https://blog.nativebase.io/)*


### [Redux](http://redux.js.org)

As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. UI state is also increasing in complexity, as we need to manage the active route, the selected tab, whether to show a spinner or not, should pagination controls be displayed, and so on.

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the steps of three.

-	The **state** of whole application is stored in an object tree within a single **store**.
-	The only way to mutate the state is to emit an **action**, an object describing what happened.
-	To specify how the state tree is transformed by actions, you write pure **reducers**.


### [CodePush](https://github.com/Microsoft/react-native-code-push)

React Native app is composed of JavaScript files, images, which are bundled together by the packager and distributed as part of a platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code or image assets, requires you to recompile and redistribute the entire binary.

The CodePush plugin helps get product improvements in front of your end users instantly, with the aid of preserving your javascript and images synchronized with updates you launch to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available.



### [React Navigation](https://reactnavigation.org/)
[React Navigation](https://reactnavigation.org/) is a routing package that allows you to:
  * Declare different kinds of Routers.
  * Routers fall into the category of **StackNavigator ,** **DrawerNavigator ,** and **TabNavigator**.
  * We can also nest these Routers for more complex transitions.



### [React Native Easy Grid](https://github.com/GeekyAnts/react-native-easy-grid)

React Native Easy Grid is an open source package for grid layout from the team of [NativeBase](https://nativebase.io/).

The layout system is an essential concept that needs to be mastered in order to create great layouts and UIs. [React Native](https://github.com/facebook/react-native) uses Flexbox to create the layouts, which is great when we need to accommodate our components and views in different screen sizes or even different devices. Flexbox is awesome but it could be tiresome for newbies.

Easy Grid is very powerful and flexible layout system. No more worries about props of Flexbox such as alignItems, flexDirection, justifyContent, margin, padding, position, width etc. You can create any layout with all the available options that we have. Flexbox makes it look like percentages, however what actually is happening is just ratios. On the easier part, ratios are easier to represent than percentage/decimals. For this reason, the Easy Grid takes in ratios in place of percentage.
Performance wise, Easy Grid is noteworthy and works as fine as Flexbox, not much of calculation.

[More Examples](https://docs.nativebase.io/Components.html#Layout) . . .


### [React Native-NativeBase Seed](https://github.com/GeekyAnts/react-native-native-base-seed)

React Native-NativeBase Seed is a basic configuration that every React Native app must have.

This is open source and perfect for any newbie to start with React Native.

This is a [React Native](https://github.com/facebook/react-native) Project with [NativeBase](https://docs.nativebase.io/), [React Navigation](https://reactnavigation.org/), [Redux](http://redux.js.org/), [CodePush](https://github.com/Microsoft/react-native-code-push), Push Notification and other basic must-have libraries.


## Get Started

### 1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.


### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/start-react/native-starter-kit.git

$ cd native-starter-kit/

$ npm install
```

```sh
$ react-native link
```

[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation and key deployment.


### 3. Simulate for iOS

**Method One**

*	Open the project in XCode from **ios/NativeStarterKit.xcodeproj**

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal

```sh
$ react-native run-ios
```

### 4. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```

Note: If you are building Native Starter Kit for first time on your system, please follow Method One to simulate on iOS. (To link the CodePush plugin through Xcode for iOS)


For apps with more advance designs, please visit **[NativeBase Market](https://market.nativebase.io/)**.
