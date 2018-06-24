import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import DashboardScreen from './src/screens/Dashboard/Dashboard';
import WatsonSourcesScreen from './src/screens/WatsonSources/WatsonSources'

// Register Screens
Navigation.registerComponent("FieldServiceAdvisor.AuthScreen", () => AuthScreen);
Navigation.registerComponent("FieldServiceAdvisor.DashboardScreen", ()=> DashboardScreen);
Navigation.registerComponent("FieldServiceAdvisor.WatsonSourcesScreen", ()=> WatsonSourcesScreen);


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "FieldServiceAdvisor.DashboardScreen",
    title: "Dashboard",
  }
})
