import { useRef } from 'react'
import './App.css'
import { ContentSection } from './components/ContentSection'
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
        {[...JapaneseLanguageProficiencyTestKanjiList.N4_kanji, ...JapaneseLanguageProficiencyTestKanjiList.N5_kanji].flatMap(kanjiEntry => 
          kanjiEntry.relatedContent.flatMap(content => 
            content.sections.map(section => (
              <ContentSection 
                key={section.id} 
                ref={setSectionRef(section.id)}
                section={section} 
              />
            ))
          )
        )}
      </main>
      
      <ScrollToTop />
    </div>
  )
}


export default App
