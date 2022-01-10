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
          <div key={ID}>
            <Link href={PATH}>
              <a>{LABEL}</a>
            </Link>
          </div>
        );
      })}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
`;
