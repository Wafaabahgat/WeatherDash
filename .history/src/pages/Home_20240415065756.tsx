import React from "react";
import "leaflet/dist/leaflet.css";
import FormSelect from "../components/FormSelect";
import MapForm from "../components/Map-Form";

const Home = () => {
  return (
    <div className="mt-14">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-10 mg:gap-x-5 gap-x-0 lg:gap-y-0 gap-y-6 w-full">
        <FormSelect className="col-span-1 border border-gray-200 p-4 shadow-md rounded-md" />
        <MapForm />
      </div>
    </div>
  );
};

export default Home;
