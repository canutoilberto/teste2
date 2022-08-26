import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  HStack,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FaPen } from "react-icons/fa";

const EditTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerHeader>Edit your Todo</DrawerHeader>

        <DrawerBody>
          <HStack>
            <Text>{props.data && props.data.body}</Text>
            <IconButton icon={<FaPen />} />
          </HStack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outlined" mr={3} onClick={onClose}>
            cancel
          </Button>
          <Buton colorScheme="blue">save</Buton>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

export default EditTodo;
