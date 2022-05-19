import logo from "./images/image-equilibrium.jpg"
import etheriumLogo from "./images/icon-ethereum.svg"
import clock from "./images/icon-clock.svg"
import avatar from "./images/image-avatar.png"
import logoOverlay from "./images/icon-view.svg"

function App() {
  return (
    <>
      <section className="w-96 p-5 bg-blue-400 rounded-xl shadow-2xl shadow-black wrapper">
        <div className="relative">
          <img src={logo} alt="equilibrium" className="block rounded-xl mb-5 nftImage" />
          <div className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition duration-150 ease-in-out rounded-xl overlay">
            <img src={logoOverlay} alt="" className="" />
          </div>
          </div>
        <h1 className="text-2xl mb-5">Equilibrium #3429</h1>
        <p className="mb-5 info">Our Equilibrium collection promotes balance and calm.</p>
        <div className="w-full pb-5 mb-5 flex items-center justify-between stats">
          <div className="flex items-center justify-center currency">
            <img src={etheriumLogo} alt="" className="block mr-2"/>
            <h2>0.041ETH</h2>
          </div>
          <div className="flex items-center justify-center days">
            <img src={clock} alt="" className="block mr-2"/>
            <h3>3 days left</h3>
          </div>
        </div>
        <div className="flex items-center justify-left mb-3 avatar">
          <img src={avatar} alt="avatar" className="block w-10 mr-5 border border-white rounded-full avatarImage" />
          <p className="authorInfo">Creation of <span>Jules Wyvern</span></p>
        </div>
      </section>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/snowsneakers">Patrick Snowden</a>.
      </footer>
    </>
  );
}

export default App;
