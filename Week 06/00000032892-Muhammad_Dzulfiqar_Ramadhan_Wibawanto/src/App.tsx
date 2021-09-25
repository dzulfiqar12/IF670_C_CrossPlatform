import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { list, warningOutline, settingsOutline } from "ionicons/icons";

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
import MailDetail from "./pages/MailDetail";
import MailTabs from "./pages/MailTabs";
import Settings from "./pages/Settings";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <h2>Hello World</h2>
      <IonReactRouter>
        <IonMenu contentId="main">
          <IonHeader></IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem>
                  <IonTitle>IonMail</IonTitle>
                </IonItem>

                <IonItem button routerLink="/tabs/mail">
                  <IonIcon slot="start" icon={list}></IonIcon>
                  <IonLabel>All Mail</IonLabel>
                </IonItem>

                <IonItem button routerLink="/tabs/spam">
                  <IonIcon slot="start" icon={warningOutline}></IonIcon>
                  <IonLabel>Spam</IonLabel>
                </IonItem>

                <IonItem button routerLink="/settings">
                  <IonIcon slot="start" icon={settingsOutline}></IonIcon>
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route path="/tabs" component={MailTabs} />
          <Route exact path="/settings" component={Settings} />
          <Route path="/mail/:mailId" component={MailDetail} />
          <Redirect exact from="/" to="/tabs" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
