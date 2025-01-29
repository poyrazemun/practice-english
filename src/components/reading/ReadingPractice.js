import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stories = [
  {
    title: "The Mysterious Door",
    text: `Emma found an old **ornate** key in her grandmother's attic. She searched the house and discovered a locked door she had never seen before. With curiosity, she inserted the key. The door creaked open, revealing a hidden library full of ancient books. As she stepped inside, a **whispering** voice said, "Welcome, seeker of knowledge."`,
    highlightedWords: ['ornate', 'whispering']
  },
  {
    title: "The Lost Kitten",
    text: `Tom was walking home when he heard a **faint** meow. He looked around and saw a tiny kitten stuck under a bench. The kitten was **shivering** in the cold. Carefully, Tom picked it up and took it home. After feeding and warming it, the kitten purred happily in his arms. Tom smiled—he had just made a new friend.`,
    highlightedWords: ['faint', 'shivering']
  },
  {
    title: "The Magic Paintbrush",
    text: `Lily loved to paint, but she never had enough colors. One day, she found a **peculiar** paintbrush in an old shop. The shopkeeper smiled mysteriously and told her it was special. When Lily painted a bird, it flew off the canvas! She realized the brush could make her paintings come to life.`,
    highlightedWords: ['peculiar']
  },
  {
    title: "The Stolen Bicycle",
    text: `David's bicycle was missing. He searched everywhere but couldn't find it. Feeling **frustrated**, he sat on a bench. Suddenly, he saw a boy riding his bicycle! Instead of getting angry, David followed him and kindly asked why he took it. The boy looked **guilty** and admitted he had no bike of his own. David decided to help him get one, and they became friends.`,
    highlightedWords: ['frustrated', 'guilty']
  },
  {
    title: "The Haunted House",
    text: `Lucy and her brother Jack walked past the **abandoned** house every day. People said it was haunted. One evening, Jack dared Lucy to enter. Inside, they heard a **ghostly** laugh. Scared, they turned to run, but then an old man appeared. "I live here," he chuckled. "That was just my radio!"`,
    highlightedWords: ['abandoned', 'ghostly']
  },
  {
    title: "The Time Capsule",
    text: `In their backyard, Mia and her brother found a **rusty** metal box buried under an oak tree. Inside were letters, photos, and a diary from a boy who lived 50 years ago. They felt a deep connection to him and decided to write their own letters and bury them for the future.`,
    highlightedWords: ['rusty']
  },
  {
    title: "The Enchanted Mirror",
    text: `James discovered an **antique** mirror in his grandmother's attic. When he looked into it, he saw a boy waving at him from the other side. The boy introduced himself as William from the past. They could talk through the mirror, sharing stories of their different worlds.`,
    highlightedWords: ['antique']
  },
  {
    title: "The Runaway Balloon",
    text: `Emma's red balloon slipped from her hand and floated into the sky. She was **devastated** but later found a letter tied to another balloon in her yard. It was from a girl in another town who had lost her balloon too. They became pen pals and shared their adventures through letters.`,
    highlightedWords: ['devastated']
  },
  {
    title: "The Secret Garden",
    text: `Liam's new house had a locked **overgrown** garden. One day, he found a hidden path leading inside. The garden was full of **vibrant** flowers, butterflies, and a tiny pond. It had been forgotten for years, but Liam decided to bring it back to life.`,
    highlightedWords: ['overgrown', 'vibrant']
  },
  {
    title: "The Missing Notebook",
    text: `Sophia's favorite notebook was missing. She looked everywhere but couldn't find it. Feeling **disheartened**, she sat in the park and noticed a small girl writing in a notebook—hers! The girl had found it and was waiting to return it. Sophia smiled, happy that kindness still existed in the world.`,
    highlightedWords: ['disheartened']
  }
];

function ReadingPractice() {
  const [currentStory, setCurrentStory] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const navigate = useNavigate();

  const goHome = () => {
    if (window.confirm('Are you sure you want to return to home page?')) {
      navigate('/');
    }
  };

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    }
  };

  const startReading = () => {
    setShowInstructions(false);
  };

  const formatText = (text) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <span key={index} className="highlighted-word">{part}</span> : part
    );
  };

  if (showInstructions) {
    return (
      <div className="reading-container">
        <div className="reading-header">
          <h2>Reading Practice</h2>
          <button onClick={goHome} className="home-button">
            Home
          </button>
        </div>

        <div className="story-card">
          <h3>How to Practice Reading</h3>
          <div className="instructions">
            <h4>Instructions:</h4>
            <ol>
              <li>Read the story carefully.</li>
              <li>Pay attention to the highlighted words.</li>
              <li>Look up the meanings of highlighted words.</li>
              <li>Write down the definitions in your notebook.</li>
              <li>Create your own sentence using each highlighted word.</li>
            </ol>
          </div>
          <button onClick={startReading} className="next-button">
            Start Reading
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reading-container">
      <div className="reading-header">
        <h2>Reading Practice</h2>
        <button onClick={goHome} className="home-button">
          Home
        </button>
      </div>

      <div className="story-card">
        <h3>{stories[currentStory].title}</h3>
        <div className="story-text">
          {formatText(stories[currentStory].text)}
        </div>

        <div className="highlighted-words">
          <h4>Words to Learn:</h4>
          <ul>
            {stories[currentStory].highlightedWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>

        {currentStory < stories.length - 1 && (
          <button onClick={nextStory} className="next-button">
            Next Story
          </button>
        )}
      </div>
    </div>
  );
}

export default ReadingPractice; 