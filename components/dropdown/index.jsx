
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';




function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}


const Dropdown=({title, link1,apply, apply2, apply3, link2, link3, apply4, link4})=> {
  return (
    <Menu as='div' className='relative inline-block text-left'>
        <div>
            {link4 ?
            <Menu.Button className='inline-flex justify-center inline-flex justify-center w-full bg-[#50C9C3] text-white shadow-sm px-4 py-2 text-sm font-medium rounded  w-full  shadow-sm px-4 py-2text-sm font-medium  '>
                {title}
            </Menu.Button>: 
            <Menu.Button className='inline-flex justify-center w-full  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 '>
                {title}
            </Menu.Button>}
        </div>

        <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-1    00 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
        >
            <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href={`${apply}`}
                                className={classNames(
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                {link1}
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href={`/${apply2}`}
                                className={classNames(
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                               {link2}
                            </a>
                        )}
                    </Menu.Item>
                    {link3 ? 
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href={`${apply3}`}
                                className={classNames(
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                               {link3}
                            </a>
                        )}
                    </Menu.Item> : null}
                    {link4 ? 
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href={`/${apply4}`}
                                className={classNames(
                                    active
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700',
                                    'block px-4 py-2 text-sm '
                                )}
                            >
                               {link4}
                            </a>
                        )}
                    </Menu.Item> : null}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default Dropdown