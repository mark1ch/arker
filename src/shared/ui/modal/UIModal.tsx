import styles from "./UIModal.module.scss";
import { createPortal } from "react-dom";
import { UIModalProps } from "../types";

export function UIModal({ children, isShow, onCloseModal }: UIModalProps) {
  return (
    <div>
      {isShow && createPortal(
        <div className={styles.uimodal} onClick={onCloseModal}>
          <div className={styles.uimodal__children} onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>,
        document.body,
      )}
    </div>
  );
}
