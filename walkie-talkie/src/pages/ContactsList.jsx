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
import { useState, useEffect } from "react";
import logo from "../assets/favicon.ico";
import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/react';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const GetContacts = async () => {

      if (isPlatform('android')) {
        const permission = await Contacts.getPermissions();
        if (!permission.granted) {
          return
        }
      }

      let result = await Contacts.getContacts();
      setContacts(result.contacts)
    }
    GetContacts();
  }, [contacts.length])

  return (
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
        {
          (contacts && contacts.length > 0) ?
            contacts.map((contact) => {
              return (contact.phoneNumbers.length > 0) ?
                (
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
                ) : null
            })
            : <div></div>
        }
      </IonContent>
    </IonPage>
  )
}

export default ContactsList;
