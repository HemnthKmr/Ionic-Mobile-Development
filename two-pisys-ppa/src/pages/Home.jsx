import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useState } from "react";
import { scan } from "ionicons/icons";
import Layout from "../components/Layout";
import "./Home.css";
import logo from "../assets/favicon.ico";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

const Home = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [result, setResult] = useState('')

  const startNewScan = async () => {
    const allowed = await checkPermission();
    if (allowed) {
      setShowCamera(true);
      // BarcodeScanner.hideBackground(); // make background of WebView transparent
      // BarcodeScanner.prepare();
       let output = await BarcodeScanner.startScan(); // start scanning and wait for a result
      if (output.hasContent) {
         setResult(output.content); // log the raw scanned content
        setShowCamera(false);
      }
    }
  };

  const checkPermission = async () => {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        return;
      } else {
        resolve(false);
      }
    });
  };

  const stopScanner = async () => {
    BarcodeScanner.stopScan();
    setShowCamera(false);
  };
  return !showCamera ? (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src={logo} />
            </IonAvatar>
            <IonLabel>
              <IonText color="danger">2</IonText>
              <IonText color="primary">PISYS</IonText>
              <IonText color="medium">PPA</IonText>
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout />
        <div className="button-start">
        <IonButton onClick={startNewScan}>
          <IonIcon icon={scan}></IonIcon>
          Start Scan
        </IonButton>
        </div>
        {
          (result && result.length >= 0) ?
          <h3 className="button-start">{result}</h3>: <div></div>
        }
      </IonContent>
    </IonPage>
  ) : (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src={logo} />
            </IonAvatar>
            <IonLabel>
              <IonText color="danger">2</IonText>
              <IonText color="primary">PISYS</IonText>
              <IonText color="medium">PPA</IonText>
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>

      <IonRow className="scanner-buttons">
        <IonCol>
          <IonButton expand="full" onClick={stopScanner}>
            Stop
          </IonButton>
        </IonCol>
      </IonRow>
      <div className="scan-box"></div>
    </div>
  );
};

export default Home;
