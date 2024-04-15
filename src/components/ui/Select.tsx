import React from "react";

interface IOption {
  selected: string;
}

interface IProps {
  data: IOption[];
  selected: string;
  text: string;
  setselected: string;
}

const Select = ({ data, selected, text, setselected }: IProps) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label
        htmlFor="states"
        className="block text-start text-sm font-medium text-gray-400"
      >
        {text}
      </label>
      <select
        id="states"
        onChange={(e) => setselected(e?.target?.value)}
        value={selectedstate}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a state</option>
        {stateSelector?.data?.map((e) => (
          <option value={e?.state}> {e.state}</option>
        ))}
      </select>
    </div>
    // <select value={selected} className="p-2 border outline-none border-sky-300">
    //   {data.map((option) => (
    //     <option key={option.selected} value={option.selected}>
    //       {option.selected}
    //     </option>
    //   ))}
    // </select>
  );
};

export default Select;
