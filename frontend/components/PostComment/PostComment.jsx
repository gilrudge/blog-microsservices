import {Subtitle} from './PostCommentStyles'

export default function PostComment({data}){

  function handleComment(){

  };

  return(
    <>
      <Subtitle>{data.title}</Subtitle>
      <input type="text" placeholder='conteúdo'/>
      <button onClick={handleComment}>Comente</button>
      <p>Comentários</p>
      <ul>
        <li>Comentario 1</li>
        <li>Comentario 2</li>
      </ul>
    </>
  )
};