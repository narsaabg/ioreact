import {useState,useEffect} from 'react'
import { IonContent, IonHeader,IonButton,IonIcon, IonPage, IonTitle, IonListHeader,IonToolbar ,IonCard,IonCardContent} from '@ionic/react';
import {heart,copy,share} from 'ionicons/icons';
import './Home.css';
import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';
import { Toast } from '@capacitor/toast';
import { Storage } from '@capacitor/storage';

type quote = {
  id: string;
  quote: string;
  author: string;
};

const Home: React.FC = () => {

  const [favouriteArr,setFavouriteArr] = useState<any>([]);
  const [quotesArr,setQuotesArr] = useState<quote[]>([]);

  useEffect(()=>{
    getQuotes();
      isFavourite();

  },[]);

  const getQuotes=()=>{
    console.log('loading quotes')
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

      setQuotesArr(Quotes);
  }
  

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

    var favElem = document.getElementById(`quote_${item.id}`).classList;
    var hasClass = favElem.contains('is-favourite');

    if(hasClass){
      
      var removeFavourite = await unFavourite(item.id); 
      console.log(removeFavourite);
      favElem.remove('is-favourite');
      return ;
    }

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
        favElem.add('is-favourite');
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

          favElem.add('is-favourite');
        }else{
          let savedArr = [];
          savedArr.push(item);
          await Storage.set({
            key: 'favourite',
            value: JSON.stringify(savedArr),
          });
          favElem.add('is-favourite');
        }
      }
      
    }else{
      console.log(typeof favouriteArr);
    }

     
  };

  const isFavourite=async()=>{

    const favouriteArr:any = await Storage.get({ key: 'favourite' });
    if(typeof favouriteArr == 'object'){
      const savedArr:any = await JSON.parse(favouriteArr.value);
      if(savedArr != null){
        if(savedArr.length  > 0){
          let exist:any = [];
          savedArr.forEach((data:any,index:number)=>{
              exist.push(data.id);
          });
          setFavouriteArr(exist);
        }
      }
    }
  }

  const checkFav=(id:any)=>{
    return favouriteArr.includes(id);
  }

  const unFavourite=async(id:any)=>{
    const favouriteArr:any = await Storage.get({ key: 'favourite' });

    if(typeof favouriteArr == 'object'){
      const savedArr:any = await JSON.parse(favouriteArr.value);
      if(savedArr == null){
       return false;
      }else{
        if(savedArr.length  > 0){
          let exist = false;
          savedArr.forEach((data:any,index:number)=>{
            if(data.id == id){
              savedArr.splice(index,1);
            }
          });

          await Storage.set({
            key: 'favourite',
            value: JSON.stringify(savedArr),
          });
      getQuotes();

          return true;
        }else{
          return false;
        }
      }
      
    }else{
      console.log(typeof favouriteArr);
    }
    return false;
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
          quotesArr.map((item:any)=>(
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
                  <IonButton onClick={()=>favouriteBtn(item)}><IonIcon icon={heart} id={'quote_'+item.id} className={checkFav(item.id) ? 'is-favourite' :''}/></IonButton>
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
