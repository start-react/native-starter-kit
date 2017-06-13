import React, { Component } from "react";
import Home from "../components/home/";
import BlankPage2 from "../components/blankPage2";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
