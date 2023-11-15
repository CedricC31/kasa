import Picture from "../assets/pictures/bord_de_mer.jpg";
import Banner from "../components/banner/Banner";
import Thumb from "../components/thumb/Thumb";
import Accommodations from "../../housing.json";

function Home() {
  return (
    <main>
      <Banner
        bannerImg={Picture}
        bannerTitle="Chez vous, partout et ailleurs" />

      <ul className="gray-background">
        {Accommodations.map((accommmodation) => (
          <li>
            <Thumb key={accommmodation.id} data={accommmodation} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;