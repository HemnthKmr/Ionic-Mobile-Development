import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import dayjs from 'dayjs';
import {calculateBiorhythms} from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

const BiorhythmCard = ({ birthDate, targetDate }) => {
    const formatDate = (isoString) => {
      return dayjs(isoString).format("DD-MMM-YYYY");
    }

   const {physical, emotional, intellectual} = calculateBiorhythms(birthDate,targetDate);

    return (
      <IonCard className="biorhythm-card ion-text-center">
        <IonCardHeader>
          <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
          <p className="physical">Physical: {physical.toFixed(4)}</p>
          <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
          <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
    );
}

export default BiorhythmCard;