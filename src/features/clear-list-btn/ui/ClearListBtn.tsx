import { UIButton } from "shared/ui";

export function ClearListBtn({ onClick }: { onClick: () => void }) {
  return <UIButton text="Очистить список" handleClick={onClick} />;
}
