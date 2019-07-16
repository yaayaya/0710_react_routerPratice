const initState = {
  posts : [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ],
  testYA : ['a'],
  oooo :"aaaaaaaaa"
  
}
// 初始創建  且每次dispatch時呼叫; action = dispatch 的回傳值
const rootReducer = (state = initState , action) => {
  // 當action 狀態是刪除時 執行以下  過濾state裡的posts 回傳過濾過的posts
  if (action.type === "DELETE_POST"){
    let newPosts = state.posts.filter((post)=>{
      return action.id !== post.id
    })
    return {
      ...state,
      posts : newPosts
    }
  }  
  

  return state
}

export default rootReducer