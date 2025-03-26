import './App.css';
import Header from './Header';
import Slider from './Slider';
import Tap from './Tap';
import Article from './Article';

function App() {
  return (
    <main className="App">
      <Header/>

      <Slider/>
      
      <Tap/>

      <section id={'containerPosts'}>
        <Article 
        title=" React Hooks Essentials." 
        author="Ahmed Ali" 
        date="10-March-2024" 
        time="read since 8 minutes"
        >
        Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.
        </Article>

        <Article 
        title="Comparison between Redux and Context API in case management" 
        author="Laila Hassan" 
        date="12-March-2024" 
        time="read since 10 minutes"
        >
        Discover the differences between Redux and Context API and when to choose each. We will also discuss cases of using
         process and tips to improve performance.
        </Article>
        
        <Article 
        title="Improved Performance of React Apps: Tried Tips" 
        author="Mohamed Khaled" 
        date="15-March-2024" 
        time="Improved Performance of React Apps: Tried Tips"
        >
        Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.
        </Article>
        <Article 
        title=" React Hooks Essentials." 
        author="Ahmed Ali" 
        date="10-March-2024" 
        time="read since 8 minutes"
        >
        Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.
        </Article>

        <Article 
        title="Comparison between Redux and Context API in case management" 
        author="Laila Hassan" 
        date="12-March-2024" 
        time="read since 10 minutes"
        >
        Discover the differences between Redux and Context API and when to choose each. We will also discuss cases of using
         process and tips to improve performance.
        </Article>
        
        <Article 
        title="Improved Performance of React Apps: Tried Tips" 
        author="Mohamed Khaled" 
        date="15-March-2024" 
        time="Improved Performance of React Apps: Tried Tips"
        >
        Learn how to use Hooks like useState and useEffect to simplify case management and side effects in your ingredients. 
        We will also cover how to create dedicated Hooks to easily reuse logic.
        </Article>
      </section>
    </main>
  );
}

export default App;
