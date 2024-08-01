import { UIButton } from "shared/ui";

export function ChooseStaffBtn({onClick}: {onClick: () => void}) {

    return(
        <UIButton text="Выбрать сотрудников" handleClick={onClick}/>
    )
}
