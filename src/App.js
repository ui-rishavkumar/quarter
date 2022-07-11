import './index.css'
import './App.css'; 
import './global.css'
import Hello from './demo/hello';
import Input from './demo/GetInputData';
import HideandShow from './demo/HideAndShow';
import Form from './demo/form';
import User from './demo/FunctionProp';
import UseeffectCondition from './demo/UseeffectCondition';
// import Header from './components/header/header';
// import Announce from './components/announcement/announcement';
// import Banner from './components/banner/banner';
// import Dealer from './components/dealingForm/serviceform';
// import Marketplace from './components/ImageWithText/ImageWithtext';
// import Counter from './components/counter/counter';
// import Selling from './components/selling/selling';
// import Card from './components/card/card';
// import Featured from './components/featured-collection/featured';
// import Tabs from './components/tabs/Tabs';
// import ParallexVideo from './components/videoParallex/video';
// import AminitiesCategory from './components/aminities/aminities';
// import Testimonial from './components/Testimonials/testimonials';
// import BlogSlider from './components/Latest-news/news';
// import Newsletter from './components/newsletter/newsletter';
// import Footer from './components/footer/footer';


// import Game from './demo/game';

 
function App(){
  function userData() {
    alert("hello user")
  }
  return (
    <>
    <Hello />
   <Input />
   <HideandShow />
   <Form />
   <User data={userData}/>
   <UseeffectCondition />
    {/* <Game /> */}
  {/* <Announce />
  <Header />
  <Banner />
  <Dealer />
  <Marketplace />
  <Counter />
  <Selling />
  <Card />
  <Featured />
 <Tabs />
 <ParallexVideo />
<AminitiesCategory />
<Testimonial />
<BlogSlider />
<Newsletter heading="Looking for a dream home?" para="We can help you realize your dream of a new home"/>
<Footer /> */}
 {/* <div className='card-main'>
      {Data.map((val) => {
        return (
          <Cards
            imgsrc={val.imgsrc}
            subheading={val.subheading}
            heading={val.heading}
            link={val.link}
          />
        );
      })}
    </div> */}
    </>
  )

}

export default App;
