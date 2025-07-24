import React from 'react';
import type { JLPTRequiredKanjiLevel } from '../types/Kanji';
import { Furigana } from './FuriganaText';

interface TableOfContentsProps {
  content: JLPTRequiredKanjiLevel;
  onSectionClick: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content, onSectionClick }) => {
  return (
    <nav className="table-of-contents">
      <h2>目次</h2>
      <ul>
        <li key="N4_kanji">
          <h3 className="level-header">N4_kanji</h3>
          <ul>
            {content.N4_kanji.flatMap(kanjiEntry => 
              kanjiEntry.relatedContent.flatMap(siteContent => 
                siteContent.sections.map(section => (
                  <li key={section.id}>
                    <button
                      onClick={() => onSectionClick(section.id)}
                      className="toc-link"
                    >
                      <Furigana kanji={section.title.kanji} reading={section.title.reading} />
                    </button>
                  </li>
                ))
              )
            )}
          </ul>
        </li>
        <li key="N5_kanji">
          <h3 className="level-header">N5_kanji</h3>
          <ul>
            {content.N5_kanji.flatMap(kanjiEntry => 
              kanjiEntry.relatedContent.flatMap(siteContent => 
                siteContent.sections.map(section => (
                  <li key={section.id}>
                    <button
                      onClick={() => onSectionClick(section.id)}
                      className="toc-link"
                    >
                      <Furigana kanji={section.title.kanji} reading={section.title.reading} />
                    </button>
                  </li>
                ))
              )
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};