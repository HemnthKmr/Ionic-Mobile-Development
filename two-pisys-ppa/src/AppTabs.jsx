import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { home as homeIcon, map } from "ionicons/icons";
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';


const AppTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/home">
          <Home />
        </Route>

        <Route exact path="/app/contact">
          <Contacts />
        </Route>

        <Redirect exact path="/" to="/app/home" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/home">
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

    
        <IonTabButton tab="contact" href="/app/contact"> 
          <IonIcon icon={map} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
