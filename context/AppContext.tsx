import AppAccountContext from './AppAccountContext';

const AppContext = ({ children }: { children: React.ReactNode }) => (
  <AppAccountContext>{children}</AppAccountContext>
);
export default AppContext;
