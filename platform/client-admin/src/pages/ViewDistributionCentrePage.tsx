import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from '../components/Header';
import { IUpdateMatchParams } from '../declarations';
import { useFindDistributionCentresQuery, useUpdateDistributionCentreMutation } from '../dataFacade';
import { AutoForm } from 'uniforms-ionic';
import distributionCentreForm from '../forms/distributionCentre';
import { IonLoading, IonContent, IonList, IonCard, IonItemGroup, IonItemDivider } from '@ionic/react';
import { Marker } from 'google-maps-react';
import { Map } from '../components/Map';

export const ViewDistributionCentrePage: React.FC<RouteComponentProps<IUpdateMatchParams>> = ({ match }) => {
  const { data, loading, error } = useFindDistributionCentresQuery({ variables: { fields: { id: match.params.id }, limit: 1 } });
  const [updateDistributionCentre] = useUpdateDistributionCentreMutation()
  if (error) {
    console.log(error);
  }

  const distributionCentre = data?.findDistributionCentres[0];

  if (!distributionCentre) {
    return <div>Cannot fetch element with provided id</div>
  }

  if (loading) return <IonLoading isOpen={loading} message={'Loading...'} />;

  const title = `${distributionCentre.address1} ${distributionCentre.address2} ${distributionCentre.city}`;
  let mapContent = <Map
    zoom={14}
    center={{
      lat: distributionCentre.lat!,
      lng: distributionCentre.long!
    }}>
    <Marker
      label={distributionCentre.name!}
      title={title}
      position={{
        lat: distributionCentre.lat!,
        lng: distributionCentre.long!
      }} />
  </Map>

  const model = {
    ...distributionCentre,
    stockInformation: JSON.stringify(distributionCentre.stockInformation, null, '\t')
  };

  return (
    <>
      <Header title="Manage Distribution Centre" match={match} />
      <IonContent>
        <IonList>
          <IonCard>
            <IonItemGroup>
              <IonItemDivider color="light">
                <h2>Distribution centre information</h2>
              </IonItemDivider>
              <AutoForm
                placeholder
                model={model}
                schema={distributionCentreForm}
                onSubmit={(model: any) => {
                  updateDistributionCentre({
                    variables: {
                      input: {
                        id: model.id,
                        city: model.city,
                        lat: model.lat,
                        long: model.long,
                        name: model.name,
                        address1: model.address1,
                        address2: model.address2,
                        postcode: model.postcode,
                        stockInformation: JSON.parse(model.stockInformation),
                      }
                    }
                  }).then(() => {
                    // TODO dialog
                  }).catch(console.error);
                }}
                showInlineError
                submitField={undefined}
              >
              </AutoForm>
              {mapContent}
            </IonItemGroup>
          </IonCard>
        </IonList>
      </IonContent>


    </>
  );

}