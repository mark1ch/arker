import { cn } from "shared/lib";
import styles from "./UIButton.module.scss";
import { UIButtonProps } from "../types";

export function UIButton({ text, handleClick, className }: UIButtonProps) {
  return (
    <button className={cn(styles.uibutton, className)} onClick={handleClick}>
      {text}
    </button>
  );
}
