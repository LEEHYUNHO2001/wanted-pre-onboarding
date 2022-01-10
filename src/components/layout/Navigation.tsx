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
          <List key={ID}>
            <Link href={PATH}>
              <Item>{LABEL}</Item>
            </Link>
            {NEW && <Plus>New</Plus>}
            {BETA && <Plus>Beta</Plus>}
          </List>
        );
      })}
    </FlexContainer>
  );
};

const FlexContainer = styled.ul`
  display: flex;
  margin-right: 65px;
`;
const List = styled.li`
  position: relative;
`;
const Item = styled.a`
  font-size: 14px;
  font-weight: 600;
  padding: 15px;
  box-sizing: border-box;
  :hover {
    box-shadow: inset 0 -3px #ddd;
  }
`;
const Plus = styled.span`
  position: absolute;
  right: -6px;
  top: -3px;
  font-size: 10px;
  color: #3366ff;
`;
