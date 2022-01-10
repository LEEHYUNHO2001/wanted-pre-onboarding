import Link from "next/link";
import { ROUTES } from "../../constants";
import { ROUTEDATA } from "../../types/route";
import styled from "@emotion/styled";

export const Navigation = () => {
  return (
    <FlexContainer>
      {ROUTES.map((routeObject: ROUTEDATA) => {
        const { ID, PATH, LABEL, NEW, BETA } = routeObject;
        return (
          <li key={ID}>
            <Link href={PATH}>
              <Item>{LABEL}</Item>
            </Link>
          </li>
        );
      })}
    </FlexContainer>
  );
};

const FlexContainer = styled.ul`
  display: flex;
`;
const Item = styled.a`
  padding-left: 20px;
`;
