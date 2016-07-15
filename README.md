
## Native Starter Kit v3.1.0

### A Starter Kit for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) Apps (iOS & Android)

*Brought to you by [StrapMobile](http://strapmobile.com/)*

[![Join the chat at https://gitter.im/start-react/native-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/start-react/native-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


![Native-Starter-Kit](/Screenshots/logo.png)


#### A simple starter project for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [Redux](http://redux.js.org) + [React Native Navigator](https://facebook.github.io/react-native/docs/navigator.html) + [CodePush](https://github.com/Microsoft/react-native-code-push) apps on iOS and Android.

No need of reinventing the wheel. To have immediately something to continue building on, it would be best to start from some starter kit for getting React Native - based applications off the ground in a hurry. 

This is a starter kit that you can install on the fly to get the basic plumping of React Native with NativeBase, Redux and CodePush. 

*Find out more [Free React.js and React Native Themes at StartReact.com](http://www.startreact.com/).*

# Content

-	[Screens](#screens)
-	[Technologies](#technologies)
-	[Installation](#installation)
-	[Featured Apps - Native Starter Pro](#featured-apps---native-starter-pro)


## Screens

 iOS | Android 
 :--:| :-----: 
 ![ios-demo](/Screenshots/ios-demo.gif) | ![android-demo](/Screenshots/android-demo.gif) 


## Technologies
*Technologies used in Native Starter Kit*

### [React Native](https://github.com/facebook/react-native)
React Native helps in making the development work easier and allowing the developers to focus on the core app features in every new release. It is the fastest-developing mobile app development that essentially permits you to create an isolated product with often outcomes.

**The hymn of React Native — learn once, write anywhere.**

React Native takes charge of the view controllers and programatically generates native views using javascript. This means that you can have all the speed and power of a native application, with the ease of development that comes with React.


### [NativeBase](nativebase.io)

NativeBase is a free and open source framework from the team of [StrapMobile](http://strapmobile.com/).

This framework enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6. NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development. 

The applications stack of components is built using native UI components and because of that, there are no compromises with the User Experience of the applications.  NativeBase is targeted specially on the look and feel, and UI interplay of your app. 

NativeBase without a doubt fits in well with mobile applications which cut downs one huge part of your app The Front end.

-	*[On GitHub](https://github.com/GeekyAnts/NativeBase)*
-	*[NativeBase Features](http://nativebase.io/documentation)*
-	*[NativeBase Components](http://nativebase.io/components)*
-	*[Docs](http://nativebase.io/documentation)*
-	*[Blogs](https://blog.nativebase.io/)*


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



### [Navigator](https://facebook.github.io/react-native/docs/navigator.html)

Navigation is a core part of any application. Native Satrter Kit makes use of [React Native](https://github.com/facebook/react-native) <Navigator /> component to help with navigation.



### [React Native Easy Grid](https://github.com/GeekyAnts/react-native-easy-grid)

React Native Easy Grid is a open source package for grid layout from the team of [StrapMobile](http://strapmobile.com/).

The layout system is an essential concept that needs to be mastered in order to create great layouts and UIs. [React Native](https://github.com/facebook/react-native) uses Flexbox to create the layouts, which is great when we need to accommodate our components and views in different screen sizes or even different devices. Flexbox is awesome but it could be tiresome for newbies.

Easy Grid is very powerful and flexible layout system. No more worries about props of Flexbox such as alignItems, flexDirection, justifyContent, margin, padding, position, width etc. You can create any layout with all the available options that we have. Flexbox makes it look like percentages, however what actually is happening is just ratios. On the easier part, ratios are easier to represent than percentage/decimals. For this reason, the Easy Grid takes in ratios in place of percentage. 
Performance wise, Easy Grid is noteworthy and works as fine as Flexbox, not much of calculation.

[More Examples](http://nativebase.io/docs/v0.4.6/components#layout) . . .


## Installation
####1. Clone this project or Download that ZIP file

```sh
$ git clone https://github.com/start-react/native-starter-kit.git
```

####2.  System Requirements

*	Globally installed [npm](https://www.npmjs.org/)

*	Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.

####3. On the command prompt run the following commands

```sh
$ cd native-starter-kit/

$ npm install

$ rnpm link
```

####4. Simulate for iOS

**Method One**

*	Open the project in XCode from **ios/NativeStarterKit.xcodeproj**

*	[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation:

	*	Go to **"Build Phases"** tab of your project configuration.

	*	Click **"+"** underneath the **"Link Binary With Libraries"** list and select the **libz.tbd** library underneath the iOS node that matches your target version.

	![CodePush-plugin-installation](/Screenshots/codepush-plugin-installation.png)

*	CodePush key deployment

	*	Go to **"Build Settings"** and search for keyword - **codepush**.

	*	Add the **codepush production key** in place of **Release key**

	*	Add the **codepush staging key** in place of **Debug key**

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal

```sh
$ react-native run-ios
```

####5. Simulate for Android

*	Codepush key deployment

	*	Open file **/android/app/build.gradle**

	*	Seacrh for **buildTypes** and add following lines of code

```sh
.  .  .
buildTypes {
    release {
        buildConfigField "String", "CODEPUSH_KEY", "codepush production key"
        .  .  .
    }

    debug {
        buildConfigField "String", "CODEPUSH_KEY", "codepush staging key"
    }
}
.  .  .
```

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```

Note: If you are building Native Starter Kit for first time on your system, please follow Method One to simulate on iOS. (To link the CodePush plugin through Xcode for iOS)



## Featured Apps - Native Starter Pro
Having tried with the free version, Native Starter Kit and appreciate our product?

Get on the mobile fast track with [Native Starter Pro](http://strapmobile.com/native-starter-pro/), to build high-quality iOS and Android mobile apps. 

Based on [React Native](https://facebook.github.io/react-native/) and [NativeBase](http://nativebase.io/docs/v0.4.6/), Native Starter Pro is a beautifully designed, responsive iOS and Android app source code to quickly get started on your next project. 

Native Starter Pro is a flexible React Native theme, built using [NativeBase](http://nativebase.io/documentation) and [Redux](https://github.com/reactjs/react-redux) with fusion of [ES6](http://es6-features.org/#Constants) which is best suited for developing apps that makes use of ready-made tools. The theme has several widget areas that allows you to extend your theme functionality with plugins. 

Native Starter Pro includes following ready-to-use and highly customizable components :

-	Button with various shapes and themes
-	Textbox
-	Form Elements
-	List
-	Header
-	Footer
-	Drawer
-	Full fledged collection of Icons
-	Spinner:Animated loading indicators which are flexible in diverse size and color.
-	ProgressBar: To visualize the process of work.
-	Modal
-	Ready to use Email Template
-	Interactive design of Calendar with fast swiping feature.
-	Scroll between the tabs
-	Responsive Navigator
-	Chat Messenger
-	Ready to use screens
-	Easy theme customization
-	[Read More](http://strapmobile.com/docs/native-starter-pro/v3.1/)

**Quick links to Native Starter Pro**

-	*[Native Starter Pro Features](http://strapmobile.com/docs/native-starter-pro/v3.1/overview/whats-new-in-v3-1)*
-	*[Native Starter Pro Components](http://strapmobile.com/docs/native-starter-pro/v3.1/components)*
-	*[Native Starter Pro's App Generator](http://strapmobile.com/customizer/#/color)*
-	*[Native Starter Pro Releases](http://strapmobile.com/native-starter-pro-releases/)*




