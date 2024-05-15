import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import {
 
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";


function TripsMap({ route, width }) {
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );
 
  const history = useNavigate();


  

  const calculateRoute = async (origin, destination) => {
    if (origin == "" || destination == "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: origin,
      destination: destination,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  };

  useEffect(() => {
    setTimeout(calculateRoute(route.origin, route.destination), 5000);
  }, [route]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAssvIlc0TbayfgN6C3rfGtlCXQckeystQ",
    libraries: ["places"],
  });
  

  if (!isLoaded) {
    return <p>isloaded</p>;
  }

  //eslint-disable-next-line no-undef

  const center = {
    lat: 6.458985,
    lng: 3.601521,
  };
  const containerStyle = {
    width: "100%",
    height: !width ? "" : "38vw",
  };
  return isLoaded ? (
    <div className="w-[80%]">
      
      {width && (
        <div className="flex w-1/3  items-center mr-5">
          <Typography className="w-full text-green-600" variant="h6">
            {route.origin}
          </Typography>
          <AiOutlineArrowRight style={{ fontSize: "40px" }} />
          <Typography className="w-full text-green-600 ml-5" variant="h6">
            {route.destination}
          </Typography>
        </div>
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        // onLoad={map => setMap(map)}
        //   onUnmount={onUnmount}
      >
        {/* <Marker position={center} /> */}
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default TripsMap;
