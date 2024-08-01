import {
  ChooseStaffBtn,
  ClearListBtn,
  PrintListBtn,
  SaveFileBtn,
} from "features";
import styles from "./GroupButton.module.scss";
import { GroupButtonProps } from "../types";

export function GroupButton({
  onOpenModal,
  onClearStorage,
  onPrintList,
  onSaveFile,
}: GroupButtonProps) {
  return (
    <div className={styles.group}>
      <ChooseStaffBtn onClick={onOpenModal} />
      <PrintListBtn onClick={onPrintList} />
      <ClearListBtn onClick={onClearStorage} />
      <SaveFileBtn onClick={onSaveFile} />
    </div>
  );
}
