import { IonContent, IonHeader,IonButton,IonIcon, IonPage, IonTitle, IonListHeader,IonToolbar ,IonCard,IonCardContent} from '@ionic/react';
import {heart,copy,share} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const Quotes=[{
      id:'1',
      quote:'Stay Hungry. Stay Foolish.',
      author:'Steve Jobs'
  },{
      id:'2',
      quote:'Good Artists Copy, Great Artists Steal.',
      author:'Pablo Picasso'
  },{
      id:'3',
      quote:'Argue with idiots, and you become an idiot.',
      author:'Paul Graham'
  },{
      id:'4',
      quote:'Simplicity is the ultimate sophistication.',
      author:'Leonardo Da Vinci'
  }];

  const copyBtn=()=>{
    console.log('copy')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          Quotes.map((item)=>(
              <IonCard class="welcome-card">
                <IonCardContent>
                  <p>
                    {item.quote}
                  </p>
                </IonCardContent>
                <IonListHeader style={{justifyContent: 'end'}}>
                  <IonButton onClick={()=>copyBtn()}><IonIcon icon={heart} /></IonButton>
                  <IonButton><IonIcon icon={copy} /></IonButton>
                  <IonButton><IonIcon icon={share} /></IonButton>
                </IonListHeader>
              </IonCard>
          ))
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
