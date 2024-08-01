import { StaffItemType } from "features/staff-item/types";

export interface WindowStaffsProps {
    staffs: StaffItemType[];
    onHandleStaffs: (staffs: StaffItemType) => void;
}