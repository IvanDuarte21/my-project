import styled from "styled-components";

var hoteis = [
  "Picos Hotel",
  "Hotel e Restaurante Pico 21",
  "HOTEL P DA SILVA",
  "Center Hotel",
  "Mauri Center Hotel",
  "Hotel Pinheiro",
  "Pousada Guaribas",
  "Hotel Bentivi",
  "Hotel Gadelha"
];

export const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) =>
  locations.map(({ lat, lng }, index) => {
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 style="color: black; display: flex; justify-content: center; align-items: center; margin-bottom: 5px; font-family: Inter; font-weight: 600; font-size: 32px">' + `${hoteis[index]}` + '</h1>' +
      '<div id="bodyContent" style="background-color: #F3F3F3 ; font-family: Inter; color: #616161; font-weigth: 400; font-size: 24px">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a></p> " + 
      '<p style="color: #E07B67; font-family: Montserrat">"(last visited June 22, 2009)."</p></p>' +
      "</div>" +
      "</div>";

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "",
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      title: "",
      animation: google.maps.Animation.DROP,
      optimized: false,
      visible: true,
      clickable: true,
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
      });
      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(marker.getMap(), marker);
    });

    return marker;
  });
