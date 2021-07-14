import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import AppTabs from './AppTabs';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/app">
          <AppTabs />
        </Route>
      
        <Redirect exact path='/' to='/app/home' />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
