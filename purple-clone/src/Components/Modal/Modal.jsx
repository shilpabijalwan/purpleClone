import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export default function MyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = () => {
    console.log("working");
  };

  return (
    <Text
      onClick={onOpen}
      // as={"a"}
      display={{ md: "inline-flex" }}
      fontSize={{
        base: "23px", // 0px
        sm: "23px", // ~480px. em is a relative unit and is dependant on the font-size.
        md: "23px", // ~768px imp
        lg: "30px", // ~992px
        xl: "35px", // ~1280px
      }}>
      <>
        <BsEmojiSmile />

        <Modal
          size={"xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}>
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="80%"
            backdropBlur="2px"
          />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input ref={initialRef} placeholder="name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="email" type="email" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="password" type="password" />
                </FormControl>
              </ModalBody>

              <ModalFooter w={"400px"} m={"auto"}>
                <Button
                  colorScheme="purple"
                  //   mr={3}
                  type="submit"
                  px={10}
                  w={"100%"}>
                  Sign Up
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    </Text>
  );
}
