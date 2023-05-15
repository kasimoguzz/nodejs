

let Posts = [
    {PostName : "post1" , PostId : 1 },
    {PostName : "post2" , PostId : 2 },
    {PostName : "post3" , PostId : 3 },
]

let listPosts = () => {
    Posts.map((post) => {
        console.log(post.PostName , post.PostId)
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      Posts.push(newPost);
      //resolve(Posts);
      reject('BIR HATA OLUSTU');
    });

    return promise1;
};

async function showPosts() {
    try {
      await addPost({PostName : "post4" , PostId : 4 });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();


