let comments = {

  postId: 1,
  comments: [
    { id: 1, content: "first comment"},
    { id: 2, content: "second comment"},
    { id: 3, content: "third comment"}
  ]
}



const aaddPostCtrl = (req, res) => {
  const data = req.body;
  
  try {
        
    comments.comments.push(data)
    res.json(comments)
    
  } catch (error) {
    console.log(error)
  }  
};

module.exports = aaddPostCtrl