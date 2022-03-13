import axios from "axios";

const baseUrl = "http://localhost:3000/tasks";

export async function getTasks() {
  const response = await axios.get(baseUrl);

  return response.data;
}

export async function createTask(taskName) {
  const data = {
    title: taskName,
  };
  await axios.post(baseUrl, data);
} //for chat get post  msg
