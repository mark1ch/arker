import { StaffItem } from "features";
import { WindowStaffsProps } from "../types";
import styles from "./WindowStaffs.module.scss";
import { useEffect, useState } from "react";
import { StaffItemType } from "features/staff-item/types";
import { getStartDate } from "features/staff-item/lib";

export function WindowStaffs({ staffs, onHandleStaffs }: WindowStaffsProps) {
  const [dataStorage, setDataStorage] = useState<StaffItemType[] | []>([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("users") || "[]");
    setDataStorage([...storage]);
  }, []);

  const checked = dataStorage.length > 0 || staffs.length > 0;

  return (
    <div className={styles.window__staffs}>
      {checked ? (
        <table>
          <thead>
            <tr>
              <th>ФИО сотрудника</th>
              <th>Должность</th>
              <th>Дата приема</th>
              <th>Стаж работы</th>
              <th>Email</th>
              <th>Выбрать</th>
            </tr>
          </thead>
          <tbody>
            {(dataStorage.length > 0 ? dataStorage : staffs).map(
              (staff: StaffItemType) => (
                <StaffItem
                  staff={staff}
                  key={getStartDate(staff.startDate) + staff.firstName}
                  onClick={onHandleStaffs}
                />
              ),
            )}
          </tbody>
        </table>
      ) : (
        <p>Нет выбранных сотрудников</p>
      )}
    </div>
  );
}
