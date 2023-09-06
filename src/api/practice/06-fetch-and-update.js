// 統一定義URL base，方便後續程式使用
const API_ENDPOINT = "http://localhost:3000"

export async function fetchTodoList() {
  let response = await fetch(API_ENDPOINT + "/list");
  if (response.ok) {
    return response.json()
  }
  else throw "Failed to get list items";
}

export async function updateTodoList(list) {
  let response = await fetch(API_ENDPOINT + "/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      listItems: list
    }),
  });
  if(response.ok) {
    return response.json();
  }
  else throw "Failed to update list items"
}