import { IonCard, IonCardContent, IonCol } from "@ionic/react";

type Props = {
  calculatedBMI: number;
  status: string;
};

const BmiResult = ({ calculatedBMI, status }: Props) => (
  <IonCol>
    <IonCard>
      <IonCardContent className="ion-text-center">
        <h2>{calculatedBMI}</h2>
        <h1>{status}</h1>
      </IonCardContent>
    </IonCard>
  </IonCol>
);

export default BmiResult;
