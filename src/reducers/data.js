import { comment } from "postcss-selector-parser";

// export default (state = {}, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + action.score
//       case 'DECREMENT':
//         return state - action.score
//       default:
//         return state
//     }
// }

const data = (state = [], action) => {
  console.log("action in reducer", action.data)
  console.log("state", state)
  switch(action.type){
    case 'ADD_DATA':
        return state.concat([action.data])
    case 'LOAD_DATA':
        let result = state.concat([action.data])
        return result.flat()
    case 'DELETE_DATA':
        // let deleteData = state.concat([action.data])
        // return deleteData.flat()
        console.log("state", state)
        return state.filter((data)=> data.id !== action.id)
    case 'EDIT_DATA':
      return state.map((data)=>data.id === action.id ? {...data, editing:!data.editing}:data)
    case 'UPDATE_DATA':
      return state.map((data)=>{
        console.log("data in updatae", data)
        if(data.id === action.id) {
          return {
            ...data,
            name: action.data.newName,
            message: action.data.newMessage,
            editing: !data.editing
          }
        } else return data;
      })
        default:
        return state;
  }

}
export default data;