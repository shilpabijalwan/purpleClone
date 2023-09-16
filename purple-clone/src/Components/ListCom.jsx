import { List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function ListCom({ name, title }) {
  return (
    <>
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {title}
      </Text>
      <List spacing={3}>
        <ListItem>{name}</ListItem>
      </List>
    </>
  );
}
