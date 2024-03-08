var hoteisAndDescriptions = [
  {
    title: "Picos Hotel",
    description: `
    <br>    <br>
   
    <br>    <br>
    `,
  },
  {
    title: "Hotel e Restaurante Pico 21",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$216    <br>
    Triplo R$276    <br>
    Quádruplo R$312    <br>
    `,
  },
  {
    title: "Hotel P da Silva",
    description: `
    Acomodações :
    <br>    <br>
    Duplo R$276    <br>
    Triplo R$300    <br>
    Quádruplo R$324    <br>
    `,
  },
  {
    title: "Center Hotel",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$168    <br>
    Triplo R$252    <br>
    Quádruplo R$336    <br>
    `,
  },
  {
    title: "Mauri Center Hotel",
    description: `
    Acomodações 
    <br>    <br>
    Individual R$180    <br>
    Duplo R$240    <br>
    Triplo R$300    <br>
    `,
  },
  {
    title: "Hotel Pinheiro",
    description: `
      Acomodações 
      <br>    <br>
      Duplo R$180    <br>
      Triplo R$240    <br>
    `,
  },
  {
    title: "Pousada Guaribas",
    description: `
    Acomodações 
    <br>    <br>
    Individual R$118    <br>
    Duplo R$190    <br>
    Triplo R$255    <br>
    Quádruplo R$295    <br>
    `,
  },
  {
    title: "Hotel Bentivi",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$264    <br>
    Triplo R$336    <br>
    Quádruplo R$384    <br>
    `,
  },
  {
    title: "Hotel Gadelha",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$216    <br>
    Triplo R$324    <br>
    Quádruplo R$384    <br>
    `,
  },
]

export const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>
  map: google.maps.Map | null | undefined
}) =>
  locations.map(({ lat, lng }, index) => {
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 style="color: black; display: flex; justify-content: center; align-items: center; margin-bottom: 5px; font-family: Inter; font-weight: 600; font-size: 32px">' +
      `${hoteisAndDescriptions[index].title}` +
      "</h1>" +
      '<div id="bodyContent" style="background-color: #F3F3F3 ; font-family: Inter; color: #616161; font-weigth: 400; font-size: 24px; padding: 20px">' +
      "<p>" +
      `${hoteisAndDescriptions[index].description}` +
      "</p>" +
      '<p><a href="https://api.whatsapp.com/send?phone=5586981265732" style="display: inline-block; background-color: #25d366; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px; border: none; cursor: pointer; transition: background-color 0.3s ease;" class="whatsapp-button" target="_blank">WhatsApp da Central de atendimento de Hospedagem do Picos Pro Race </a></p>' +
      "</div>" +
      "</div>"

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "",
    })

    const priceTag = document.createElement("div")

    priceTag.className = "price-tag"
    priceTag.textContent = ""

    const marker = new google.maps.marker.AdvancedMarkerView({
      position: { lat, lng },
      map,
      content: priceTag,
    })

    const startPoint = new google.maps.LatLng(-7.077195, -41.489608) // Latitude e longitude do ponto de partida
    const endPoint = new google.maps.LatLng(lat, lng) // Latitude e longitude do destino

    const route = {
      origin: startPoint,
      destination: endPoint,
      travelMode: "DRIVING",
    }

    let directionsService = new google.maps.DirectionsService()
    let directionsRenderer = new google.maps.DirectionsRenderer()

    directionsService.route(route, function (response, status) {
      // anonymous function to capture directions
      if (status !== "OK") {
        window.alert("Directions request failed due to " + status)
        return
      } else {
        directionsRenderer.setDirections(response) // Add route to the map
        var directionsData = response.routes[0].legs[0].distance?.text // Get data about the mapped route

        priceTag.textContent = directionsData

        if (!directionsData) {
          window.alert("Directions request failed")
          return
        }
      }
    })

    const request = {
      origin: startPoint,
      destination: endPoint,
      travelMode: google.maps.TravelMode.DRIVING, // Modo de viagem (DRIVING, WALKING, BICYCLING, ou TRANSIT)
    }

    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        const route = result.routes[0]
        const polyline = new google.maps.Polyline({
          path: route.overview_path, // Define os pontos da rota
          geodesic: true, // Define se a polyline segue a curvatura da Terra
          strokeColor: "#FF0000", // Cor da linha
          strokeOpacity: 1.0, // Opacidade da linha
          strokeWeight: 2, // Espessura da linha
        })

        polyline.setMap(map) // Adiciona a polyline ao mapa
      }
    })

    map?.addListener("drag", () => {
      infoWindow.close()
    })

    marker.addListener("click", () => {
      infoWindow.open(marker.map, marker)

      infoWindow.open({
        anchor: marker,
        map,
      })
      infoWindow.setContent(contentString)
    })

    marker.addListener("click", () => {})

    return marker
  })
