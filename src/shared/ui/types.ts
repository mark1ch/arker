import { ReactElement } from "react";

export interface UIButtonProps {
  text: string;
  handleClick: () => void;
  className?: string;
}

export interface UIModalProps {
  children: ReactElement;
  isShow: boolean;
  onCloseModal: () => void;
}
