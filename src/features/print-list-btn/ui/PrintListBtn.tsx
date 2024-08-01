import { UIButton } from "shared/ui";

export function PrintListBtn({ onClick }: { onClick: () => void }) {
  return <UIButton text="Печать списка" handleClick={onClick} />;
}
