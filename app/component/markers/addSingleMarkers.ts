export const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>
  map: google.maps.Map | null | undefined
}) =>
  locations.map(({ lat, lng }) => {
    const infoWindow = new google.maps.InfoWindow()

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      animation: google.maps.Animation.DROP,
      optimized: false,
      visible: true,
      clickable: true,
      title: "Oiiiiiiiiiiiiiiiiiiiiiiiii",
    })

    marker.addListener("click", () => {
      infoWindow.close()
      infoWindow.setContent(marker.getTitle())
      infoWindow.open(marker.getMap(), marker)
      console.log("oi")
    })

    marker.addListener("click", () => {})

    return marker
  })
