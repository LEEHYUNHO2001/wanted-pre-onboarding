import styled from "@emotion/styled";
import Link from "next/link";
import { carouselData } from "../constants";
import { CarouselData } from "../types/carouselData";

export const Carousel = () => {
  return (
    <section>
      <h2 className="sr-only">원티드 캐러셀</h2>
      <ul>
        {carouselData.map((data: CarouselData) => {
          const { ID, SRC, TITLE, SUB, PATH } = data;
          return (
            <li key={`carousel-image-link-${ID}`}>
              <Link href={PATH}>
                <a>
                  <img src={SRC} alt={TITLE} />
                  <article>
                    <p>{TITLE}</p>
                    <p>{SUB}</p>
                    <SvgContainer>
                      <span>바로가기</span>
                      <svg className="SvgIcon" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </SvgContainer>
                  </article>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const SvgContainer = styled.div`
  .SvgIcon {
    width: 10px;
    height: 10px;
  }
`;
