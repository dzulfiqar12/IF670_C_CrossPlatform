import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { useRef, useState } from "react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

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
import "./theme/variables.css";

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [resultStatus, setStatus] = useState<String>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    var status = "";

    if (!enteredWeight || !enteredHeight) return;

    const bmi =
      +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));

    if (bmi >= 30) {
      status = "Obesitas";
    } else if (bmi > 24.9) {
      status = "Gemuk";
    } else if (bmi >= 18.5) {
      status = "Normal";
    } else if (bmi < 18.5) {
      status = "Kurus";
    }

    console.log(status);
    console.log(bmi);
    setStatus(status);
    setCalculatedBMI(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Tinggi Badan (cm)</IonLabel>
              <IonInput ref={heightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Berat Badan (kg)</IonLabel>
              <IonInput ref={weightInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-left">
            <IonItem>
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Calculate
              </IonButton>
            </IonItem>
          </IonCol>

          <IonCol className="ion-text-right">
            <IonItem>
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Reset
              </IonButton>
            </IonItem>
          </IonCol>
        </IonRow>

        {calculatedBMI && resultStatus && (
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent class="ion-text-center">
                  <h2>{calculatedBMI}</h2>
                  <h1>{resultStatus}</h1>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </IonApp>
  );
};

export default App;

// import { Redirect, Route } from "react-router-dom";
// import {
//   IonApp,
//   IonButton,
//   IonCol,
//   IonGrid,
//   IonHeader,
//   IonIcon,
//   IonInput,
//   IonItem,
//   IonLabel,
//   IonRouterOutlet,
//   IonRow,
//   IonTitle,
//   IonToolbar,
//   IonCard,
//   IonCardContent,
//   IonContent,
//   IonList,
//   IonTextarea,
//   IonItemDivider,
//   IonSelect,
//   IonSelectOption,
// } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import Home from "./pages/Home";
// import { useRef, useState } from "react";
// import {
//   calculatorOutline,
//   refreshOutline,
//   bookmarkOutline,
// } from "ionicons/icons";

// /* Core CSS required for Ionic components to work properly */
// import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

// /* Theme variables */
// import "./theme/variables.css";

// const App: React.FC = () => {
//   return (
//     <IonApp className="ion-padding">
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Hello World !</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList>
//           <IonItem>
//             <IonInput placeholder="Name" type="text"></IonInput>
//           </IonItem>
//           <IonItem>
//             <IonInput placeholder="Name" type="date"></IonInput>
//           </IonItem>
//           <IonItem>
//             <IonTitle>Gender</IonTitle>
//             <IonSelect placeholder="Select One">
//               <IonSelectOption value="female">Female</IonSelectOption>
//               <IonSelectOption value="male">Male</IonSelectOption>
//             </IonSelect>
//           </IonItem>
//           <br />
//           <IonButton color="primary" size="small">
//             <IonIcon icon={bookmarkOutline} />
//             Register
//           </IonButton>
//         </IonList>
//       </IonContent>
//     </IonApp>
//   );
// };
// export default App;
