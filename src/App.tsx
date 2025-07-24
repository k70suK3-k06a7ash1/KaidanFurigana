import { useRef } from 'react'
import './App.css'
import { KanjiCard } from './components/KanjiCard'
import { TableOfContents } from './components/TableOfContents'
import { ScrollToTop } from './components/ScrollToTop'
import { JapaneseLanguageProficiencyTestKanjiList } from './data/JapaneseLanguageProficiencyTestKanjiList'

const App = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const handleSectionClick = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el
  }

  return (
    <div className="app-container">
      <header>
        <h1>怪談フリガナ</h1>
        <p>日本語の文章にルビを振って読みやすく</p>
      </header>
      
      <TableOfContents 
        content={JapaneseLanguageProficiencyTestKanjiList} 
        onSectionClick={handleSectionClick}
      />
      
      <main>
        <div className="kanji-grid">
          <div className="jlpt-level-section">
            <h2 className="jlpt-level-title">N5 漢字</h2>
            {JapaneseLanguageProficiencyTestKanjiList.N5_kanji.map(kanjiEntry => (
              <KanjiCard
                key={kanjiEntry.kanji}
                kanjiEntry={kanjiEntry}
                onSectionClick={handleSectionClick}
                setSectionRef={setSectionRef}
              />
            ))}
          </div>
          
          <div className="jlpt-level-section">
            <h2 className="jlpt-level-title">N4 漢字</h2>
            {JapaneseLanguageProficiencyTestKanjiList.N4_kanji.map(kanjiEntry => (
              <KanjiCard
                key={kanjiEntry.kanji}
                kanjiEntry={kanjiEntry}
                onSectionClick={handleSectionClick}
                setSectionRef={setSectionRef}
              />
            ))}
          </div>
        </div>
      </main>
      
      <ScrollToTop />
    </div>
  )
}


export default App
