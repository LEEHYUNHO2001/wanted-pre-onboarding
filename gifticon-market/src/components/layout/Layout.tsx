import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';
import { Header } from './';
import { useRouter } from 'next/router';

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      {id && <Header id={id} />}
      <>{children}</>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: ${STYLE.MAIN_WIDTH};
  width: 100vw;
  min-height: 100%;
  background-color: ${COLOR.GRAY};
`;
