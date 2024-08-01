export interface StaffItemType{
    firstName: string,
    lastName: string,
    position: string,
    startDate: Date,
    email: string | null,
    subordinates: StaffItemType[] | null,
}

export interface StaffItemProps {
    staff: StaffItemType,
    onClick: (staffs: StaffItemType) => void,
}