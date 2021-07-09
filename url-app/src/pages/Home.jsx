import { IonAvatar, IonContent, IonHeader,IonLabel,IonInput, IonImg, IonItem, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useState} from 'react';
import './Home.css';
import logo from '../assets/logo.png';
import UrlCard from '../components/UrlCard.jsx';

const Home = () => {

  const [url, setUrl] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem slot="start">
            <IonAvatar>
              <IonImg alt="avatar" src={logo}></IonImg>
            </IonAvatar>
            {/* <IonLabel className="ion-label">URL Navigator</IonLabel> */}
          </IonItem>
          <IonTitle className="ion-label">URL Navigator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonItem>
          <IonLabel position="floating">Url:</IonLabel>
          <IonInput
            type="url"
            value={url}
            autofocus="true"
            clearInput="true"
            onIonChange={(event) => {
              setUrl(event.detail.value);
            }}
          ></IonInput> 
        </IonItem>
        <UrlCard />
      </IonContent>
    </IonPage>
  );
};

export default Home;
