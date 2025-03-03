import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { User } from "../modals/types";
import { API_URL } from "interfaces/auth/constants";

interface Todo{
  id: string
  title: string
  completed: boolean;
}

export default function Dashboard() {
const [todos, setTodos] = useState<Todo[]>([])
const auth = useAuth();

useEffect(() => {
  loadTodos()
}, [])

  async function loadTodos(){
    try{
      const response = await fetch(`${API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${auth.getAccessToken()}`
        },
      })

      if(response.ok) {
        const json = await response.json();
        setTodos(json);
      }else {

      }

      const data = await response.json();
      setTodos(data);
    } catch (error) {

    }
  }

  const user: User | undefined = auth.getUser(); // 

  return (
    <div>
      <h1> Dashboard de {user?.name || "Invitado"}</h1>;
      todos.map((todo) => (
        <div>{todo.title}</div>
      ))

    </div>  
  ); 
}
