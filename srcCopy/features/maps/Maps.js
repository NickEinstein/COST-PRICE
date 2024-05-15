import React, { useEffect, useRef, useState } from "react";
// import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
// import PasswordTextField from "common/PasswordTextField";
// import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { post, get, put } from "services/fetch";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import markerImage from "images/todoor image.png";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
function Trips(props) {
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [center, setCenter] = useState({
    lat: 7,
    lng: 5,
  });
  const [allRiders, setAllRiders] = useState([]);
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );

  const mapRef = useRef(null);

  const ridersUnderCompanyR = async (companyId) => {
    const res = await get({
      endpoint: `api/company/getActiveCompanyRiders`,
      auth: true,
    });
    setAllRiders(res?.data || []);
    return res?.data?.length;
  };

  const ridersUnderCompanyK = async (companyId) => {
    const res = await get({
      endpoint: `api/company/getActiveCompanyRiders`,
      auth: true,
    });
    console.log(res?.data[0]);
    getLocationData(res?.data[0]);
  };
  const getLocationData = (e) => {
    if (map) {
      console.log(e?.gpsLoc);

      const bounds = new window.google.maps.LatLngBounds();
      // bounds.extend(new window.google.maps.LatLng(center.lat, center.lng));
      bounds.extend(new window.google.maps.LatLng(e?.gpsLoc[1], e?.gpsLoc[0]));
      map.fitBounds(bounds);
      map.panTo(new window.google.maps.LatLng(e?.gpsLoc[1], e?.gpsLoc[0]));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      ridersUnderCompanyR();
    };
    ridersUnderCompanyK();

    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, [map]);

  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const toEmit = () => {
    let payload = {
      user: {
        _id: useAuthUser._id,
      },
    };
  };

  function createData(
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay
  ) {
    return {
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
    };
  }

  const { isLoaded } = useJsApiLoader({
    // id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOcmuq7zgq9R_ZubLHlhw6VO_XRidO1Vg",
    // libraries: ["places"],
  });

  if (!isLoaded) {
    return <p>isloaded</p>;
  }

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

  //eslint-disable-next-line no-undef

  const labelStyle = {
    // text: "Bike",
    color: "blue",
    fontSize: "12px",
    fontWeight: "bold",
    anchor: new window.google.maps.Point(0, 20),
  };

  const centers = [
    {
      lat: 6.59651,
      lng: 3.34205,
    },
    {
      lat: 7.376736,
      lng: 3.939786,
    },
    {
      lat: 37.832,
      lng: 7.42947,
    },
  ];

  const bikeIcon = {
    url: markerImage,
    scaledSize: new window.google.maps.Size(60, 60),
  };
  const containerStyle = {
    width: "100%",
    height: "45vw",
  };
  return isLoaded ? (
    <div className="w-full">
      <ToDoorSearch />
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <Button
            onClick={() => calculateRoute("Apapa, Lagos", "Ikeja, Lagos")}
            style={{ color: "#8C8C8C" }}
            className=" ml-3 px-7 py-2 bg-transparent"
          >
            God's View
          </Button>
        </div>

        <div className="flex-between w-2/5 mr-12">
          <div className=" flex items-center">
            <BsCircleFill
              className="mr-1"
              style={{ color: "#078532" }}
              fontSize={12}
            />

            <p>Online {allRiders?.map((e) => e.isAvailable)?.length}</p>
          </div>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={50}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => {
          setTimeout(() => {
            setMap(map);
          });
        }}
      >
        {map && (
          <div>
            {allRiders?.map(
              (e) =>
                e?.gpsLoc && (
                  <div>
                    {e?.isAvailable && (
                      <div>
                        <Marker
                          style={{ width: "10px" }}
                          onClick={() => {
                            getLocationData(e);
                          }}
                          icon={bikeIcon}
                          position={{ lat: e?.gpsLoc[1], lng: e?.gpsLoc[0] }}
                          label={{
                            text: e?.fname,
                            ...labelStyle,
                          }}
                        />
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
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

export default Trips;
