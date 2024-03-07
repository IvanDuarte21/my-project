import styled from "styled-components"

var hoteis = [
  "Picos Hotel",
  "Hotel e Restaurante Pico 21",
  "HOTEL P DA SILVA",
  "Center Hotel",
  "Mauri Center Hotel",
  "Hotel Pinheiro",
  "Pousada Guaribas",
  "Hotel Bentivi",
  "Hotel Gadelha",
]

var hoteisAndDescriptions = [
  {
    title: "Picos Hotel",
    description: `
    <br>    <br>
    DISTÂNCIA DO PIAUÍ SHOPPING 3,7KM
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
    Quádruplo R$312    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 3,4KM
    <br><br>
    `,
  },
  {
    title: "Hotel P da Silva",
    description: `
    Acomodações :
    <br>    <br>
    Duplo R$276    <br>
    Triplo R$300    <br>
    Quádruplo R$324    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 5,4KM
    <br><br>
    `,
  },
  {
    title: "Center Hotel",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$168    <br>
    Triplo R$252    <br>
    Quádruplo R$336    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 3,2KM
    <br><br>
    `,
  },
  {
    title: "Mauri Center Hotel",
    description: `
    Acomodações 
    <br>    <br>
    Individual R$180    <br>
    Duplo R$240    <br>
    Triplo R$300    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 3,4KM
    <br><br>
    `,
  },
  {
    title: "Hotel Pinheiro",
    description: `
      Acomodações 
      <br>    <br>
      Duplo R$180    <br>
      Triplo R$240    <br><br>
      DISTÂNCIA DO PIAUÍ SHOPPING 2,8KM
      <br><br>
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
    Quádruplo R$295    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 2KM
    <br><br>
    `,
  },
  {
    title: "Hotel Bentivi",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$264    <br>
    Triplo R$336    <br>
    Quádruplo R$384    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 7,1KM
    <br><br>
    `,
  },
  {
    title: "Hotel Gadelha",
    description: `
    Acomodações 
    <br>    <br>
    Duplo R$216    <br>
    Triplo R$324    <br>
    Quádruplo R$384    <br><br>
    DISTÂNCIA DO PIAUÍ SHOPPING 3,1KM
    <br><br>
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

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      title: "",
      animation: google.maps.Animation.DROP,
      optimized: true,
      visible: true,
      clickable: true,
    })

    map?.addListener("drag", () => {
      infoWindow.close()
    })

    marker.addListener("click", () => {
      infoWindow.open(marker.getMap(), marker)

      infoWindow.open({
        anchor: marker,
        map,
      })
      infoWindow.setContent(contentString)
    })

    marker.addListener("click", () => {})

    return marker
  })
