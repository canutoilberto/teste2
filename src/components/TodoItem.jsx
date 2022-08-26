import React, { useState, useEffect } from "react";

import { HStack, Text, IconButton, Spacer } from "@chakra-ui/react";

import { BsCheckAll } from "react-icons/bs";
import { FaTrash, FaPen } from "react-icons/fa";
import useTodoStore from "../stores/todoStore";

const TodoItem = (props) => {
  const todoStore = useTodoStore((state) => state);

  const [done, setDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);

  return (
    <HStack key={props.data.id}>
      {props.data && props.data.done ? (
        <Text>
          <s>{props.data && props.data.body}</s>
        </Text>
      ) : (
        <Text>{props.data && props.data.body}</Text>
      )}
      <Spacer />
      <IconButton
        icon={<BsCheckAll />}
        isRound="true"
        onClick={() => props.onCheckTodo(props.data)}
      />
      <IconButton icon={<FaPen />} isRound="true" />
      <IconButton
        icon={<FaTrash />}
        isRound="true"
        onClick={() => props.onDeleteTodo(props.data.id)}
      />
    </HStack>
  );
};

export default TodoItem;
