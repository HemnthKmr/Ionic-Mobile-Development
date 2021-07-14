import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import {qrCodeOutline, peopleOutline, micOutline } from "ionicons/icons";
import QRScanner from './pages/QRScanner.jsx';
import ContactsList from './pages/ContactsList.jsx';
import Audio from './pages/Audio.jsx';

const AppTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/QR_scan">
          <QRScanner />
        </Route>

        <Route exact path="/app/contact">
          <ContactsList />
        </Route>

        <Route exact path="/app/audio">
          <Audio />
        </Route>

        <Redirect exact path="/" to="/app/QR_scan" />
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/QR_scan">
          <IonIcon icon={qrCodeOutline} />
          <IonLabel>QR Scan</IonLabel>
        </IonTabButton>

        <IonTabButton tab="contact" href="/app/contact"> 
          <IonIcon icon={peopleOutline} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>

        <IonTabButton tab="audio" href="/app/audio"> 
          <IonIcon icon={micOutline} />
          <IonLabel>Audio</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
