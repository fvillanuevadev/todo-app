export const getTodos =  async ()=>{
  const response =await  fetch("https://jsonplaceholder.typicode.com/todos")
  const data =await response.json()
  return data.slice(0,10)
}