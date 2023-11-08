import React, { useState } from "react";
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
import { Login } from "../../Redux/authentication/action";
import { useDispatch } from "react-redux";
export default function MyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // const [userData, SetUserData] = useState([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Login(formData));
    formData.name = "";
    formData.email = "";
    formData.password = "";
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
                  <Input
                    value={formData.name}
                    name="name"
                    ref={initialRef}
                    placeholder="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={formData.email}
                    name="email"
                    placeholder="email"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={formData.password}
                    name="password"
                    placeholder="password"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
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
