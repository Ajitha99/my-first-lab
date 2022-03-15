import './App.css';
import Div from './components/Div';
import Link from './components/Link';
import Title from './components/Title';
import Image from './components/Image';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Title title = "Welcome to Lab" description= "This is the first React Lab"/>
      <Div uname = "User Name : " pwd = "password : " btntitle = "Sign In"/>
      <Link alink= "https://reactjs.org/tutorial/tutorial.html" title= "Learn React"/>
      <Image pdata = " React is a JavaScript library created by Facebook! React is a User Interface (UI) library! React is a tool for building UI components " imgSrc = "https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png" altSrc = "https://th.bing.com/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7"/>
      <Footer copyRight= "Copyright © 2022 Meta Platforms, Inc." installation = "https://reactjs.org/docs/getting-started.html" APIReference = "https://reactjs.org/docs/react-api.html" Hooks = "https://reactjs.org/docs/hooks-intro.html" Blog= "https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html" GitHub= "https://github.com/facebook/react"/>
    </div>
  );
}

export default App;
