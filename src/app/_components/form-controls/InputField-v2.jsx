import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import PropTypes from 'prop-types';

function InputField({ label, placeholder, control, name, errorMessage }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="sub2-regular !text-greyscaletext-80-main">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder={placeholder}
              className="focus-visible:border-orange-normal placeholder:text-greyscaletext-10 sub2-regular h-auto border-[1px] border-solid border-[#c5c5c5] px-[1rem] py-[0.75rem] leading-[1.2] outline-none focus-visible:ring-0"
            />
          </FormControl>
          {errorMessage && (
            <p className="px-1 text-sm font-medium text-red-500">
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
