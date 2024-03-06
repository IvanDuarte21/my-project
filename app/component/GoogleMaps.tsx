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
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>
  useClusters?: boolean
  mapId?: string
  className?: string
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        mapId,
        disableDefaultUI: true,
      })

      addSingleMarkers({ locations, map })

      new window.google.maps.Marker({
        position: { lat: -7.077195, lng: -41.489608 },
        map,
        title: "PICOS PRO RACE",
        animation: google.maps.Animation.DROP,
        optimized: false,
        visible: true,
        clickable: true,
      })

      // Displays cluster markers or single markers on map when called
      // useClusters
      //   ? addClusterMarkers({ locations, map })
      //   :
    }
  }, [ref, mapId, locations, useClusters])

  return <div className={className} ref={ref} style={style}></div>
}
