import './App.css';
import React, { useEffect } from 'react';
function App() {

  let teInput = '';
  let teAnswer = '';
  const [count, setCount] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [verb, setVerb] = React.useState('');
  const [verbKanji, setVerbKanji] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [kanjiAnswer, setKanjiAnswer] = React.useState('');
  const [definition, setDefinition] = React.useState('');
  const [teConjugation, setTeConjugation] = React.useState('');
  const [verbType, setVerbType] = React.useState('');



  const verbs = [
    // Chapter 3 Verbs
    {
      verb: 'いく',
      verbType: 'u',
      teForm: 'いって',
      kanjiForm: '行く',
      kanjiTeForm: '行って',
      definition: 'to go (destination に/へ)',
      teConjugation: 'く(Exception) → って'
    },
    {
      verb: 'かえる',
      verbType: 'u',
      teForm: 'かえって',
      kanjiForm: '帰る',
      kanjiTeForm: '帰って',
      definition: 'to go back; to return (destination に/へ)',
      teConjugation: 'る → って'
    },
    {
      verb: 'きく',
      verbType: 'u',
      teForm: 'きいて',
      kanjiForm: '聞く',
      kanjiTeForm: '聞いて',
      definition: 'to listen; to hear (~を)',
      teConjugation: 'く → いて'
    },
    {
      verb: 'のむ',
      verbType: 'u',
      teForm: 'のんで',
      kanjiForm: '飲む',
      kanjiTeForm: '飲んで',
      definition: 'to drink (~を)',
      teConjugation: 'む → んで'
    },
    {
      verb: 'はなす',
      verbType: 'u',
      teForm: 'はなして',
      kanjiForm: '話す',
      kanjiTeForm: '話して',
      definition: 'to speak; to talk (language を/で)',
      teConjugation: 'す → して'
    },
    {
      verb: 'よむ',
      verbType: 'u',
      teForm: 'よんで',
      kanjiForm: '読む',
      kanjiTeForm: '読んで',
      definition: 'to read(~を)',
      teConjugation: 'む → んで'
    },
    {
      verb: 'おきる',
      verbType: 'ru',
      teForm: 'おきて',
      kanjiForm: '起きる',
      kanjiTeForm: '起きて',
      definition: 'to get up',
      teConjugation: 'る → て'
    },
    {
      verb: 'たべる',
      verbType: 'ru',
      teForm: 'たべて',
      kanjiForm: '食べる',
      kanjiTeForm: '食べて',
      definition: 'to eat (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'ねる',
      verbType: 'ru',
      teForm: 'ねて',
      kanjiForm: '寝る',
      kanjiTeForm: '寝て',
      definition: 'to sleep; to go to sleep',
      teConjugation: 'る → て'
    },
    {
      verb: 'みる',
      verbType: 'ru',
      teForm: 'みて',
      kanjiForm: '見る',
      kanjiTeForm: '見て',
      definition: 'to see; to look at; to watch (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'くる',
      verbType: 'irregular',
      teForm: 'きて',
      kanjiForm: '来る',
      kanjiTeForm: '来て',
      definition: 'to come (destination に/へ)',
      teConjugation: 'る → て'
    },
    {
      verb: 'する',
      verbType: 'irregular',
      teForm: 'して',
      kanjiForm: 'する',
      kanjiTeForm: 'して',
      definition: 'to do (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'べんきょうする',
      verbType: 'irregular',
      teForm: 'べんきょうして',
      kanjiForm: '勉強する',
      kanjiTeForm: '勉強して',
      definition: 'to study (~を)',
      teConjugation: 'る → て'
    },
    // Chapter 4 verbs
    {
      verb: 'あう',
      verbType: 'u',
      teForm: 'あって',
      kanjiForm: '会う',
      kanjiTeForm: '会って',
      definition: 'to meet; to see(a person) (person に)',
      teConjugation: 'う → って'
    },
    {
      verb: 'ある',
      verbType: 'u',
      teForm: 'あって',
      kanjiForm: 'ある',
      kanjiTeForm: 'あって',
      definition: 'there is... (place に thing が)',
      teConjugation: 'る → って'
    },
    {
      verb: 'かう',
      verbType: 'u',
      teForm: 'かって',
      kanjiForm: '買う',
      kanjiTeForm: '買って',
      definition: 'to buy (~を)',
      teConjugation: 'う → って'
    },
  ];

  const drawVerb = () => {
    const i = Math.floor(Math.random() * verbs.length);

    setVerb(verbs[i].verb);
    setVerbKanji(verbs[i].kanjiForm);
    setAnswer(verbs[i].teForm);
    setKanjiAnswer(verbs[i].kanjiTeForm);
    setDefinition(verbs[i].definition);
    setTeConjugation(verbs[i].teConjugation);
    setVerbType(verbs[i].verbType)
  }


  const onChange = () => {
    teInput = document.getElementById('teInput').value;
  }
  const checkForm = (event) => {
    event.preventDefault();
    setCount(count + 1);
    if (teInput === answer || teInput === kanjiAnswer) {
      setCorrect(correct + 1);
      document.getElementById('teAnswer').innerText = `Correct!\n\nLast verb: ${verb} → ${answer}\n${teConjugation}\n${verbType}-type verb`;
      drawVerb();
      document.getElementById('teInput').value = '';
    } else {
      document.getElementById('teAnswer').innerText = `I'm sorry that isn't quite right, try again!\n\n${verbType}-type verb`;
      console.log(teInput);
    }
  }

  useEffect(() => {
    if (count === 0)
      drawVerb();
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>て form conjugation quiz
          </h1>
          <p>Enter the て form for the verb</p>
          <div className="verbCard">
            <p>
              <small>{verb}</small><br />
            </p>
            <h2><b>{verbKanji}</b></h2>
            <h6><i>{definition}</i></h6>
          </div>

          <form className='form-group'>
            <input id='teInput' className='form-control' onChange={onChange} required placeholder='て form' />
            <button className='btn btn-primary' type='submit' onClick={checkForm}>Check</button>
          </form>
        </div>
        <div>
          <h6>{correct} / {count}</h6>
          <h5 id='teAnswer'></h5>
        </div>
      </header>
    </div>
  );
}

export default App;
