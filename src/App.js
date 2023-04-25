
import './App.css';
import Profile from './components/Card/card';

function App() {

  const userOne = {
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    design: 'UI/UX Designer',
    name: 'Aryan Shirani',
    desc: 'Hii, y namne is Aryan Shirani, and I am a UI/UX Designer'
  }

  const userTwo = {
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    design: 'UI/UX Designer',
    name: 'Aryan Shirani',
    desc: 'Hii, y namne is Aryan Shirani, and I am a UI/UX Designer'
  }

  const userThird = {
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    design: 'UI/UX Designer',
    name: 'Aryan Shirani',
    desc: 'Hii, y namne is Aryan Shirani, and I am a UI/UX Designer'
  }

  const style = {
    backgroundColor: 'pink'
  }

  
  
  return (
    <div className="App">
      <Profile
       userDetail={userOne}
       styleBtn = {style}
      />
      <Profile
       userDetail={userTwo}
       styleBtn = {style}/>
      <Profile 
      userDetail={userThird}
      styleBtn = {style}
      />
      
    </div>
  );
}

export default App;
