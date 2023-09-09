import "./Home.scss"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card";
import data from "../../data/data.json"
import HomePic from '../../assets/home_pic.jpg'; 

 export default function Home() {
  if ( data.length % 3 === 2 ) {
    return(
      <div>
        <Banner bannerImage={HomePic} bannerTitle="Chez vous, partout et ailleurs"/>
        <section className="home-section">
          {data.map(item => (
            <Card key={item.id} id={item.id} cover={item.cover} title={item.title} />
          ))}
          <div className="fake-card"></div>
        </section>
    </div>
    )
  }
  else if ( data.length %3 === 1 ){
    return(
      <div>
        <Banner bannerImage={HomePic} bannerTitle="Chez vous, partout et ailleurs"/>
        <section className="home-section">
          {data.map(item => (
            <Card key={item.id} id={item.id} cover={item.cover} title={item.title} />
          ))}
          <div className="fake-card"></div>
          <div className="fake-card"></div>
        </section>
    </div>
    )
  }
  else {
    return (
      <div>
        <Banner bannerImage={HomePic} bannerTitle="Chez vous, partout et ailleurs"/>
        <section className="home-section">
          {data.map(item => (
            <Card  key={item.id} id={item.id} cover={item.cover} title={item.title} />
          ))}
        </section>
      </div>
    );
  }
}

