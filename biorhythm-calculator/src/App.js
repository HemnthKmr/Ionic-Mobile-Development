import {IonApp, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonItem,
  IonLabel, IonDatetime} from '@ionic/react'
import React, {useState} from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './components/hooks';


function App() {
  // const [name, setName] = useState('');
  const [birthDate,setBirthDate] = useLocalStorage('birthDate','');
  const [targetDate,setTargetDate] = useState(new Date().toISOString());
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* How to use IonInput with text - not required for this project */}
        {/* <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(event) => {
              setName(event.detail.value);
            }}
          ></IonInput> 
        </IonItem> */}
        {birthDate && targetDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="DD-MMM-YYYY"
            value={birthDate}
            onIonChange={(event) => {
              setBirthDate(event.detail.value);
            }}
          ></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="DD-MMM-YYYY"
            value={targetDate}
            onIonChange={(event) => {
              setTargetDate(event.detail.value);
            }}
          ></IonDatetime>
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
