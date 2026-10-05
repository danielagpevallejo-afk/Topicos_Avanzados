import type { TodoItem } from "./TodoItem";

export type TodoAction =
| {tyoe:"ADD";item:TodoItem}
| {type:"STATUS";id:string}
| {type:"DELETE";id:string}






