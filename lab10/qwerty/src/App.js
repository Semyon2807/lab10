import Bloke from "./components/Bloke";
import image_1 from "./images/f3.png";
import image_2 from "./images/f4.png";
import image_3 from "./images/f5.png"

function App() {
  return (
    <div className="necessities">
      <h2 className="necessities__title">Что вам необходимо?</h2>
      <div className="wrapper">
        <Bloke title="Первый блок" image={image_1} text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
        <Bloke title="Второй блок" image={image_2} text='Deserunt optio nobis deleniti temporibus eius unde natus inventore facere blanditiis!'/>
        <Bloke title="Третий блок" image={image_3} text='Excepturi enim recusandae similique ad aspernatur atque, culpa vitae soluta architecto.'/>
    </div>
  </div>
  );
}

export default App;
