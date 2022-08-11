import { useState } from "react";
import { PostContainer, Form, Input,
         Button, Title, } from "./PostStyles";
import PostComment from '../PostComment/PostComment'


export default function Post(){

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([{title: 'Meu Título', id: '1234'}]);

  const titleText = 'Hello Blog'
  const buttonText = 'Criar'

  function handlePost(){
    return console.log(title)
  }

  return(
    <>
      <PostContainer>
        <Title>{titleText}</Title>
        <Form>
          <Input onChange={e => setTitle(e.target.value)} type="text" placeholder="Título do Post"/>
          <Button onClick={handlePost}>{buttonText}</Button>
        </Form>      
      </PostContainer>
      <PostContainer>

        <Title>Título A</Title>
        {posts.map(post => <PostComment data={post} key={post.id}/>)}
      </PostContainer>
    </>
  )
};