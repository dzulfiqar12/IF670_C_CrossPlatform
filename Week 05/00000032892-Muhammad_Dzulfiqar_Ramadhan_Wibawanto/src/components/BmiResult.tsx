import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import "./BmiResult.css";

type Props = {
  calculatedBMI: number;
  status: string;
  backgroundColor: string;
};

const BmiResult = ({ calculatedBMI, status, backgroundColor }: Props) => (
  <IonRow>
    <IonCol size="12" size-md="3" className="ion-text-center" offsetMd="5">
      <IonCard color={backgroundColor}>
        <IonCardContent className="ion-text-center">
          <h2>{calculatedBMI}</h2>
          <h1>{status}</h1>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default BmiResult;
