import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Associate } from "./associatesSlice";
import CertifyBlock from "./CertifyBlock";
import SimpleAutocomplete from "./SimpleAutocomplete";

interface ModityProps {
  associate: Associate;
}

export interface ConnectionModified {
  name: string;
  password: string;
}

export interface AssociateModified {
  name: string;
  supports: string;
  connections: [
    ConnectionModified | null,
    ConnectionModified | null,
    ConnectionModified | null,
    ConnectionModified | null
  ];
  modifiedIndex: number;
}

const Modify: React.FC<ModityProps> = ({ associate }) => {
  const [associateModified, setAssociateModified] = useState<AssociateModified>(
    {
      name: associate.name,
      supports: associate.supports,
      modifiedIndex: -1,
      connections: [
        associate.connections[0]
          ? { name: associate.connections[0].name, password: "" }
          : null,
        associate.connections[1]
          ? { name: associate.connections[1].name, password: "" }
          : null,
        associate.connections[2]
          ? { name: associate.connections[2].name, password: "" }
          : null,
        associate.connections[3]
          ? { name: associate.connections[3].name, password: "" }
          : null,
      ],
    }
  );

  const setActiveSwitchIndex = (index: number) => {
    setAssociateModified((prev)=>({ ...prev, modifiedIndex: index }));
  };

  const updateConnectionOnIndex = (
    newConnection: ConnectionModified | null,
    index: number
  ) => {
    setAssociateModified((prev) => ({
      ...prev,
      connections: [
        index === 0 ? newConnection : associateModified.connections[0],
        index === 1 ? newConnection : associateModified.connections[1],
        index === 2 ? newConnection : associateModified.connections[2],
        index === 3 ? newConnection : associateModified.connections[3],
      ],
    }));
  };
  console.log(associateModified);
  return (
    <Box width="100%">
      <Typography variant="h6">Редагується {associate.name}</Typography>
      <Typography variant="body1" color="textSecondary">
        За один запит можна активувати/деактивувати не більше одного засвідчення
      </Typography>
      <CertifyBlock
        title="Верх"
        connection={associateModified.connections[0]}
        updateConnection={(conn) => updateConnectionOnIndex(conn, 0)}
        defaultName={associate.connections[0]?.name}
        switchActive={associateModified.modifiedIndex === 0}
        switchDisabled={associateModified.modifiedIndex !== -1 && associateModified.modifiedIndex !== 0}
        toggleSwitch={() =>
          setActiveSwitchIndex(associateModified.modifiedIndex === -1 ? 0 : -1)
        }
      />
      <CertifyBlock
        title="Право"
        connection={associateModified.connections[1]}
        updateConnection={(conn) => updateConnectionOnIndex(conn, 1)}
        defaultName={associate.connections[1]?.name}
        switchActive={associateModified.modifiedIndex === 1}
        switchDisabled={associateModified.modifiedIndex !== -1 && associateModified.modifiedIndex !== 1}
        toggleSwitch={() =>
          setActiveSwitchIndex(associateModified.modifiedIndex === -1 ? 1 : -1)
        }
      />
      <CertifyBlock
        title="Низ"
        connection={associateModified.connections[2]}
        updateConnection={(conn) => updateConnectionOnIndex(conn, 2)}
        defaultName={associate.connections[2]?.name}
        switchDisabled={associateModified.modifiedIndex !== -1 && associateModified.modifiedIndex !== 2}
        switchActive={associateModified.modifiedIndex === 2}
        toggleSwitch={() =>
          setActiveSwitchIndex(associateModified.modifiedIndex === -1 ? 2 : -1)
        }
      />
      <CertifyBlock
        title="Ліво"
        connection={associateModified.connections[3]}
        updateConnection={(conn) => updateConnectionOnIndex(conn, 3)}
        defaultName={associate.connections[3]?.name}
        switchActive={associateModified.modifiedIndex === 3}
        switchDisabled={associateModified.modifiedIndex !== -1 && associateModified.modifiedIndex !== 3}
        toggleSwitch={() =>
          setActiveSwitchIndex(associateModified.modifiedIndex === -1 ? 3 : -1)
        }
      />
      <Typography mb={2} variant="h5">
        Підтримав
      </Typography>
      <SimpleAutocomplete
        presetValue={associateModified.supports}
        getSearchedUser={(u) => {
          setAssociateModified({
            ...associateModified,
            supports: u,
          });
        }}
      />
      <Button
        style={{ marginTop: 16, marginBottom: 16 }}
        variant="contained"
        color="secondary"
        fullWidth
      >
        Зберегти
      </Button>
    </Box>
  );
};

export default Modify;
