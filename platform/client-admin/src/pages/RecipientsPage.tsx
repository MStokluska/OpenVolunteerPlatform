import React, { useContext } from 'react';
import {
  IonPage,
  IonFooter,
  IonLoading,
  IonContent,
} from '@ionic/react';
import { Empty, NetworkBadge, Header } from '../components';
import { RouteComponentProps } from 'react-router';
import { useFindRecipientsQuery } from '../dataFacade';
import { useNetworkStatus } from 'react-offix-hooks';
import { RecipientList } from '../components/model/RecipientList';


export const RecipientsPage: React.FC<RouteComponentProps> = ({ match }) => {
  let { data, loading, error, called } = useFindRecipientsQuery({ variables: { limit: 50, fields: {} } })
  const isOnline = useNetworkStatus();

  if (error) {
    console.log(error);
  }

  if (loading) return <IonLoading
    isOpen={loading}
    message={'Loading...'}
  />;

  let content;
  if (data?.findRecipients?.length !== 0) {
    content = <RecipientList recipients={data?.findRecipients as any} />
  } else {
    content = <Empty message={<p>No data!</p>} />;
  }


  return (
    <IonPage>
      <Header title="OpenVolunteer Admin App" match={match} isOnline={isOnline} />

      <IonContent className="ion-padding" >
        {content}
      </IonContent>
      <IonFooter>
        <div>
          OpenVolunteer Platform
          <NetworkBadge isOnline={isOnline} />
        </div>
      </IonFooter>
    </IonPage >
  );

};