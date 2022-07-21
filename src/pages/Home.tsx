import { IonContent, IonHeader,IonButton,IonIcon, IonPage, IonTitle, IonListHeader,IonToolbar ,IonCard,IonCardContent} from '@ionic/react';
import {heart,copy,share} from 'ionicons/icons';
import './Home.css';
import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';
import { Toast } from '@capacitor/toast';
import { Storage } from '@capacitor/storage';

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

  const copyBtn=async (item:any)=>{
    var quote = item.quote+' ~'+item.author;
    console.log(quote)

    await Clipboard.write({
      string: quote
    });
    await Toast.show({
      text: 'Copied',
    });
  }

  const shareBtn=async(item:any)=>{
    await Share.share({
      title: 'See this quote',
      text: item.quote,
      url: '',
      dialogTitle: 'Share with buddies',
    });
  }

  const favouriteBtn = async (item:any) => {
    const favouriteArr:any = await Storage.get({ key: 'favourite' });

    if(typeof favouriteArr == 'object'){
      const savedArr:any = await JSON.parse(favouriteArr.value);
      if(savedArr == null){
        console.log('new item')
        const newFavouriteArr:object[] = [];
        newFavouriteArr.push(item);
        
         await Storage.set({
          key: 'favourite',
          value: JSON.stringify(newFavouriteArr),
        });

      }else{
        if(savedArr.length  > 0){
          let exist = false;
          savedArr.forEach((data:any)=>{
            if(data.id == item.id){
              exist = true;
            }
          });
          if(exist){
            return;
          }
          savedArr.push(item);
          await Storage.set({
            key: 'favourite',
            value: JSON.stringify(savedArr),
          });
        }else{
          let savedArr = [];
          savedArr.push(item);
          await Storage.set({
            key: 'favourite',
            value: JSON.stringify(savedArr),
          });
        }
      }
      
    }else{
      console.log(typeof favouriteArr);
    }

     
  };


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
              <IonCard class="welcome-card" key={item.id}>
                <IonCardContent>
                  <p>
                    {item.quote}
                  </p>
                  <p>
                    ~{item.author}
                  </p>
                </IonCardContent>
                <IonListHeader style={{justifyContent: 'end'}}>
                  <IonButton onClick={()=>favouriteBtn(item)}><IonIcon icon={heart} /></IonButton>
                  <IonButton onClick={()=>copyBtn(item)}><IonIcon icon={copy} /></IonButton>
                  <IonButton onClick={()=>shareBtn(item)}><IonIcon icon={share} /></IonButton>
                </IonListHeader>
              </IonCard>
          ))
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Home;