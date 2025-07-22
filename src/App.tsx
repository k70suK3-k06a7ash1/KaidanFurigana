import './App.css'
import { ContentSection } from './components/ContentSection'
import { siteContent } from './data/content'

const App = () => (
    <div className="app-container">
      <header>
        <h1>怪談フリガナ</h1>
        <p>日本語の文章にルビを振って読みやすく</p>
      </header>
      
      <main>
        {siteContent.sections.map(section => (
          <ContentSection key={section.id} section={section} />
        ))}
      </main>
    </div>
  )


export default App
