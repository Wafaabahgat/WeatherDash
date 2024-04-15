import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Text from "./ui/Text";
import { AQIIndicator } from "./ui/AQIIndicator";
import { useAppSelector } from "../store/hooks";
import { useTranslation } from "react-i18next";

interface MapFormProps {}

const MapForm: FC<MapFormProps> = () => {
  const weatherSelector = useAppSelector((state) => state.weather);
  const { t } = useTranslation();


  return (
    <div className="lg:col-span-2 col-span-1 border border-gray-200 p-4 shadow-md rounded-md ">
      {weatherSelector.data.current ? (
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-2 p-2 gap-2">
            <Text
              text="Timestamp"
              text="            {t("ttl_country")}"
              children={weatherSelector.data.current.weather.ts}
              degree="°C"
            />
            <Text
              text="Temperature"
              children={weatherSelector.data.current.weather.tp}
              degree="°C"
              className="py-7"
            />
            <Text
              text="Pressure"
              children={weatherSelector.data.current.weather.pr}
              degree="hPa"
              className="py-7"
            />
            <Text
              text="Humidity"
              children={weatherSelector.data.current.weather.hu}
              degree="%"
              className="py-7"
            />
            <Text
              text="Wind Speed"
              children={weatherSelector.data.current.weather.ws}
              degree="m/s"
              className="py-7"
            />
            <Text
              text="Wind Direction"
              children={weatherSelector.data.current.weather.wd}
              degree="°"
              className="py-7"
            />
            <Text
              text="Weather Icon"
              children={weatherSelector.data.current.weather.ic}
              degree="°"
              className="py-7"
            />
          </div>
          <div className="my-4">
            <strong className="flex mb-1 text-lg ">AQI :</strong>
            <AQIIndicator aqi={weatherSelector.data.current.weather.aqi} />
          </div>
          <div className="">
            <MapContainer
              center={[
                weatherSelector.data.location.coordinates[1],
                weatherSelector.data.location.coordinates[0],
              ]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "50vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  weatherSelector.data.location.coordinates[1],
                  weatherSelector.data.location.coordinates[0],
                ]}
              >
                <Popup>{weatherSelector.data.city}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MapForm;
