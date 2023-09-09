import './Host.scss'

export default function Host ({name, picture}){
    return (   
    <div className="host">
      <h3 className="host_name">{name}</h3>
      <img className="host_picture" src={picture} alt={name} />
    </div> 
    )
};