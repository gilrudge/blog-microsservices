
let posts = {
  'gbrj':{ id: 'gbrj', title: 'My First Post', comments:[]},
  'nb':{id: 'nb', title: 'My Second Post', comments:[]}
};


let status = 200;

const addPostsCtrl = (req, res) => {
  const data = req.body
  console.log(Object.keys(data))
  try {    
    posts[Object.keys(data)] = Object.values(data)    
    res
        .status(status)
        .send(posts)

  } catch (error) {
    console.log(error);
  }  
};

module.exports = addPostsCtrl