import { ChangeEvent, useState, useMemo } from "react";
import { debounce } from "@/app/utils";
import Icon from "./Icon";

type SearchProps = {
  initialValue?: string;
  placeholder: string;
  label: string;
  onSearch: (value: string) => void;
};

const Search = (props: SearchProps) => {
  const { initialValue = "", placeholder, label, onSearch } = props;
  const [value, setValue] = useState(initialValue);

  const debouncedSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    debouncedSearch(value);
  };

  return (
    <form
      className="lg:w-2/5 w-full lg:py-auto py-4 dark:bg-darkModeElement bg-white pl-8 shadow-lg flex items-center rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
        <Icon title="Loupe Icon" />
        <input
          className="dark:bg-darkModeElement w-full h-full px-4 rounded-md focus:outline-none"
          type="text"
          placeholder={placeholder}
          aria-label={label}
          value={value}
          onChange={handleChange}
        />
    </form>
  );
};

export default Search;
