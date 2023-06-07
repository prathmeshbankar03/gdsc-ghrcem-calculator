import Calculator from "./components/Calculator";
function App() {
  return (
    <>
      <Nav/>
      <Calculator />
    </>
  );
}

const Nav = () => {
  return(
    <div className='navbar'>
      कैलकुलेटर 🤡📱
    </div>
  )
}

export default App;
