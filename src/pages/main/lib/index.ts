import { StaffItemType } from "features/staff-item/types";
import { useMemo, useState } from "react";

const mockData = [
  {
    firstName: "Иван",
    lastName: "Иванов",
    position: "Секретарь",
    startDate: new Date(2011, 0, 1),
    email: "example@yandex.ru",
    subordinates: null,
  },
  {
    firstName: "Петр",
    lastName: "Петров",
    position: "Главный бухгалтер",
    startDate: new Date(2015, 10, 1),
    email: "example@yandex.ru",
    subordinates: [
      {
        firstName: "Илья",
        lastName: "Ильин",
        position: "Бухгалтер",
        startDate: new Date(2023, 5, 1),
        email: null,
        subordinates: null,
      },
      {
        firstName: "Кирилл",
        lastName: "Кириллов",
        position: "Экономист",
        startDate: new Date(2019, 10, 1),
        email: "example@yandex.ru",
        subordinates: null,
      },
      {
        firstName: "Михаил",
        lastName: "Мишин",
        position: "Бухгалтер",
        startDate: new Date(2016, 1, 1),
        email: "example@yandex.ru",
        subordinates: [
          {
            firstName: "Иван",
            lastName: "Иванов",
            position: "Секретарь",
            startDate: new Date(2020, 0, 1),
            email: "example@yandex.ru",
            subordinates: null,
          },
        ],
      },
    ],
  },
  {
    firstName: "Игорь",
    lastName: "Игорев",
    position: "Директор",
    startDate: new Date(2011, 0, 1),
    email: "example@yandex.ru",
    subordinates: [
      {
        firstName: "Дмитрий",
        lastName: "Дмитриев",
        position: "Юрист",
        startDate: new Date(2015, 0, 1),
        email: null,
        subordinates: null,
      },
    ],
  },
  {
    firstName: "Николай",
    lastName: "Николаев",
    position: "Специалист технической поддержки",
    startDate: new Date(2011, 0, 1),
    email: "example@yandex.ru",
    subordinates: null,
  },
  {
    firstName: "Андрей",
    lastName: "Андреев",
    position: "Главный менеджер",
    startDate: new Date(2011, 0, 1),
    email: "example@yandex.ru",
    subordinates: [
      {
        firstName: "Глеб",
        lastName: "Глебов",
        position: "Менеджер",
        startDate: new Date(2011, 0, 1),
        email: null,
        subordinates: null,
      },
    ],
  },
];

export function useGetStaffs() {
  const [arrStaffsInWindow, setArrStaffsInWindow] = useState<StaffItemType[]>(
    getStaffsInWindow(),
  );

  const staffs = useMemo(() => {
    const arrStaffs: StaffItemType[] = [];

    function addData(data: StaffItemType[]) {
      data.forEach((item: StaffItemType) => {
        if (Array.isArray(item.subordinates)) addData(item.subordinates);
        arrStaffs.push(item);
      });
    }

    addData(mockData);

    return arrStaffs;
  }, []);

  function getStaffsInWindow() {
    const usersStorage: StaffItemType[] = JSON.parse(
      localStorage.getItem("users") || "[]",
    );

    if (usersStorage.length > 0) return usersStorage;
    else return [];
  }

  function getStaffsInModal(data: StaffItemType[]) {
    const usersStorage: StaffItemType[] = JSON.parse(
      localStorage.getItem("users") || "[]",
    );
    const newData = data.slice();
    const filterdData = newData.filter((element) => {
      const userString = JSON.stringify(element);
      return !usersStorage
        .map((user) => JSON.stringify(user))
        .includes(userString);
    });

    return filterdData;
  }

  const [arrStaffsInModal, setArrStaffsInModal] = useState(
    getStaffsInModal(staffs.slice()),
  );

  function handleStaffsInModal(staff: StaffItemType) {
    setArrStaffsInModal((prevArr) =>
      prevArr.filter((user) => JSON.stringify(user) !== JSON.stringify(staff)),
    );
    setArrStaffsInWindow((prevArr) => [...prevArr, staff]);

    const newUsers = JSON.parse(localStorage.getItem("users") || "[]").concat(
      staff,
    );
    localStorage.setItem("users", JSON.stringify(newUsers));
  }

  function handleStaffsInWindow(staff: StaffItemType) {
    const usersStorage: StaffItemType[] = JSON.parse(
      localStorage.getItem("users") as string,
    );

    setArrStaffsInWindow((prevArr) =>
      prevArr.filter((user) => JSON.stringify(user) !== JSON.stringify(staff)),
    );
    setArrStaffsInModal((prevArr) => [...prevArr, staff]);
    const newUsersStorage = usersStorage.filter(
      (user) => JSON.stringify(user) !== JSON.stringify(staff),
    );
    localStorage.setItem("users", JSON.stringify(newUsersStorage));
  }

  function clearLocaleStorage() {
    setArrStaffsInModal(staffs.slice());
    setArrStaffsInWindow([]);
    localStorage.clear();
  }

  function saveFile() {
    const saveFileText = arrStaffsInWindow
      .map(
        (staff) =>
          `${staff.firstName} ${staff.lastName}, ${staff.position}${
            staff.email ? `, ${staff.email}` : ""
          }`,
      )
      .join("\n");

    const blob = new Blob([saveFileText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Сотрудники.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  function printList() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    const printText = arrStaffsInWindow
      .map(
        (staff) =>
          `${staff.firstName} ${staff.lastName}, ${staff.position}${
            staff.email ? `, ${staff.email}` : ""
          }`,
      )
      .join("\n");
    printWindow.document.write(`<pre>${printText}</pre>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }

  return {
    arrStaffsInModal,
    arrStaffsInWindow,
    handleStaffsInModal,
    handleStaffsInWindow,
    clearLocaleStorage,
    saveFile,
    printList,
  };
}
