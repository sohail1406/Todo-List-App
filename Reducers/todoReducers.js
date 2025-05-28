//redux mein ye aese use karte hain agar array ke form  mein data chaiye toh means list mein
const initialData = {
    list: []
}
// ye Reactjs mein use karte hain list ko add karne ke liye agar react se banta project ye wala toh
//const[list,setList]= useState([]);  
// redux mein aese use karte hain array ke form like list mein data
const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state,   //previous state ... spread operator ke through
                list: [
                    ...state.list,   // iska matlab hai new list toh show hogi but previous  state list bhi show hogi sabhi ek saath
                    {                   
                        id: id,     
                        data: data
                    }
                ]
            }

             case "DELETE_TODO":
           const newList = state.list.filter((elem) => elem.id !== action.id)

            return {
                ...state,   //previous state ... spread operator ke through
               list: newList
            }

           case "REMOVE_TODO":
            return {
                ...state ,
                list:[]               //empty array means agar kisi ki value empty hogi toh wo gayab ho jayega
            }
            default: 
             return state;
    }
}

export default todoReducers;