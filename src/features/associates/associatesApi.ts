// import axios from "axios";

export async function searchUsersByName(name: string) {
  // Mocked associates data with artificial delay
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        "Іван_Петренко",
        "Олена_Ковальчук",
        "Сергій_Іванов",
        "Марія_Шевченко",
      ]);
    }, 700); // 700ms delay
  });
}