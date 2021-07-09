import { IonAvatar, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonToolbar, IonFabButton, IonIcon } from '@ionic/react';
import Layout from '../components/Layout';
import './Home.css';

const Home = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonAvatar slot="start">
              <img src="../assets/logo1.png" />
            </IonAvatar>
            <IonLabel><IonText color="danger">2</IonText><IonText color="primary">PISYS</IonText><IonText color="medium"> PPA</IonText></IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>  
        <Layout />    
      </IonContent>
    </IonPage>
  );
};

export default Home;
