import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

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

export const MAIL_DATA = [
  { id: "m1", subject: "Magang MBKM sudah dimulai" },
  { id: "m2", subject: "Bimbingan Skripsi" },
  { id: "m3", subject: "Progress Laporan" },
];

const Mail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Ionic Mail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {MAIL_DATA.map((mail) => (
          <IonCard key={mail.id}>
            <IonCardContent className="ion-text-center">
              <h2>{mail.subject}</h2>
              <IonButton routerLink={`/mail/${mail.id}`}>View Mail</IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};
export default Mail;
