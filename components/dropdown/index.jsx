import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useDarkMode } from "../../context/darkMode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({
  title,
  link1,
  apply,
  apply2,
  apply3,
  link2,
  link3,
  apply4,
  link4,
  apply5,
  link5,
  apply6,
  link6,
  green = false,
}) => {
  const { darkMode } = useDarkMode();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {green ? (
          <Menu.Button
            className={`inline-flex justify-center inline-flex justify-center w-full bg-[#50C9C3] shadow-sm px-4 py-2 text-sm font-medium rounded  w-full  shadow-sm px-4 py-2text-sm font-medium ${
              darkMode ? "bg-black text-white" : " text-black"
            }`}
          >
            {title}
          </Menu.Button>
        ) : (
          <Menu.Button
            className={`inline-flex justify-center w-full  shadow-sm px-4 py-2 text-sm font-medium  ${
              darkMode
                ? "bg-black text-gray-400 hover:bg-black hover:text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {title}
          </Menu.Button>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-1    00 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={`${apply}`} passHref>
                  <a
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link1}
                  </a>
                </Link>
              )}
            </Menu.Item>
            {link2 ? (
              <Menu.Item>
                {({ active }) => (
                  <Link href={`/${apply2}`} passHref>
                    <a
                      className={classNames(
                        active
                          ? darkMode
                            ? "text-gray-400"
                            : "bg-gray-100 text-gray-900"
                          : darkMode
                          ? "text-gray-400"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {link2}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ) : null}
            {link3 ? (
              <Menu.Item>
                {({ active }) => (
                  <Link href={`${apply3}`} passHref>
                    <a
                      className={classNames(
                        active
                          ? darkMode
                            ? "text-gray-400"
                            : "bg-gray-100 text-gray-900"
                          : darkMode
                          ? "text-gray-400"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {link3}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ) : null}
            {link4 ? (
              <Menu.Item>
                {({ active }) => (
                  <Link href={`/${apply4}`} passHref>
                    <a
                      className={classNames(
                        active
                          ? darkMode
                            ? "text-gray-400"
                            : "bg-gray-100 text-gray-900"
                          : darkMode
                          ? "text-gray-400"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                    >
                      {link4}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ) : null}
            {link5 ? (
              <Menu.Item>
                {({ active }) => (
                  <Link href={`/${apply5}`} passHref>
                    <a
                      className={classNames(
                        active
                          ? darkMode
                            ? "text-gray-400"
                            : "bg-gray-100 text-gray-900"
                          : darkMode
                          ? "text-gray-400"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {link5}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ) : null}
            {link6 ? (
              <Menu.Item>
                {({ active }) => (
                  <Link href={`${apply6}`} passHref>
                    <a
                      className={classNames(
                        active
                          ? darkMode
                            ? "text-gray-400"
                            : "bg-gray-100 text-gray-900"
                          : darkMode
                          ? "text-gray-400"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {link6}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ) : null}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
