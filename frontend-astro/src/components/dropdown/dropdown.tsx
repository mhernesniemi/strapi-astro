import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment } from "react";

interface DropdownProps {
  label: string;
  items: Array<{ title: string; url: string; locale?: string }>;
  directionLeft?: boolean;
}

export default function Dropdown({
  label,
  items,
  directionLeft,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <div className="flex items-center gap-1">
            {label}
            <ChevronDownIcon className="h-4 w-4 stroke-2 transition-transform ui-open:rotate-180" />
          </div>
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
          className={clsx(
            "absolute z-20 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg",
            directionLeft && "right-0",
          )}
        >
          {items.map((item, index) => (
            <div className="p-1" key={index}>
              <Menu.Item>
                <a
                  href={item.url}
                  className="flex w-full items-center rounded-md px-2 py-2 text-sm ui-active:bg-stone-200"
                >
                  {item.title}
                </a>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
