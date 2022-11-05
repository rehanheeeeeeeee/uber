import React from "react";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmVoYW50b3NpZiIsImEiOiJjbGEycjloZzkwajg2M3Bxdm1rM2diNHlqIn0.SrZTiiNtWGhlAVHKqLQIiA";

const styles = {
  map: "w-full flex-1",
};

export default function Map({ pickUp, dropOff }) {
  useEffect(() => {
    // Adds the map the component with id as container
    const map = new mapboxgl.Map({
      container: "container",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29811, 39.39172],
      zoom: 3,
    });
    // Initially we dont have pickoff and drop off coordinates because
    // api takes time to give us the coordinates therefore addMarkers
    // gives error
    try {
      addMarkers(map);
      // Zooming the map into the markers accordingly so that both the
      // markers are shown.
      map.fitBounds([pickUp, dropOff], {
        padding: 70,
      });
    } catch (error) {
      console.log(error.message);
    }
    // Making the useEffect run again when we actually recieve pickUp and
    // dropOff coordinates
  }, [pickUp, dropOff]);

  const addMarkers = (map) => {
    // Creates a marker for pick off coordinate on the map
    new mapboxgl.Marker().setLngLat([pickUp[0], pickUp[1]]).addTo(map);
    // Creates a marker for the drop off coordinate on the map
    new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat([dropOff[0], dropOff[1]])
      .addTo(map);
  };
  return <div id="container" className={styles.map}></div>;
}
