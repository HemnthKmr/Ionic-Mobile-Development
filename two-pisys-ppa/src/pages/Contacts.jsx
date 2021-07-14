import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonAvatar,
  IonText,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from "@ionic/react";
import { call, send } from "ionicons/icons";
import { useEffect, useState } from "react";
import logo from "../assets/favicon.ico";
import { GetContacts, contactData } from "../components/GetContacts";


const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      GetContacts();
      setContacts(contactData);
  }, [contacts]);


  return (
  (contacts && contacts.length > 0) ? 
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
      <IonContent className="ion-padding">
        {contacts.map((contact) => {
          return (
            <IonItemSliding key={contact.contactId}>
              <IonItem>
                <IonLabel>
                  {contact.displayName}
                  <p>{contact.phoneNumbers[0].number}</p>
                </IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => console.log("call clicked")}
                  color="primary"
                >
                  <IonIcon icon={call} slot="icon-only"></IonIcon>
                </IonItemOption>
                <IonItemOption
                  onClick={() => console.log("send clicked")}
                  color="secondary"
                >
                  <IonIcon icon={send} slot="icon-only"></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          );
        })}
      </IonContent>
    </IonPage> : <div>Loading...</div>
  )}
      
export default Contacts;
