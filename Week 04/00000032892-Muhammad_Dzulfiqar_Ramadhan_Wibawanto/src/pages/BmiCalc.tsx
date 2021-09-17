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
  IonBackButton,
  IonButtons,
  IonPage,
  IonAlert,
} from "@ionic/react";

import { useRef, useState } from "react";


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

// Import component
import BmiControls from "../components/BmiControls";
import InputControl from "../components/InputControl";
import BmiResult from "../components/BmiResult";

const BmiCalc: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [resultStatus, setStatus] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<"cmkg" | "ftlbs">("cmkg");

  const selectCalcUnitHandler = (selectedValue: "cmkg" | "ftlbs") => {
    setCalcUnits(selectedValue);
  };

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    var status = "";

    if (
      !enteredWeight ||
      !enteredHeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter a valid (non negative) input number");
      return;
    }

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

  const clearError = () => {
    setError("");
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />

      <IonPage>
        <IonHeader>
          <IonToolbar >
          <IonButtons slot="start">
                <IonBackButton defaultHref="/home" />
           </IonButtons>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <InputControl
                selectedValue={calcUnits}
                onSelectValue={selectCalcUnitHandler}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Tinggi Badan ({calcUnits === "cmkg" ? "cm" : "feet"})
                </IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Berat Badan ({calcUnits === "ftlbs" ? "lbs" : "kg"})
                </IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* <IonRow>
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
        </IonRow> */}

          <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />

          {/* {calculatedBMI && resultStatus && (
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
          )} */}

          {calculatedBMI && resultStatus && (
            <BmiResult calculatedBMI={calculatedBMI} status={resultStatus} />
          )}
        </IonGrid>
      </IonPage>
    </>
  );
};

export default BmiCalc;
