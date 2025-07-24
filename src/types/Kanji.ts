import type { SiteContent } from "./Content";

interface KanjiCompound {
  word: string;
  reading: string;
}

export interface KanjiEntry {
  kanji: string;
  readings: string[];
  compounds: KanjiCompound[];
  relatedContent: SiteContent[]; // related Content を定義
}

interface JLPTOptionalKanjiLevel {
  N4_kanji?: KanjiEntry[]; // N4レベルはオプショナル
  N5_kanji?: KanjiEntry[]; // N5レベルはオプショナル
}

export type JLPTKanjiList = JLPTOptionalKanjiLevel;

export interface JLPTRequiredKanjiLevel {
  N4_kanji: KanjiEntry[];
  N5_kanji: KanjiEntry[];
}