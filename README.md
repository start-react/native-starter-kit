
## Native Starter Kit v5.0.0

### A Starter Kit for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) Apps (iOS & Android)

*Brought to you by [StrapMobile](http://strapmobile.com/)*

[![Join the chat at https://gitter.im/start-react/native-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/start-react/native-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


![Native-Starter-Kit](/Screenshots/logo.png)


#### A simple starter project for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [Redux](http://redux.js.org) + [React Native Navigator](https://facebook.github.io/react-native/docs/navigator.html) + [CodePush](https://github.com/Microsoft/react-native-code-push) apps on iOS and Android.

No need of reinventing the wheel. To have immediately something to continue building on, it would be best to start from some starter kit for getting React Native - based applications off the ground in a hurry. 

This is a starter kit that you can install on the fly to get the basic plumping of React Native with NativeBase, Redux and CodePush. 

*Find out more [Free React JS Themes](http://www.startreact.com/) and [React Native Themes](http://www.startreact.com/).*

# Content

-	[Screens](#screens)
-	[Technologies](#technologies)
-	[Get Started](#get-started)
-	[Featured Apps](#featured-apps)
	-	[Native Starter Pro](#native-starter-pro---v500)
	-	[Ecommerce Starter](#ecommerce-starter---v500)
	-	[Flat App Theme](#flat-app-theme---v400)


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


### [NativeBase](http://nativebase.io/)

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

Navigation is a core part of any application. Native Starter Kit makes use of [React Native](https://github.com/facebook/react-native) <Navigator /> component to help with navigation.



### [React Native Easy Grid](https://github.com/GeekyAnts/react-native-easy-grid)

React Native Easy Grid is a open source package for grid layout from the team of [StrapMobile](http://strapmobile.com/).

The layout system is an essential concept that needs to be mastered in order to create great layouts and UIs. [React Native](https://github.com/facebook/react-native) uses Flexbox to create the layouts, which is great when we need to accommodate our components and views in different screen sizes or even different devices. Flexbox is awesome but it could be tiresome for newbies.

Easy Grid is very powerful and flexible layout system. No more worries about props of Flexbox such as alignItems, flexDirection, justifyContent, margin, padding, position, width etc. You can create any layout with all the available options that we have. Flexbox makes it look like percentages, however what actually is happening is just ratios. On the easier part, ratios are easier to represent than percentage/decimals. For this reason, the Easy Grid takes in ratios in place of percentage. 
Performance wise, Easy Grid is noteworthy and works as fine as Flexbox, not much of calculation.

[More Examples](http://nativebase.io/docs/v0.5.5/components#layout) . . .


### [React Native-NativeBase Seed](https://github.com/GeekyAnts/react-native-native-base-seed)

React Native-NativeBase Seed is a basic configuration that every React Native app must have; brought to you by [StrapMobile](http://strapmobile.com/).

This is open source and perfect for any newbie to start with React Native.

This is a [React Native](https://github.com/facebook/react-native) Project with [NativeBase](http://nativebase.io/docs/v0.5.5/), [Redux](http://redux.js.org/), [CodePush](https://github.com/Microsoft/react-native-code-push), Router, Push Notification and other basic must-have libraries.





## Get Started

###1. System Requirements

* Globally installed [node](https://nodejs.org/en/) >= 4.0

* Globally installed [npm](https://www.npmjs.org/) >= 3.0

* Globally installed [rnpm](https://github.com/rnpm/rnpm) *(only if React Native version < 0.29)*

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.



###2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/start-react/native-starter-kit.git

$ cd native-starter-kit/

$ npm install
```

If React Native < 0.29

```sh
$rnpm link
```

If React Native >= 0.29

```sh
$ react-native link
```

###3. Simulate for iOS

**Method One**

*	Open the project in XCode from **ios/NativeStarterKit.xcodeproj**

*	[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation:

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

###4. Simulate for Android

*	Codepush key deployment

	*	Open file **/android/app/build.gradle**

	*	Search for **buildTypes** and add following lines of code

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



## Featured Apps

Having tried with the free version, [Native Starter Kit](https://github.com/start-react/native-starter-kit) and appreciate our product?

Get on the mobile fast track with the featured apps of NativeBase, to build high-quality iOS and Android mobile apps. 

Based on [React Native](https://facebook.github.io/react-native/) and [NativeBase](http://nativebase.io/docs/v0.5.5/), Native Starter Pro, Ecommerce Starter, Flat App Theme are beautifully designed with fusion of [Redux](https://github.com/reactjs/react-redux) and [ES6](http://es6-features.org/#Constants), responsive iOS and Android app source code to quickly get started on your next project. 


### Native Starter Pro - v5.0.0

Native Starter Pro is best suited for developing apps that makes use of ready-made tools. The theme has several widget areas that allows you to extend your theme functionality with plugins. 

Native Starter Pro includes following ready-to-use and highly customizable components :

-	UI Elements: Button with various shapes and themes, Textbox, Form Elements, List, Full fledged collection of Icons
-	Custom Elements: Header, Footer, Drawer, Spinner, ProgressBar, Modal, Ready to use Email Template, Interactive design of Calendar with fast swiping feature, Scroll between the tabs, Responsive Navigator, Chat Messenger
-	Ready to use screens
-	Easy theme customization
-	[Read More](http://strapmobile.com/docs/native-starter-pro/v5.0.0)

**Quick links to Native Starter Pro**

-	*[Native Starter Pro Features](http://strapmobile.com/docs/native-starter-pro/v5.0.0/overview/whats-new-in-v5-0-0)*
-	*[Native Starter Pro Components](http://strapmobile.com/docs/native-starter-pro/v5.0.0/components)*
-	*[Native Starter Pro's App Generator](http://strapmobile.com/customizer/#/color)*
-	*[Native Starter Pro Releases](http://strapmobile.com/native-starter-pro-releases/)*


### Ecommerce Starter - v5.0.0

Ecommerce Starter, a perfect starter kit for e-commerce apps. Readily available pages along with rich collection of UI elements.

Ready to use screens:

-	Login
-	Tabs
-	Fluid grid layout to advertise various brands for your products
-	List-view and grid-view of product advertisements
-	Product details in your cart
-	[Read More](http://strapmobile.com/docs/react-native-ecommerce-starter/v5.0.0)

**Quick links to Ecommerce Starter**

-	*[Ecommerce Starter Features](http://strapmobile.com/docs/react-native-ecommerce-starter/v5.0.0/overview/whats-new-in-v5-0-0)*
-	*[Ecommerce Starter Components](http://strapmobile.com/docs/react-native-ecommerce-starter/v5.0.0/components)*
-	*[Ecommerce Starter Releases](http://strapmobile.com/docs/react-native-ecommerce-starter/v5.0.0/release-notes)*


### Flat App Theme - v4.0.0

Flat App is basically a style of interface design emphasizing minimum use of stylistic elements, typography and flat colors.

Ready to use screens:

-	UI Elements: Button with various shapes and themes, Textbox, Form Elements, List, Full fledged collection of Icons
-	Custom Elements: Header, Footer, Drawer, Spinner, ProgressBar, Modal, Ready to use Email Template, Interactive design of Calendar with fast swiping feature, Scroll between the tabs, Responsive Navigator, Chat Messenger
-	Ready to use screens: Channels, Stories, Comments, Carousel, etc
-	Easy theme customization
-	[Read More](http://strapmobile.com/docs/react-native-flat-app-theme/v4.0.0)

**Quick links to Flat App Theme**

-	*[Flat App Theme Components](http://strapmobile.com/docs/react-native-flat-app-theme/v4.0.0)*
-	*[Flat App Theme Releases](http://strapmobile.com/docs/react-native-flat-app-theme/v4.0.0)*


