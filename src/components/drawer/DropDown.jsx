import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { useDispatch } from "react-redux";
import {
  saveSettings,
  updateSettings,
  updateStyle,
} from "../../store/settingSlice";

function getKeyFromValue(map, valueToFind) {
  for (const [key, value] of map.entries()) {
    if (value === valueToFind) {
      return key;
    }
  }
  // If the value is not found.
  return null;
}

const dropDownButtonVariants = cva(
  "inline-flex justify-between px-2  py-2 text-sm font-medium border border-gray-300 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-slate-700",
  {
    variants: {
      variant: {
        default: "w-[132px]",
        small: "w-[59px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const dropDownBoxVariants = cva(
  "origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
  {
    variants: {
      variant: {
        default: "w-32",
        small: "w-14",
      },
      z: {
        above: "z-30",
        default: "z-20",
        under: "z-10",
      },
    },
    defaultVariants: {
      variant: "default",
      z: "default",
    },
  }
);

const Dropdown = ({ items, z, variant, field, settings }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = (item) => {
    const value = items.get(item);
    toggleDropdown();
    dispatch(updateStyle({ id: settings.id, field, value }));
    dispatch(saveSettings(settings.id, settings));
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className={dropDownButtonVariants({ variant })}
        >
          {getKeyFromValue(items, settings.props.styles[field])}
          <svg
            className=" h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={dropDownBoxVariants({ variant, z })}>
          <div>
            {Array.from(items).map(([item, index]) => (
              <div
                key={item}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 text-right"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
