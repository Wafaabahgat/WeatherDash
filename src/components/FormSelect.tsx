import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { city, country, state, weather } from "../slice/Home/HomeAction";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

interface FormProps {
  className: string;
}

const FormSelect: FC<FormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedstate, setselectedstate] = useState("");
  const [selectedcity, setselectedcity] = useState("");

  const { data } = useAppSelector((state) => state.country);
  const stateSelector = useAppSelector((state) => state.state);
  const citySelector = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(country());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      dispatch(state(selectedCountry));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedstate && selectedCountry) {
      dispatch(city({ state: selectedstate, country: selectedCountry }));
    }
  }, [selectedstate]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (selectedCountry && selectedstate && selectedcity) {
      dispatch(
        weather({
          state: selectedstate,
          country: selectedCountry,
          city: selectedcity,
        })
      );
    }
  };

  return (
    <div className={cn("", className)}>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        {/* country */}
        <div className="flex flex-col mb-2 gap-2">
          <label
            htmlFor="countries"
            className="text-start block text-md font-medium text-gray-400"
          >
            {t("ttl_country")}
          </label>
          <select
            id="countries"
            onChange={(e) => setselectedCountry(e?.target?.value)}
            value={selectedCountry}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>{t("ttl_Choose_country")}</option>
            {data?.map((e) => (
              <option value={e?.country}> {e.country}</option>
            ))}
          </select>
        </div>
        {/* state */}
        {stateSelector?.data ? (
          <div className="flex flex-col gap-2 mb-2">
            <label
              htmlFor="states"
              className="block text-start text-md font-medium text-gray-400"
            >
              {t("ttl_state")}
            </label>
            <select
              id="states"
              onChange={(e) => setselectedstate(e?.target?.value)}
              value={selectedstate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("ttl_Choose_state")}</option>
              {stateSelector?.data?.map((e) => (
                <option value={e?.state}> {e.state}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
        {/* city */}
        {citySelector?.data ? (
          <div className="flex flex-col gap-2 mb-2">
            <label
              htmlFor="city"
              className="block text-start text-md font-medium  text-gray-400"
            >
              {t("ttl_city")}
            </label>
            <select
              id="city"
              onChange={(e) => setselectedcity(e?.target?.value)}
              value={selectedcity}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("ttl_Choose_city")}</option>
              {citySelector?.data?.map((e) => (
                <option value={e?.city}> {e.city}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="py-2 px-8 bg-green-700 text-slate-50 rounded-lg"
        >
          {t("ttl_Submit")}
        </button>
      </form>
    </div>
  );
};

export default FormSelect;
