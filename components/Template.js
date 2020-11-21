import Header from './Header';

const Template = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Template;