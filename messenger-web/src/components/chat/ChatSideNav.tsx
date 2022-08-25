import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { User } from 'types';
import { COLOR } from 'constants/';
import { setCurrentUser } from 'redux/actions';
import { RiLogoutCircleRLine } from 'react-icons/ri';

interface StyleProps {
  isLogged: boolean;
}

export const ChatSideNav = () => {
  const {
    auth: { users, currentUser },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const others = users.filter(
    (user: User) => user.userId !== currentUser.userId
  );
  const loggedArr = [currentUser, ...others];

  const handleLogOut = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <NavContainer>
      <LogOut onClick={handleLogOut}>
        <RiLogoutCircleRLine />
      </LogOut>
      {loggedArr.map((user: User) => {
        const { userId } = user;
        const isLogged = currentUser.userId === userId;
        return (
          <NavProfile
            src={user.profileImage}
            alt="profile"
            key={user.userId}
            isLogged={isLogged}
          />
        );
      })}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  top: 0;
  width: 7rem;
  height: 100vh;
  transform: translateX(100%);
  padding: 2em 0.5em;
  box-shadow: 5px 0px 1px 0px rgba(0, 0, 0, 0.48);
  & > img,
  button {
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 2rem;
    border-radius: 50%;
  }
`;

const NavProfile = styled.img<StyleProps>`
  outline: ${({ isLogged }) =>
    isLogged ? `5px solid ${COLOR.LOGGED}` : 'none'};
`;

const LogOut = styled.button`
  background-color: ${COLOR.MAIN_LIGHT};
  border-radius: 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
