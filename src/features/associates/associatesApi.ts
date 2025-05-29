// import axios from "axios";

export async function searchUsersByName(name: string) {
  // Mocked associates data with artificial delay
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        "Іван Петренко",
        "Олена Ковальчук",
        "Сергій Іванов",
        "Марія Шевченко",
        "SDF is a user"
      ]);
    }, 700); // 700ms delay
  });
}