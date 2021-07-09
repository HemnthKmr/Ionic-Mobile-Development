import { IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonFabButton, IonIcon } from '@ionic/react';
import { compass, enter, exit, layers, search, colorFilter, hardwareChip, thumbsDown } from 'ionicons/icons'
import { useLocalStorage } from './hooks';

const Layout = () => {

    const [url, setUrl] = useLocalStorage('url','');

    const handleKeyPress = (e) => {
        if (e.keyCode == 13) {
            if (url.length <= 0) {
                return
            }
            else if(url.substring(0, 8) == "https://" || url.substring(0,7) == "http://" )
                {
                    window.open(url, '_blank');
                    setUrl(url);
                }
            }
        }
    

    const openURL = (endPoint) => {
        if (url.length <= 0 || endPoint.length <= 0) {
            return
        }
        else {
                let updatedUrl = `${url}/${endPoint}`;
                if(updatedUrl.substring(0, 8) == "https://" || updatedUrl.substring(0, 7) == "http://" )
                {
                localStorage.setItem('url', updatedUrl);
                window.open(updatedUrl, '_blank');
                setUrl(updatedUrl);
                }
                
        }
    }

    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Default Label</IonLabel>
                            <IonInput type="text" value={url} placeholder="Enter Url" defaultValue="https://" onIonChange={(event) => {
                                setUrl(event.detail.value);
                            }} onKeyDown={(e) => handleKeyPress(e)}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Gate Inward" onClick={() => openURL("GateInward")}>
                            <IonIcon icon={enter} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Gate Outward" onClick={() => openURL("GateOutward")}>
                            <IonIcon icon={exit} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Deflashing" onClick={() => openURL("Deflashing")}>
                            <IonIcon icon={layers} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Inspection" onClick={() => openURL("Inspection")}>
                            <IonIcon icon={search} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Mixing" onClick={() => openURL("Mixing")}>
                            <IonIcon icon={colorFilter} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Moulding" onClick={() => openURL("Moulding")}>
                            <IonIcon icon={hardwareChip} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="Patrol Entry" onClick={() => openURL("PatrolEntry")}>
                            <IonIcon icon={compass} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol size="4">
                        <IonFabButton id="iconrow" size="large" color="light" expand="block" title="RMIssue" onClick={() => openURL("RMIssue")}>
                            <IonIcon icon={thumbsDown} color="medium"></IonIcon>
                        </IonFabButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}

export default Layout;