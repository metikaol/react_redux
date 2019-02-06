export const loadData = (dispatch) => (
    fetch('http://localhost:3001/api/data',
        { 
        headers: {
            'Content-Type':'application/json'
        },
        method: 'GET',
        })
        .then(res => res.json())
        .then((data) => {
            console.log("load data data back", data)
            dispatch({
            type: 'LOAD_DATA',
            data
        })})
)

export const saveData = (data, dispatch) => (
    fetch('http://localhost:3001/api/data',
        { 
        headers: {
            'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((data) => {
            console.log("data back", data)
            dispatch({
            type: 'ADD_DATA',
            data  
        })})
)

export const deleteData = (id, dispatch) => (
    // console.log("deletedata", id)
    fetch(`http://localhost:3001/api/data/${id}`,
    { 
        headers: {
            'Content-Type':'application/json'
        },
        method: 'DELETE',
        })
        .then(res => res.json())
        .then((data) => {
            console.log("data back", data)
            dispatch({
            type: 'DELETE_DATA',
            data
        })})
)