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
            <span>{NEW}</span>
            <span>{BETA}</span>
          </li>
        );
      })}
    </FlexContainer>
  );
};

const FlexContainer = styled.ul`
  display: flex;
  margin-right: 65px;
`;
const Item = styled.a`
  font-size: 14px;
  font-weight: 600;
  padding-left: 25px;
`;
