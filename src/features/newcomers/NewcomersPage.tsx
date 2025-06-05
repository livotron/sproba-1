import React from "react";
import { Box, Typography } from "@mui/material";

const NewcomersPage: React.FC = () => {
  return (
    <Box>
      {/* <Typography variant="h6" gutterBottom>
        Організація засновується на однозначному вирішенні двох питань:
      </Typography> */}
      <Typography variant="h5" gutterBottom>
        1. Хто є соратником
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.1 Кожний соратник сам вибирає кого засвідчувати*
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.2 Кожен соратник засвідчує від одного до чотирьох соратників
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.3 Засвідченню притаманний напрямок: вверх, вправо, вниз або вліво
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.4 В одному напрямку соратник може засвідчити одного соратника
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.5 Два соратники вважаються взаємозасвідченими якщо вони засвідчують
        один одного в протилежних напрямках
      </Typography>
      <Typography variant="body1" gutterBottom>
        1.6 Соратником є лише той, хто взаємозасвідчує іншого соратника
      </Typography>
      <Typography variant="h5" gutterBottom>
        2. Хто є Лідером
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.1 Кожен соратник може підтримувати одного соратника
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.2 Соратник може підтримувати себе, тоді числиться одним із лідерів 
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.3 Один з лідерів є Лідером
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.4 Сумарна підтримка конкретного соратника рахується як сума кількості соратників підтримуючих його безпосередньо чи опосередковано
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.5 Лідером (з великої букви) є той лідер, що користується найбільшою сумарною підтримкою
      </Typography>
      <Typography variant="body1" gutterBottom>
        2.6 У випадку якщо сумарна підтримка однакова, Лідером є той хто доєднався раніше
      </Typography>
    </Box>
  );
};

export default NewcomersPage;
