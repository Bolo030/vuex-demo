export default{
    changePeople:(state)=>{
        return state.people.filter(item=>item.age>30)
    }
}