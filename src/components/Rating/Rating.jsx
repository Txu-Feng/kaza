import StarColor from '../../assets/star_color.png';
import StarGrey from '../../assets/star_grey.png';
import './Rating.scss';

export default function Rating({ rating }) {

  return (
    <div className='ratings'>
      {Array.from({ length: 5 }, (_, index) => (
        <img key={index} src={index < rating ? StarColor : StarGrey} alt={index < rating ? "star" : "empty-star"} />
      ))}
    </div>
  );
}






