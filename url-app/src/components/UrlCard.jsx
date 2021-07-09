import { IonCard, IonCardContent, IonImg } from "@ionic/react";
import "./UrlCard.css";
import { data } from "../data";


const UrlCard = () => {
  return data.map((data) => {
    return (
      <div key={data.id} className="ion-flex">
        <a href={data.url} target="_blank" rel="noreferrer">
          <IonCard id={data.name}>
            <IonCardContent>
                <IonImg alt="logo" className="logo-icon" src={data.logo}></IonImg>
            </IonCardContent>
          </IonCard>  
        </a>
      </div>
    );
  });
};

export default UrlCard;
