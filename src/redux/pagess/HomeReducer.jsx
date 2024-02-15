const initialState =[]
const homeReducer =(state=initialState,action)=>{
  switch(action.type){
    case "HOME" :
      return{
        home : false
      }
    case "CART" :
      return{
        home:true
      } 
      default:
        return state 
  }
}
export default homeReducer