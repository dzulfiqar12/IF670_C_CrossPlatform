import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonContent,
  IonButtons,
  IonTitle,
  IonBackButton,
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
import { useParams } from "react-router";
import { MAIL_DATA } from "./Mail";

const MailDetail: React.FC = () => {
  const mId = useParams<{ mailId: string }>().mailId;
  const selectedMail = MAIL_DATA.find((m) => m.id === mId);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs"></IonBackButton>
          </IonButtons>
          <IonTitle>
            {selectedMail ? selectedMail?.subject : "No Mail Found"};
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Mail ID: {mId}</h2>
      </IonContent>
    </IonPage>
  );
};

export default MailDetail;
