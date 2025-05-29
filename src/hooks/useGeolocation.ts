// src/hooks/useGeolocation.ts
import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    function onSuccess(position: GeolocationPosition) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function onError(error: GeolocationPositionError) {
      console.error("Erro ao obter geolocalização:", error);
    }

    const watcher = geo.watchPosition(onSuccess, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return position;
}