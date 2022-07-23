import { IonContent, IonHeader,IonImg ,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonCardSubtitle, IonGrid,IonPage,IonCol, IonRow,IonTitle, IonToolbar,IonRefresherContent,IonRefresher } from '@ionic/react';
import {chevronDownCircleOutline,copy,share} from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import './Categories.css';

const Categories: React.FC = () => {

  const CategoriesList=[{
    id:'1',
    img:'https://picsum.photos/200',
  },
  {
    id:'2',
    img:'https://picsum.photos/200',
  },
  {
    id:'3',
    img:'https://picsum.photos/200',
  },
  {
    id:'4',
    img:'https://picsum.photos/200',
  }];

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
          <IonGrid>
          <IonRow>
          {
            CategoriesList.map((item,index)=>(
              <IonCol size="4" key={index}>
                <IonCard>
                  <IonCardContent className="card-content-img">
                    <IonImg src={item.img} alt="test"/>
                     <IonCardHeader className="card-header">
                    <IonCardSubtitle>Motivation</IonCardSubtitle>
                  </IonCardHeader>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))
          }
          </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Categories;
