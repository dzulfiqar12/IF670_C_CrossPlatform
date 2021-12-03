import {
  IonButton,
  IonCard,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useState, useEffect } from "react";
import { Toast } from "@capacitor/toast";
import {
  PushNotifications,
  Token,
  PushNotificationSchema,
  ActionPerformed,
} from "@capacitor/push-notifications";
const Home: React.FC = () => {
  const nullEntry: any[] = [];
  const [notifications, setNotifications] = useState(nullEntry);

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg,
    });
  };
  const registerPush = () => {
    console.log("Initializing HomePage");

    PushNotifications.register();

    PushNotifications.addListener("registration", (token: Token) => {
      showToast("Push registration success");
      console.log("Push registration success");
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
      console.log("Push registration Error");
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        setNotifications((notifications) => [
          ...notifications,
          {
            id: notification.id,
            title: notification.title,
            body: notification.body,
            type: "foreground",
          },
        ]);
        console.log("notification", notification);
        console.log("notifications", notifications);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        setNotifications((notifications) => [
          ...notifications,
          {
            id: notification.notification.data.id,
            title: notification.notification.data.title,
            body: notification.notification.data.body,
            type: "action",
          },
        ]);
        console.log("notification", notification);
        console.log("notifications", notifications);
      }
    );
  };
  useEffect(() => {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== "granted") {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === "denied") {
            showToast("Push Notification permission denied");
          } else {
            showToast("Push Notification permission granted");
            registerPush();
          }
        });
      } else {
        registerPush();
      }
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard></IonCard>
        <IonListHeader></IonListHeader>
        <IonList>
          {notifications.map((notif) => (
            <IonItem key={notif.id}>
              <IonLabel>
                <IonText>
                  <h3>{notif.title}</h3>
                </IonText>
                <p>{notif.body}</p>
                {notif.type === "foreground" && (
                  <p>This data was received in foregorund</p>
                )}
                {notif.type === "action" && (
                  <p>This data was received on tap</p>
                )}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton color="success" expand="full" onClick={registerPush}>
            Register for Push
          </IonButton>
          <IonButton color="success" expand="full" routerLink={"/login"}>
            Go To login
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
