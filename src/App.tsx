import './App.css'
import { Furigana, FuriganaText } from './components/FuriganaText'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>怪談フリガナ</h1>
        <p>日本語の文章にルビを振って読みやすく</p>
      </header>
      
      <main>
        <article>
          <FuriganaText>
            <h2>
              <Furigana kanji="座敷童子" reading="ざしきわらし" />
            </h2>
            
            <p>
              <Furigana kanji="座敷童子" reading="ざしきわらし" />は、
              <Furigana kanji="岩手県" reading="いわてけん" />に
              <Furigana kanji="伝" reading="つた" />わる
              <Furigana kanji="子" reading="こ" />どもの
              <Furigana kanji="姿" reading="すがた" />をした
              <Furigana kanji="妖怪" reading="ようかい" />です。
              <Furigana kanji="旧家" reading="きゅうか" />や
              <Furigana kanji="裕福" reading="ゆうふく" />な
              <Furigana kanji="家" reading="いえ" />に
              <Furigana kanji="住" reading="す" />み
              <Furigana kanji="着" reading="つ" />くとされ、その
              <Furigana kanji="家" reading="いえ" />に
              <Furigana kanji="福" reading="ふく" />をもたらすと
              <Furigana kanji="言" reading="い" />われています。
            </p>
            
            <p>
              おかっぱ
              <Furigana kanji="頭" reading="あたま" />の
              <Furigana kanji="可愛" reading="かわい" />らしい
              <Furigana kanji="子" reading="こ" />どもの
              <Furigana kanji="姿" reading="すがた" />で
              <Furigana kanji="描" reading="えが" />かれることが
              <Furigana kanji="多" reading="おお" />く、いたずら
              <Furigana kanji="好" reading="ず" />きですが、
              <Furigana kanji="家" reading="いえ" />の
              <Furigana kanji="繁栄" reading="はんえい" />を
              <Furigana kanji="見守" reading="みまも" />る
              <Furigana kanji="優" reading="やさ" />しい
              <Furigana kanji="妖怪" reading="ようかい" />として
              <Furigana kanji="親" reading="した" />しまれています。
            </p>
          </FuriganaText>
        </article>
      </main>
    </div>
  )
}

export default App
