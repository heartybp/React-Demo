import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const quotes = [
    "Power comes in response to a need, not a desire. You have to create that need. – Goku, Dragon Ball Z",
    "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder. – Gildarts Clive, Fairy Tail",
    "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else in return. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. – Madara Uchiha, Naruto Shippuden",
    "I am not a hero because I want your approval. I do it because I want to! – Izuku Midoriya, My Hero Academia",
    "You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want. – Ging Freecss, Hunter x Hunter",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar. – Monkey D. Luffy, One Piece",
    "Fear is not what holds us back. Fear is what gives us the strength to push forward. – Erza Scarlet, Fairy Tail",
    "I’ll take a potato chip... and eat it! – Light Yagami, Death Note",
    "You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want. – Ging Freecss, Hunter x Hunter",
    "Power is not determined by your size, but by the size of your heart and dreams. – Monkey D. Luffy, One Piece",
    "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean… is the Pirate King! – Monkey D. Luffy, One Piece",
    "Forgetting something is like it never happened. – C.C., Code Geass",
    "In our world, whenever there is light, there are also shadows. – Madara Uchiha, Naruto Shippuden",
    "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else in return. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    "The world isn’t perfect. But it’s there for us, trying the best it can... that’s what makes it so damn beautiful. – Roy Mustang, Fullmetal Alchemist: Brotherhood",
    "A lesson in failure is also a lesson in humility. – Jiraiya, Naruto",
    "Whether a fish lives in a clear stream or a muddy pond, it is still a fish. – Ginko, Mushishi",
    "Sometimes, we have to look beyond what we want and do what's best. – Piccolo, Dragon Ball Z",
    "In this world, there are very few things worth running after with all your heart. – Kurotsuchi Mayuri, Bleach",
    "Being strong isn't just about having power or ability. It's about one's spirit. – Erza Scarlet, Fairy Tail",
    "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
    "A sword is a weapon. The art of swordsmanship is learning how to kill. – Kenshin Himura, Rurouni Kenshin",
    "A lesson learned without sacrifice is meaningless. That’s because you can’t gain something without losing something first. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    "You have to accept the fact that you're not the best and have all the will to strive to be better than anyone you face. – Roronoa Zoro, One Piece",
    "When you give up, that's when the game is over. – Misaki Ayuzawa, Kaichou wa Maid-sama!",
    "Those who break the rules are scum, but those who abandon their friends are worse than scum. – Kakashi Hatake, Naruto",
    "Whether a fish lives in a clear stream or a muddy pond, it is still a fish. – Ginko, Mushishi",
    "Power is not determined by your size, but the size of your heart and dreams. – Monkey D. Luffy, One Piece",
    "I want to be the very best, like no one ever was. – Ash Ketchum, Pokémon"
  ];

  const [currentQuote, setCurrentQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]
  };

  const fetchQuote = () => {
    setLoading(true);
    setTimeout(() =>{
      const quote = getRandomQuote();
      setCurrentQuote(quote);
      setLoading(false);
    },500);
  }

  useEffect(()=>{
    fetchQuote();
  }, []);


  return (
    <>
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <h1>Quote Generator</h1>
      </header>

      <div className="quote-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <p className="quote">{currentQuote}</p>
        )}
        <button onClick={fetchQuote} className="new-quote-button">
          New Quote
        </button>
      </div>

    </div>
      
    </>
  )
}

export default App
