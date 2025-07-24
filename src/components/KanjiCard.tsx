import React, { useState } from 'react';
import type { KanjiEntry } from '../types/Kanji';
import { ContentSection } from './ContentSection';

interface KanjiCardProps {
  kanjiEntry: KanjiEntry;
  onSectionClick: (sectionId: string) => void;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

export const KanjiCard: React.FC<KanjiCardProps> = ({ 
  kanjiEntry, 
  onSectionClick, 
  setSectionRef 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="kanji-card" data-kanji={kanjiEntry.kanji}>
      <div className="kanji-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="kanji-main">
          <span className="kanji-character">{kanjiEntry.kanji}</span>
          <div className="kanji-info">
            <div className="kanji-readings">
              <span className="label">読み: </span>
              {kanjiEntry.readings.map((reading, index) => (
                <span key={index} className="reading">
                  {reading}{index < kanjiEntry.readings.length - 1 ? '' : ''}
                </span>
              ))}
            </div>
            <div className="kanji-compounds-preview">
              <div className="label">例: </div>
              <div className='kanji-compounds-preview'>
              {kanjiEntry.compounds.map((compound, index) => (
                <span key={index} className="compound-preview">
                  {compound.word}({compound.reading}){index < Math.min(kanjiEntry.compounds.length, 3) - 1 ? '' : ''}
                </span>
              ))}
              </div>
             <span className="more">など</span>
            </div>
          </div>
        </div>
        <div className="expand-toggle">
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>

      {isExpanded && (
        <div className="kanji-details">
          <div className="compounds-section">
            <h4>複合語</h4>
            <div className="compounds-grid">
              {kanjiEntry.compounds.map((compound, index) => (
                <div key={index} className="compound-item">
                  <span className="compound-word">{compound.word}</span>
                  <span className="compound-reading">({compound.reading})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="related-stories">
            <h4>関連する物語</h4>
            {kanjiEntry.relatedContent.map((content) => 
              content.sections.map(section => (
                <div key={section.id} className="story-preview">
                  <button
                    onClick={() => onSectionClick(section.id)}
                    className="story-link"
                  >
                    <ruby>
                      {section.title.kanji}
                      <rt>{section.title.reading}</rt>
                    </ruby>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Render the actual content sections when expanded */}
      {isExpanded && (
        <div className="content-sections">
          {kanjiEntry.relatedContent.map((content) =>
            content.sections.map(section => (
              <ContentSection
                key={section.id}
                ref={setSectionRef(section.id)}
                section={section}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};