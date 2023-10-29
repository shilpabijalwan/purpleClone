import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RadioButton } from "./Radio";
import { Add_Adress } from "../../Redux/Address/actionTypes";
import { AddAdressfun } from "../../Redux/Address/action";
import { useDispatch, useSelector } from "react-redux";
export default function InputField() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    pin: "",
    city: "",
    state: "",

    address: "",
    landmark: "",
    name: "",
    phone: "",
  });

 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddAdressfun(data));
    // console.log(data);
  };

  return (
    <Box position={"sticky"} w={"100%"}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={7} px={5}>
          <Input
            value={data.pin}
            isRequired
            type="number"
            placeholder="pincode"
            variant="filled"
            size="lg"
            focusBorderColor="blue.100"
            onChange={(e) => setData({ ...data, pin: e.target.value })}
          />
          <Input
            value={data.city}
            placeholder="City"
            variant="filled"
            isRequired
            type="text"
            size="lg"
            focusBorderColor="blue.100"
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
          <Flex gap={10}>
            <Input
              value={data.state}
              isRequired
              type="text"
              placeholder="State"
              variant="filled"
              size="lg"
              focusBorderColor="blue.100"
              onChange={(e) => setData({ ...data, state: e.target.value })}
            />
            <Input
              value={data.address}
              isRequired
              type="text"
              placeholder="Address"
              variant="filled"
              size="lg"
              focusBorderColor="blue.100"
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </Flex>
          <Input
            value={data.landmark}
            isRequired
            placeholder="Landmark"
            variant="filled"
            size="lg"
            focusBorderColor="blue.100"
            onChange={(e) => setData({ ...data, landmark: e.target.value })}
          />
          <Text>Contect Info</Text>
          <Input
            value={data.name}
            isRequired
            type="text"
            placeholder="Name"
            variant="filled"
            size="lg"
            focusBorderColor="blue.100"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            value={data.phone}
            isRequired
            type="number"
            placeholder="Moblie number"
            variant="filled"
            size="lg"
            focusBorderColor="blue.100"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <Text>Address type </Text>
          <RadioButton />
        </Stack>
        <Text fontWeight={600} mt={5} mb={20} mx={5}>
          Address type preference are used to plan your delivery. However,
          shipment can sometimes arrive early or later than planned
        </Text>
        <Box
          boxShadow={"lg"}
          display={"flex"}
          py={5}
          px={5}
          bg={"white"}
          w={{ base: "95%", sm: "95%", md: "77%", lg: "45%" }}
          //   border={"1px solid green"}
          position={"fixed"}
          bottom={0}
          zIndex={1}
          m={"auto"}>
          <Button
            colorScheme="purple"
            variant="solid"
            px={10}
            w={"100%"}
            type="submit">
            Save Address
          </Button>
        </Box>
      </form>
    </Box>
  );
}
