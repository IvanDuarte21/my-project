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
      title: "Hello World!",
      animation: google.maps.Animation.DROP,
      optimized: false,
      visible: true,
      clickable: true,
    })

    marker.addListener("click", () => {
      infoWindow.close()
      infoWindow.setContent(marker.getTitle())
      infoWindow.open(marker.getMap(), marker)
    })

    return marker
  })
