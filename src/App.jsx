import { getImageUrl } from './utils.jsx';

function Profile({name,imageId,profesion,reconocimientos,elemento,size}){
  return (<section className="profile">
  <h2>{name}</h2>
  <img
    className="avatar"
    src={getImageUrl(imageId,size < 90 ? 's' : 'b')}
    width={size}
    height={size}
  />
  <ul>
    <li>
      <b>Profesión: </b> 
      {profesion}
    </li>
    <li>
      <b>Reconocimientos: {reconocimientos.length} </b> 
      ({reconocimientos.toString()})
    </li>
    <li>
      <b>Descubrió: </b>
      polonio ({elemento})
    </li>
  </ul>
</section>);
}


export default function Gallery(props) {
  return (
    <div>
      <Profile {...props}/>
    </div>
  );
}