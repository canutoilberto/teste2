import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { FaSun, FaMoon } from "react-icons/fa";

import useTodoStore from "./stores/todoStore";

const App = () => {
  const todoStore = useTodoStore((state) => state);

  useEffect(() => {
    console.log(todoStore.todos);
  }, [todoStore.todos]);

  const addTodo = (todo) => {
    todoStore.addTodo(todo);
  };

  const checkTodo = (todo) => {
    todoStore.checkTodo(todo);
  };

  const deleteTodo = () => {};

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        pb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList
        todos={todoStore.todos}
        onDeleteTodo={deleteTodo}
        onCheckTodo={checkTodo}
      />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
};

export default App;
