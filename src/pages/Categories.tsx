
import {chevronDownCircleOutline,copy,share} from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import './Categories.css';
import firebase from '../Firebase'

const Categories: React.FC = () => {
  const dbref = firebase.database().ref('categories/');
  const [categories,setCategories] = useState<any>([]);
  const [showLoading, setShowLoading] = useState(true);


  const getFireCategories=async()=>{
    const data = await dbref.once('value');
    var CatList:Array<any> = [];
      data.forEach(function(DataSnapshot) {  
        let key = DataSnapshot.key; 
        let val = DataSnapshot.val(); 
        CatList.push({ id: key, name: val.name,thumb:val.thumb});
      });
      setCategories(CatList);
      setShowLoading(false);
  }

  useEffect(()=>{
    getFireCategories();
  },[]);

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
