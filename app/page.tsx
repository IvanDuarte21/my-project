'use client';
import React from "react";
import {
  GoogleMaps,
} from "./component/GoogleMaps";
import { GoogleMapsWrapper } from './component/Wrapper'
import { Layout } from "./component/Layout";
import { LOCATIONS } from './component/locationsData'

const App = () => (
  <GoogleMapsWrapper>
    <Layout>
      <GoogleMaps mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsWrapper>
);

export default App;
