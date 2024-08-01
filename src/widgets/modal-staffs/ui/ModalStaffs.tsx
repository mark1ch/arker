import { StaffItem } from "features";
import { ModalStaffsProps } from "../types";
import styles from "./ModalStaffs.module.scss";
import { getStartDate } from "features/staff-item/lib";

export function ModalStaffs({ staffs, onHandleStaffs }: ModalStaffsProps) {  
  return (
    <div className={styles.modal__staffs}>
      {staffs.length > 0 ? (
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
            {staffs.map((staff) => (
              <StaffItem staff={staff} key={getStartDate(staff.startDate)+ staff.firstName} onClick={onHandleStaffs} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет сотрудников</p>
      )}
    </div>
  );
}
