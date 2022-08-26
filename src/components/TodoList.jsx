import React, { useState } from "react";
import { VStack, StackDivider, Badge } from "@chakra-ui/react";

import TodoItem from "./TodoItem";

import useTodoStore from "../stores/todoStore";

const TodoList = ({ todos, onDeleteTodo, onCheckTodo, onModifyTodo }) => {
  const todoStore = useTodoStore((state) => state);

  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No todos :(
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90wv", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todoStore.todos.map((todo) => (
        <TodoItem
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onModifyTodo={onModifyTodo}
          data={todo}
          key={todo.id}
        />
      ))}
    </VStack>
  );
};

export default TodoList;
