"use client"
import React from "react"
import { GoogleMaps } from "./component/GoogleMaps"
import { GoogleMapsWrapper } from "./component/Wrapper"
import { Layout } from "./component/Layout"
import { LOCATIONS } from "./component/locationsData"

const App = () => (
  <GoogleMapsWrapper>
    <Layout>
      <GoogleMaps
        mapId="ffab8ac4c27f5bfd"
        style={{ width: "100%", height: "700px" }}
        locations={LOCATIONS}
        options={{
          styles: [
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
          ],
        }}
      />
    </Layout>
  </GoogleMapsWrapper>
)

export default App
