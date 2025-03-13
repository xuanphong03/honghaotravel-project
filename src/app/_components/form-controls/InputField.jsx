import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

function InputField({ label, placeholder, control, name, errorMessage }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-[#2E2E2E] text-[0.875rem] leading-[1.2] tracking-[0.00875rem] font-bold">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder={placeholder}
              className="placeholder:text-slate-500 px-[1rem] leading-[1.2] py-[0.75rem] h-auto outline-none border-2 border-solid border-[#c5c5c5] focus-visible:border-orange-normal focus-visible:ring-0"
            />
          </FormControl>
          {errorMessage && (
            <p className="text-red-500 px-1 text-sm font-medium">
              {errorMessage}
            </p>
          )}
        </FormItem>
      )}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

export default InputField;
