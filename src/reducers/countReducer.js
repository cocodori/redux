
const initState = { count:0 }

//()안에는 기존의 값, Action 값
const countReducer = (state = initState, action) => {

    //Reducer가 동작하는지 확인한다.
    console.log("counterReducer....")
    console.log(action)

    if(action.type === 'INC') {
        //state는 불변이기 때문에 새로운 상태로 만들어줘야 한다.
        return  {count:state.count + 1}
    } else if (action.type === 'DEC') {
        return {count:state.count - 1}
    }

    //반환한다.
    //리듀서의 역할은 스테이트를 어떻게 처리해야 하지?
    //반환하는 값은 앞으로 유지해야 하는 스테이트 값
    //반환하는 값은 전역 값.
    return state
}

export default countReducer