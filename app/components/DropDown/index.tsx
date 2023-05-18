import { MouseEvent, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icon from "./Icon";
import { FilterOption } from "@/app/utils/types";

type DropdownProps = {
  title: string;
  options: FilterOption[];
  onItemSelect: (value: string) => void;
};

const Dropdown = ({ title, options, onItemSelect }: DropdownProps) => {
  const handleSelect = (e: MouseEvent, slug: string) => {
    e.stopPropagation();
    onItemSelect(slug || "");
    console.log("slug", slug);
  };

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu>
      <div className="relative flex items-center text-left lg:w-1/6 sm:w-1/3 w-8/12">
      <Menu.Button className="dark:bg-darkModeElement inline-flex w-full justify-between items-center rounded-md bg-white px-6 py-4 text-sm shadow-lg hover:bg-gray-50">
        {title}
        <Icon title="Dropdown Icon" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="dark:bg-darkModeElement absolute top-16 z-10 w-full origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.id}>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-darkModeBackground" : "",
                      "block px-4 py-2 text-sm w-full text-left"
                    )}
                    type="button"
                    key={option.id}
                    onClick={(e) => handleSelect(e, option.slug)}
                    data-slug={option.slug}
                  >
                    {option.title}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>

      </div>
    </Menu>
  );
};

export default Dropdown;
