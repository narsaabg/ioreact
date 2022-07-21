import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonRefresherContent,IonRefresher } from '@ionic/react';
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
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent
              pullingIcon={chevronDownCircleOutline}
              pullingText="Pull to refresh"
              refreshingSpinner="circles"
              refreshingText="Refreshing...">
            </IonRefresherContent>
          </IonRefresher>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Categories;