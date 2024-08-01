export function getStartDate(date: Date): string {  
  const day = String(new Date(date).getDate()).padStart(2, "0");
  const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
  const year = new Date(date).getFullYear();

  return `${day}.${month}.${year}`;
}

export function getExperience(date: Date): number {
  return (
    Math.round(
      ((new Date().getTime() - new Date(date).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)) *
        10,
    ) / 10
  );
}
