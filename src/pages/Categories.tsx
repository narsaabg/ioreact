import { IonContent, IonHeader,IonCard,IonCardContent, IonPage,IonGrid, IonTitle,IonRow, IonCol,IonToolbar,IonRefresherContent,IonRefresher } from '@ionic/react';
import {chevronDownCircleOutline,copy,share} from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import './Categories.css';

const Categories: React.FC = () => {

  const doRefresh=(event: CustomEvent<RefresherEventDetail>)=>{
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonCard class="welcome-card" >
                <IonCardContent>
                  <p>
                    qui
                  </p>
                  <p>
                    s
                  </p>
                </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="4">ion-col size="3"</IonCol>
              <IonCol size="4">ion-col size="3"</IonCol>
              <IonCol size="4">ion-col size="3"</IonCol>
              <IonCol size="4">ion-col size="3"</IonCol>
              <IonCol size="4">ion-col size="3"</IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Categories;