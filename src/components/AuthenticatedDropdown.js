/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {
	ArrowLeftOnRectangleIcon,
	ChevronDownIcon,
	Cog8ToothIcon,
	DevicePhoneMobileIcon,
	UserIcon,
	XMarkIcon
} from '@heroicons/react/20/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function AuthenticatedDropdown({handleLogout}) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm hover:shadow-md px-4 py-2 bg-[#41c88e] text-sm font-medium text-gray-700 hover:bg-[#5ed19f] transition">
					Options
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
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
					className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div>
						<Menu.Item>
							{({active}) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm flex'
									)}
								>
									<UserIcon className="h-5 w-5" aria-hidden="true"/>
									Account Settings
								</a>
							)}
						</Menu.Item>

						<Menu.Item>
							{({active}) => (
								<a
									href="#"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										' px-4 py-2 text-sm flex'
									)}
								>
									<DevicePhoneMobileIcon className={'h-5 w-5'} aria-hidden="true"/>
									Contact Me
								</a>
							)}
						</Menu.Item>
						<form>
							<Menu.Item>
								{({active}) => (
									<button
										type="submit"
										onClick={e => handleLogout(e)}
										className={classNames(
											'flex w-full text-white text-left px-4 py-2 text-sm bg-red-400 rounded hover:bg-red-500'
										)}
									>
										<ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true"/>
										Logout

									</button>
								)}
							</Menu.Item>
						</form>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}