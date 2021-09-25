/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonContent,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { ban, createOutline, trashOutline } from "ionicons/icons";
import { useRef } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";
export const FRIENDS_DATA = [
  {
    id: "f1",
    name: "John Thor",
    photo: "https://rerollcdn.com/GENSHIN/Characters/Tartaglia.png",
  },
  {
    id: "f2",
    name: "John Ness",
    photo: "https://rerollcdn.com/GENSHIN/Characters/Diluc.png",
  },
  {
    id: "f3",
    name: "John Doe",
    photo: "https://rerollcdn.com/GENSHIN/Characters/Xiao.png",
  },
];

const Meet: React.FC = () => {
  const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
  const callFriendhandler = () => {
    console.log("Calling....");
  };
  const blockFriendhandler = () => {
    // event.stopPropagation();
    slidingOptionRef.current?.closeOpened();
    console.log("Blocking....");
  };
  const deleteFriendhandler = () => {
    // event.stopPropagation();
    slidingOptionRef.current?.closeOpened();
    console.log("Deleting....");
  };
  const editFriendhandler = () => {
    // event.stopPropagation();
    slidingOptionRef.current?.closeOpened();
    console.log("Editing....");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Meet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {FRIENDS_DATA.map((friend) => (
            <IonItemSliding key={friend.id} ref={slidingOptionRef}>
              <IonItemOptions side="start">
                <IonItemOption color="danger" onClick={blockFriendhandler}>
                  <IonIcon slot="icon-only" icon={ban}></IonIcon>
                </IonItemOption>
                <IonItemOption color="warning" onClick={deleteFriendhandler}>
                  <IonIcon slot="icon-only" icon={trashOutline}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="end">
                <IonItemOption color="warning" onClick={editFriendhandler}>
                  <IonIcon slot="icon-only" icon={createOutline}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
              <IonItem lines="full" button onClick={callFriendhandler}>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <img
                        src={friend.photo}
                        alt="Photo Profile"
                        style={{ borderRadius: 180, width: 60 }}
                      />
                    </IonCol>
                    <IonCol>
                      <IonLabel>{friend.name}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Meet;
