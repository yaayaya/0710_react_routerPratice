import { createStore } from 'redux'

const initState = {
  todos : [],
  posts : []
}

// 初始創建  且每次dispatch時呼叫; action = dispatch 的回傳值
const myReducer = (state = initState, action) =>{
  if (action.type === 'ADD_TODO'){
    // 需回傳整個state
    return {
      ...state,
      // 覆蓋更新 ...state 舊資料  成新資料
      todos : [...state.todos , action.todo] ,

    }
  }  
}
// 創建 store =  createStore(myReducer)
const store = createStore(myReducer)

// store subscribe 訂閱  state變更時自動執行
store.subscribe(()=>{
  console.log('state updated');
  console.log(store.getState());
  
})

// 建立可呼叫action
const todoAction = { type : 'ADD_TODO' , todo : 'buy milk '}

// store.dispatch 呼叫方法 todoAction  變更 store
store.dispatch(todoAction)