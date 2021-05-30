import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    posts: [
        {
            id: 1,
            postTitle: "Watch This!",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis odio id maximus finibus. Vivamus rhoncus ultrices dignissim. Mauris convallis aliquet erat eget dapibus. Quisque ac diam a diam porta elementum vel quis massa. Nam eget ipsum vitae odio semper sollicitudin. In ac ex nec nulla euismod porttitor sed vitae magna. Sed arcu nulla, lobortis eu mauris ut, tempus vulputate tortor. Donec pharetra nunc in ipsum maximus, eget scelerisque sapien ultrices. Sed laoreet posuere quam in malesuada. Fusce euismod euismod aliquam. Vivamus quis diam et lorem ultrices euismod. In condimentum, libero efficitur venenatis tincidunt, orci nisl maximus nisi, vel venenatis tortor odio in nisi. Donec porta semper est.",
            authorName: "Jett",
            date: new Date(2021, 1, 1).toLocaleString("en-US", { day: "2-digit" , month: 'short'})
        },
        {
            id: 2,
            postTitle: "Playing With Fire",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis odio id maximus finibus. Vivamus rhoncus ultrices dignissim. Mauris convallis aliquet erat eget dapibus. Quisque ac diam a diam porta elementum vel quis massa. Nam eget ipsum vitae odio semper sollicitudin. In ac ex nec nulla euismod porttitor sed vitae magna. Sed arcu nulla, lobortis eu mauris ut, tempus vulputate tortor. Donec pharetra nunc in ipsum maximus, eget scelerisque sapien ultrices. Sed laoreet posuere quam in malesuada. Fusce euismod euismod aliquam. Vivamus quis diam et lorem ultrices euismod. In condimentum, libero efficitur venenatis tincidunt, orci nisl maximus nisi, vel venenatis tortor odio in nisi. Donec porta semper est.",
            authorName: "Phoenix",
            date: new Date(2021, 2, 2).toLocaleString("en-US", { day: "2-digit" , month: 'short' })
        },
        {
            id: 3,
            postTitle: "Missing Hermonita..",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis odio id maximus finibus. Vivamus rhoncus ultrices dignissim. Mauris convallis aliquet erat eget dapibus. Quisque ac diam a diam porta elementum vel quis massa. Nam eget ipsum vitae odio semper sollicitudin. In ac ex nec nulla euismod porttitor sed vitae magna. Sed arcu nulla, lobortis eu mauris ut, tempus vulputate tortor. Donec pharetra nunc in ipsum maximus, eget scelerisque sapien ultrices. Sed laoreet posuere quam in malesuada. Fusce euismod euismod aliquam. Vivamus quis diam et lorem ultrices euismod. In condimentum, libero efficitur venenatis tincidunt, orci nisl maximus nisi, vel venenatis tortor odio in nisi. Donec porta semper est.",
            authorName: "Reyna",
            date: new Date(2021, 3, 21).toLocaleString("en-US", { day: "2-digit" , month: 'short' })
        },
        {
            id: 4,
            postTitle: "I am both shield and sword....",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis odio id maximus finibus. Vivamus rhoncus ultrices dignissim. Mauris convallis aliquet erat eget dapibus. Quisque ac diam a diam porta elementum vel quis massa. Nam eget ipsum vitae odio semper sollicitudin. In ac ex nec nulla euismod porttitor sed vitae magna. Sed arcu nulla, lobortis eu mauris ut, tempus vulputate tortor. Donec pharetra nunc in ipsum maximus, eget scelerisque sapien ultrices. Sed laoreet posuere quam in malesuada. Fusce euismod euismod aliquam. Vivamus quis diam et lorem ultrices euismod. In condimentum, libero efficitur venenatis tincidunt, orci nisl maximus nisi, vel venenatis tortor odio in nisi. Donec porta semper est.",
            authorName: "Sage",
            date: new Date(2021, 4, 23).toLocaleString("en-US", { day: "2-digit" , month: 'short' })
        },
        {
            id: 5,
            postTitle: "You may not be a good shot today, but don't worry!",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis odio id maximus finibus. Vivamus rhoncus ultrices dignissim. Mauris convallis aliquet erat eget dapibus. Quisque ac diam a diam porta elementum vel quis massa. Nam eget ipsum vitae odio semper sollicitudin. In ac ex nec nulla euismod porttitor sed vitae magna. Sed arcu nulla, lobortis eu mauris ut, tempus vulputate tortor. Donec pharetra nunc in ipsum maximus, eget scelerisque sapien ultrices. Sed laoreet posuere quam in malesuada. Fusce euismod euismod aliquam. Vivamus quis diam et lorem ultrices euismod. In condimentum, libero efficitur venenatis tincidunt, orci nisl maximus nisi, vel venenatis tortor odio in nisi. Donec porta semper est.",
            authorName: "Sova",
            date: new Date(2021, 5, 28).toLocaleString("en-US", { day: "2-digit" , month: 'short' })
        }
    ]
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
      addPost (state, action) {
        const newPost = action.payload;
        state.posts.push({
            id: newPost.id,
            postTitle: newPost.postTitle,
            postContent: newPost.postContent,
            authorName: newPost.authorName,
            date: newPost.date
          });
      }
  },
});

export const postActions = postSlice.actions;

export default postSlice;
