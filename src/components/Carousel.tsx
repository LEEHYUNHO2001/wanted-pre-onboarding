import { carouselData } from "../constants";
import { CarouselCard } from "./CarouselCard";

export const Carousel = () => {
  return (
    <section>
      <h2 className="sr-only">원티드 캐러셀</h2>
      <ul>
        {carouselData.map((data) => {
          return (
            <CarouselCard data={data} key={`carousel-image-link-${data.ID}`} />
          );
        })}
      </ul>
    </section>
  );
};
