import "./card.css"


function Card(props) {
    console.log(props);
  return (
      <div className="card">
          <h1>{props.object.address}</h1>
          <h2>{props.object.address}</h2>
    </div>
    )
}
export default Card