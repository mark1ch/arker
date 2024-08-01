import { StaffItemType } from "features/staff-item/types";

export interface ModalStaffsProps {
    staffs: StaffItemType[];
    onHandleStaffs: (staffs: StaffItemType) => void;
}