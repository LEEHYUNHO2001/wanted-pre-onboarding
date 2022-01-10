import { Navigation } from "./Navigation";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};
