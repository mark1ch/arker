import { GroupButton, ModalStaffs, WindowStaffs } from "widgets";
import styles from "./Main.module.scss";
import { useGetStaffs } from "../lib";
import { UIModal } from "shared";
import { useCallback, useState } from "react";

export function Main() {
  const {
    arrStaffsInModal,
    arrStaffsInWindow,
    handleStaffsInModal,
    handleStaffsInWindow,
    clearLocaleStorage,
    saveFile,
    printList
  } = useGetStaffs();  

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleIsVisible = useCallback(() => {
    setIsVisible((prev) =>!prev);
  }, [])

  const handleClose = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <div className={styles.main}>
      <GroupButton onOpenModal={handleIsVisible} onClearStorage={clearLocaleStorage} onSaveFile={saveFile} onPrintList={printList}/>
      {arrStaffsInWindow.length > 0 && <p>Выбранные сотрудники</p>}
      <WindowStaffs
        staffs={arrStaffsInWindow}
        onHandleStaffs={handleStaffsInWindow}
      />
      <UIModal isShow={isVisible} onCloseModal={handleClose}>
        <ModalStaffs
          staffs={arrStaffsInModal}
          onHandleStaffs={handleStaffsInModal}
        />
      </UIModal>
    </div>
  );
}
