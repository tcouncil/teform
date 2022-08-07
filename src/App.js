import './App.css';
import React, { useEffect } from 'react';
function App() {

  let teInput = '';
  const [verbsUsed] = React.useState([]);
  const [verbIndex, setVerbIndex] = React.useState(0);
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
    {
      verb: 'かく',
      verbType: 'u',
      teForm: 'かいて',
      kanjiForm: '書く',
      kanjiTeForm: '書いて',
      definition: 'to write (person に thing を)',
      teConjugation: 'く → いて'
    },
    {
      verb: 'とる',
      verbType: 'u',
      teForm: 'とって',
      kanjiForm: '撮る',
      kanjiTeForm: '撮って',
      definition: 'to take(a picture) (~を)',
      teConjugation: 'る → って'
    },
    {
      verb: 'まつ',
      verbType: 'u',
      teForm: 'まって',
      kanjiForm: '待つ',
      kanjiTeForm: '待って',
      definition: 'to wait (~を)',
      teConjugation: 'つ → って'
    }, {
      verb: 'わかる',
      verbType: 'u',
      teForm: 'わかって',
      kanjiForm: 'わかる',
      kanjiTeForm: 'わかって',
      definition: 'to understand (~が)',
      teConjugation: 'る → って'
    }, {
      verb: 'いる',
      verbType: 'ru',
      teForm: 'いて',
      kanjiForm: 'いる',
      kanjiTeForm: 'いて',
      definition: '(a person) is in...; stays at... (place に person が)',
      teConjugation: 'る → て'
    },
    // Chapter 5 Verbs
    {
      verb: 'およぐ',
      verbType: 'u',
      teForm: 'およいで',
      kanjiForm: '泳ぐ',
      kanjiTeForm: '泳いで',
      definition: 'to swim',
      teConjugation: 'ぐ → いで'
    },
    {
      verb: 'きく',
      verbType: 'u',
      teForm: 'きいて',
      kanjiForm: '聞く',
      kanjiTeForm: '聞いて',
      definition: 'to ask (person に)',
      teConjugation: 'く → いて'
    },
    {
      verb: 'のる',
      verbType: 'u',
      teForm: 'のって',
      kanjiForm: '乗る',
      kanjiTeForm: '乗って',
      definition: 'to ride; to board (~に)',
      teConjugation: 'る → って'
    },
    {
      verb: 'やる',
      verbType: 'u',
      teForm: 'やって',
      kanjiForm: 'やる',
      kanjiTeForm: 'やって',
      definition: 'to do; to perform (~を)',
      teConjugation: 'る → って'
    },
    {
      verb: 'でかける',
      verbType: 'ru',
      teForm: 'でかけて',
      kanjiForm: '出かける',
      kanjiTeForm: '出かけて',
      definition: 'to go out',
      teConjugation: 'る → て'
    },
    // Chapter 6 Verbs
    {
      verb: 'あそぶ',
      verbType: 'u',
      teForm: 'あそんで',
      kanjiForm: '遊ぶ',
      kanjiTeForm: '遊んで',
      definition: 'to play; to spend time pleasantly',
      teConjugation: 'ぶ → んで'
    },
    {
      verb: 'いそぐ',
      verbType: 'u',
      teForm: 'いそいで',
      kanjiForm: '急ぐ',
      kanjiTeForm: '急いで',
      definition: 'to hurry',
      teConjugation: 'ぐ → いで'
    },
    {
      verb: 'かえす',
      verbType: 'u',
      teForm: 'かえして',
      kanjiForm: '返す',
      kanjiTeForm: '返して',
      definition: 'to return (a thing) (person に thing を)',
      teConjugation: 'す → して'
    },
    {
      verb: 'けす',
      verbType: 'u',
      teForm: 'けして',
      kanjiForm: '消す',
      kanjiTeForm: '消して',
      definition: 'to turn off; to erase (~を)',
      teConjugation: 'す → して'
    },
    {
      verb: 'しぬ',
      verbType: 'u',
      teForm: 'しんで',
      kanjiForm: '死ぬ',
      kanjiTeForm: '死んで',
      definition: 'to die',
      teConjugation: 'ぬ → んで'
    },
    {
      verb: 'すわる',
      verbType: 'u',
      teForm: 'すわって',
      kanjiForm: '座る',
      kanjiTeForm: '座って',
      definition: 'to sit down (seat に)',
      teConjugation: 'る → って'
    },
    {
      verb: 'たつ',
      verbType: 'u',
      teForm: 'たって',
      kanjiForm: '立つ',
      kanjiTeForm: '立って',
      definition: 'to stand up',
      teConjugation: 'つ → って'
    },
    {
      verb: 'たばこをすう',
      verbType: 'u',
      teForm: 'たばこをすって',
      kanjiForm: 'たばこを吸う',
      kanjiTeForm: 'たばこを吸って',
      definition: 'to smoke',
      teConjugation: 'う → って'
    },
    {
      verb: 'つかう',
      verbType: 'u',
      teForm: 'つかって',
      kanjiForm: '使う',
      kanjiTeForm: '使って',
      definition: 'to use (~を)',
      teConjugation: 'う → って'
    },
    {
      verb: 'てつだう',
      verbType: 'u',
      teForm: 'てつだって',
      kanjiForm: '手伝う',
      kanjiTeForm: '手伝って',
      definition: 'to help (person/task を)',
      teConjugation: 'う → って'
    },
    {
      verb: 'はいる',
      verbType: 'u',
      teForm: 'はいって',
      kanjiForm: '入る',
      kanjiTeForm: '入って',
      definition: 'to enter (~に)',
      teConjugation: 'る → って'
    },
    {
      verb: 'もつ',
      verbType: 'u',
      teForm: 'もって',
      kanjiForm: '持つ',
      kanjiTeForm: '持って',
      definition: 'to carry; to hold (~を)',
      teConjugation: 'つ → って'
    },
    {
      verb: 'やすむ',
      verbType: 'u',
      teForm: 'やすんで',
      kanjiForm: '休む',
      kanjiTeForm: '休んで',
      definition: 'to be absent(from...) (~を); to rest',
      teConjugation: 'む → んで'
    },
    {
      verb: 'あける',
      verbType: 'ru',
      teForm: 'あけて',
      kanjiForm: '開ける',
      kanjiTeForm: '開けて',
      definition: 'to open (something) (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'しめる',
      verbType: 'ru',
      teForm: 'しめて',
      kanjiForm: '閉める',
      kanjiTeForm: '閉めて',
      definition: 'to close (something) (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'おしえる',
      verbType: 'ru',
      teForm: 'おしえて',
      kanjiForm: '教える',
      kanjiTeForm: '教えて',
      definition: 'to teach; to instruct (person に thing を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'わすれる',
      verbType: 'ru',
      teForm: 'わすれて',
      kanjiForm: '忘れる',
      kanjiTeForm: '忘れて',
      definition: 'to forget; to leave behind (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'おりる',
      verbType: 'ru',
      teForm: 'おりて',
      kanjiForm: '降りる',
      kanjiTeForm: '降りて',
      definition: 'to get off (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'かりる',
      verbType: 'ru',
      teForm: 'かりて',
      kanjiForm: '借りる',
      kanjiTeForm: 'て',
      definition: 'to borrow (person に thing を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'シャワーをあびる',
      verbType: 'ru',
      teForm: 'シャワーをあびて',
      kanjiForm: 'シャワーを浴びる',
      kanjiTeForm: 'シャワーを浴びて',
      definition: 'to take a shower',
      teConjugation: 'る → て'
    },
    {
      verb: 'つける',
      verbType: 'ru',
      teForm: 'つけて',
      kanjiForm: 'つける',
      kanjiTeForm: 'つけて',
      definition: 'to turn on (~を)',
      teConjugation: 'る → て'
    },
    {
      verb: 'でんわする',
      verbType: 'irregular',
      teForm: 'でんわして',
      kanjiForm: '電話する',
      kanjiTeForm: '電話して',
      definition: 'to call (~に)',
      teConjugation: 'する → して'
    },
    {
      verb: 'つれてくる',
      verbType: 'irregular',
      teForm: 'つれてきて',
      kanjiForm: '連れてくる',
      kanjiTeForm: '連れてきて',
      definition: 'to bring (a person) (~を)',
      teConjugation: 'くる → きて'
    },
    {
      verb: 'もってくる',
      verbType: 'irregular',
      teForm: 'もってきて',
      kanjiForm: '持ってくる',
      kanjiTeForm: '持ってきて',
      definition: 'to bring (a thing) (~を)',
      teConjugation: 'くる → きて'
    },
  ]

  const drawVerb = () => {
    let i = Math.floor(Math.random() * verbs.length);

    if (verbsUsed.length === verbs.length) {
      verbsUsed.length = 0;
    }

    if (verbsUsed.includes(i)) {
      while (verbsUsed.includes(i)) {
        i = Math.floor(Math.random() * verbs.length);
      }

    }

    setVerbIndex(i);
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

      verbsUsed.push(verbIndex);
      document.getElementById('teAnswer').innerText = `Correct!\n\nLast verb: ${verb} → ${answer}\n${teConjugation}\n${verbType}-type verb`;
      drawVerb();
      document.getElementById('teInput').value = '';
    } else {
      document.getElementById('teAnswer').innerText = `I'm sorry that isn't quite right, try again!\n\nHint: ${verb} is a ${verbType}-type verb`;
    }
  }

  useEffect(() => {
    if (count === 0)
      drawVerb();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>て form conjugation quiz</h1>
        <p className='instruction'>Enter the て form for the verb</p>
        <div>

          <div className="verbCard">
            <p className='furigana'>
              <small>{verb}</small><br />
            </p>
            <h2>{verbKanji}</h2>
            <h6><i>{definition}</i></h6>
          </div>

          <form className='form-group'>
            <input id='teInput' className='form-control' onChange={onChange} required placeholder='て form' />
            <button className='btn btn-primary' type='submit' onClick={checkForm}>Check</button>
          </form>
        </div>

        <h6>{correct} / {count}</h6>
        <div className='answerCard'>
          <h5 id='teAnswer'> </h5>
        </div>
      </header>
    </div>
  );
}

export default App;