import { useState } from "react";
import { getExperience, getStartDate } from "../lib";
import { StaffItemProps } from "../types";
import styles from "./StaffItem.module.scss";

export function StaffItem({ staff, onClick }: StaffItemProps) { 
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(prev =>!prev);
    onClick(staff)
  }
  return (
    <tr className={styles.staff} style={{background: isChecked ? "gray": ""}}>
      <td>{`${staff.firstName} ${staff.lastName}`}</td>
      <td>{staff.position}</td>
      <td>{getStartDate(staff.startDate)}</td>
      <td>{getExperience(staff.startDate)}</td>
      <td>{staff.email ? staff.email : "-"}</td>
      <td><input type="checkbox" className={styles.staff__checkbox} onClick={handleChecked}/></td>
    </tr>
  );
}
