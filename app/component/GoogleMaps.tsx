import React, { useEffect, useRef, useState } from "react"
import { addSingleMarkers } from "./markers"
// import { addClusterMarkers, addSingleMarkers } from "./markers";

const DEFAULT_CENTER = { lat: -7.082329, lng: -41.474667 }
const DEFAULT_ZOOM = 14

export const GoogleMaps = ({
  locations,
  useClusters = true,
  mapId,
  className,
  style,
  onClick,
  options,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>
  useClusters?: boolean
  mapId?: string
  className?: string
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  options?: any
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        mapId,
        styles: options,
        disableDefaultUI: true,
        mapTypeControl: false,
      })

      const styleSelector = document.getElementById("style-selector")

      map.setOptions({ styles: options })

      addSingleMarkers({ locations, map })

      const pprImage = document.createElement("img")

      pprImage.src = "https://i.ibb.co/tJNvzpb/pprpng.png"
      pprImage.style.width = "100px"
      pprImage.style.height = "100px"

      const pinViewScaled = new google.maps.marker.PinView({
        scale: 1.5,
      })

      new google.maps.marker.AdvancedMarkerView({
        map,
        position: { lat: -7.077195, lng: -41.489608 },
        title: "PICOS PRO RACE",
        content: pprImage,
      })

      // new window.google.maps.Marker({
      //   position: { lat: -7.077195, lng: -41.489608 },
      //   map,
      //   title: "PICOS PRO RACE",
      //   animation: google.maps.Animation.DROP,
      //   optimized: false,
      //   visible: true,
      //   clickable: true,
      // })

      // Displays cluster markers or single markers on map when called
      // useClusters
      //   ? addClusterMarkers({ locations, map })
      //   :
    }
  }, [ref, mapId, locations, useClusters])

  return <div className={className} ref={ref} style={style}></div>
}
