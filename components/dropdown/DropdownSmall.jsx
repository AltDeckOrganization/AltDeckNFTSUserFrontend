import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDarkMode } from "../../context/darkMode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownSmall({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  apply,
  apply2,
  apply3,
  apply4,
  apply5,
  apply6,
}) {
  const { darkMode } = useDarkMode();
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button
          className={`inline-flex justify-center w-full border rounded rounded-md  mt-5 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            darkMode &&
            "bg-black text-whiteImportant border-gray-400 hover:bg-gray-800"
          }`}
        >
          {title}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
            darkMode && "bg-black"
          }`}
        >
          <div className="py-1">
            {link1 ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/${apply}`}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm md:text-base"
                    )}
                  >
                    {link1}
                  </a>
                )}
              </Menu.Item>
            ) : null}
            <Menu.Item>
              {({ active }) => (
                <a
                  href={`/${apply2}`}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {link2}
                </a>
              )}
            </Menu.Item>

            {link3 ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/${apply3}`}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link3}
                  </a>
                )}
              </Menu.Item>
            ) : null}

            {link4 ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/${apply4}`}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link4}
                  </a>
                )}
              </Menu.Item>
            ) : null}
            {link5 ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/${apply5}`}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link5}
                  </a>
                )}
              </Menu.Item>
            ) : null}
            {link6 ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/${apply6}`}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link6}
                  </a>
                )}
              </Menu.Item>
            ) : null}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownSmall;
