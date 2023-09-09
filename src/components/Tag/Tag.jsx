import './Tag.scss'

export default function Tag ({tags}){
    return (   
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index} className="tags_name">
          {tag}
        </li>
      ))}
    </ul> 
    )
};