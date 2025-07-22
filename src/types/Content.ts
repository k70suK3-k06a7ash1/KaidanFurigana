export interface FuriganaWord {
  kanji: string;
  reading: string;
}

export interface ContentSection {
  id: string;
  title: FuriganaWord;
  paragraphs: Array<Array<string | FuriganaWord>>;
}

export interface SiteContent {
  sections: ContentSection[];
}