import React from 'react';
import type { JLPTRequiredKanjiLevel } from '../types/Kanji';
// import { Furigana } from './FuriganaText';

interface TableOfContentsProps {
  content: JLPTRequiredKanjiLevel;
  onSectionClick: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content
//  , onSectionClick
 }) => {
  const scrollToKanji = (kanji: string) => {
    const element = document.querySelector(`[data-kanji="${kanji}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="table-of-contents">
      <h2>漢字一覧</h2>
      <div className="kanji-levels">
        <div className="kanji-level">
          <h3 className="level-header">N5 漢字</h3>
          <div className="kanji-grid-nav">
            {content.N5_kanji.map(kanjiEntry => (
              <button
                key={kanjiEntry.kanji}
                onClick={() => scrollToKanji(kanjiEntry.kanji)}
                className="kanji-nav-button"
                title={`${kanjiEntry.kanji} (${kanjiEntry.readings.join('、')})`}
              >
                {kanjiEntry.kanji}
              </button>
            ))}
          </div>
        </div>
        
        <div className="kanji-level">
          <h3 className="level-header">N4 漢字</h3>
          <div className="kanji-grid-nav">
            {content.N4_kanji.map(kanjiEntry => (
              <button
                key={kanjiEntry.kanji}
                onClick={() => scrollToKanji(kanjiEntry.kanji)}
                className="kanji-nav-button"
                title={`${kanjiEntry.kanji} (${kanjiEntry.readings.join('、')})`}
              >
                {kanjiEntry.kanji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};