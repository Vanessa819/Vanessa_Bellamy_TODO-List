const apiUrl = "https://jsonbox.io/box_e1a9c4cf1aba98d8a922";

const record_id= "600592f049c8a900177e4c8a";

const getTask =  ()=> {
    return fetch(apiUrl)
        .then(response => response.json())
}

const patchTask = (obj)=> {
    fetch(apiUrl,
        {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers :{
                "Content-Type": "application/json"
            }
            
        })
}
console.log(patchTask)

const deleteTask = (record_id)=> {
    fetch("https://jsonbox.io/box_e1a9c4cf1aba98d8a922/${record_id}",      
    { 
        method: 'DELETE'

        })
}
console.log(deleteTask)
  
const changeDone = (record_id, value)=> {
    fetch("https://jsonbox.io/box_e1a9c4cf1aba98d8a922/${record_id}",
        {
            method: 'PUT',
            body: value,
            headers :{
                "Content-Type": "application/json"
            }
        })
}
console.log(changeDone)

const changeText = (record_id, value)=>{
    fetch("https://jsonbox.io/box_e1a9c4cf1aba98d8a922/${record_id}",
        {
            method: 'PUT',
            body: JSON.stringify(value),
            headers :{
                "Content-Type": "application/json"
            }
        })
}

console.log(changeText)