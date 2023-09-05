const API_ENDPOINT = "http://localhost:3000"

export async function fetchTodoList() {
    let response = await fetch(API_ENDPOINT + "/list");
    if(response.ok) {
        return response.json()
    }
    else throw "Failed to get list items";
}