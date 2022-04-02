import { useDarkMode } from "../../context/darkMode";

function Select() {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <div
        className={`my-2 text-sm text-gray-500 uppercase ${
          darkMode ? "text-gray-100" : "text-gray-500"
        }`}
      >
        Background
      </div>
      <div className="mb-3 select ">
        <select
          className={`form-select form-select-sm block w-full px-2 py-3 text-sm font-normal bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:outline-none ${
            darkMode
              ? "text-gray-100 bg-black border-white focus:text-gray-100 focus:bg-black"
              : "text-gray-700 bg-white border-gray-300 focus:text-gray-700 focus:bg-white"
          }`}
          aria-label=".form-select-sm example"
        >
          <option selected>Background</option>
          <option value="1">Base</option>
          <option value="2">Blue</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
