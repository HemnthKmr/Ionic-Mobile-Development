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
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { scan } from "ionicons/icons";
import logo from "../assets/favicon.ico";
import './QRScanner.css';

const QR_Scanner = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [result, setResult] = useState('')

  const startNewScan = async () => {
    const allowed = await checkPermission();
    if (allowed) {
      setShowCamera(true);
       let output = await BarcodeScanner.startScan(); 
      if (output.hasContent) {
         setResult(output.content);
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

  return (
    (!showCamera) ? 
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonItem>
            <IonAvatar slot="start">
              <img alt="avatar" src={logo} />
            </IonAvatar>
            <IonLabel>
              <IonText color="danger">Walkie</IonText>
              <IonText color="primary">-</IonText>
              <IonText color="medium">Talkie</IonText>
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
    </IonPage> : <IonPage>
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
    </IonPage>
  );
};

export default QR_Scanner;
