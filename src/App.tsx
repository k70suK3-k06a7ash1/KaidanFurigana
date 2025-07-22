import { useRef } from 'react'
import './App.css'
import { ContentSection } from './components/ContentSection'
import { TableOfContents } from './components/TableOfContents'
import { siteContent } from './data/content'

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
        content={siteContent} 
        onSectionClick={handleSectionClick}
      />
      
      <main>
        {siteContent.sections.map(section => (
          <ContentSection 
            key={section.id} 
            ref={setSectionRef(section.id)}
            section={section} 
          />
        ))}
      </main>
    </div>
  )
}


export default App
