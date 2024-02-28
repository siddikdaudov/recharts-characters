import { FC, InputHTMLAttributes } from "react";

type TProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<TProps> = (props) => {
  return (
    <label>
      <input {...props} style={{ all: "unset", border: "1px solid gray", padding: "10px 20px" }} />
    </label>
  );
};
