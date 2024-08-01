import { UIButton } from "shared/ui";

export function SaveFileBtn({ onClick }: { onClick: () => void }) {
  return <UIButton text="Сохранить файл" handleClick={onClick} />;
}
