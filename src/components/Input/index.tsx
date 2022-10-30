import React, {
  FocusEvent,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { InputWrapper } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  ref: string;
  required?: boolean;
  defaultValue?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, required = true, defaultValue = "", ...otherProps },
  ref
) => {
  const [focusClass, setFocusClass] = useState("");
  const focusInHandler = () => {
    setFocusClass("active");
  };
  const focusOutHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFocusClass("");
    }
  };
  useEffect(() => {
    if (defaultValue) {
      focusInHandler();
    }
  }, [defaultValue]);
  return (
    <InputWrapper>
      <label className={focusClass}>
        {required && <span>*</span>}
        {label}
      </label>
      <input
        {...otherProps}
        name={name}
        ref={ref}
        onFocus={focusInHandler}
        onBlur={focusOutHandler}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
