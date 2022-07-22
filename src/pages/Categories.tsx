
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

        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
