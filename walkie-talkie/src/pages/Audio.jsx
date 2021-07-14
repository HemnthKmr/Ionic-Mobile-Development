import { IonPage, IonToolbar, IonAvatar, IonHeader, IonItem, IonLabel, IonText, IonContent, IonRow, IonCol, IonButton, IonList, useIonViewDidEnter } from '@ionic/react';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import {Storage} from '@ionic/storage'
import logo from '../assets/favicon.ico';
let mediaFiles = [];
const MEDIA_FILES_KEY = 'mediaFiles';

const Audio = () => {

    useIonViewDidEnter(() => {
        Storage.get(MEDIA_FILES_KEY).then(res => {
            mediaFiles = JSON.parse(res) || [];
        });
    })

    const captureAudio = () => {
        MediaCapture.captureAudio().then(res => {
            console.log(res);
            storeMediaFiles(res);
        })
    }

    const playFile = (myFile) => {
        console.log('play ', myFile);
        if (myFile.name.indexOf('.wav') > -1) {
            const audioFile = Media.create(myFile.localURL);
            audioFile.play();
        }
    }

    const storeMediaFiles = (files) => {
        console.log(files);
        Storage.get(MEDIA_FILES_KEY).then(res => {
            if (res) {
                let arr = JSON.parse(res);
                arr = arr.concat(files);
                Storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                Storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
            }
            mediaFiles = mediaFiles.concat(files);
        })
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt="avatar" src={logo} />
                        </IonAvatar>
                        <IonLabel>
                            <IonText color="danger">Walkie</IonText>
                            <IonText color="primary"> - </IonText>
                            <IonText color="medium">Talkie</IonText>
                        </IonLabel>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow>
                    <IonCol>
                        <IonButton full onClick={captureAudio}>Capture Audio</IonButton>
                    </IonCol>
                </IonRow>

                <IonList>
                    {
                        mediaFiles.map((file) => {
                            return (
                                <IonItem onClick={playFile(file)} >
                                    {file.name}
                                    <p>{file.size / 1000 / 1000 | Number}MB</p>
                                </IonItem>
                            );
                        })
                    }

                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Audio;