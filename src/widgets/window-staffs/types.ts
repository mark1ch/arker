import { StaffItem } from "features/staff-item/types";

export interface WindowStaffsProps {
    staffs: StaffItem[];
    onHandleStaffs: (staffs: StaffItem) => void;
}