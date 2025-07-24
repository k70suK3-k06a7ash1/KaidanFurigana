interface KanjiCompound {
  word: string;
  reading: string;
}

interface KanjiEntry {
  kanji: string;
  readings: string[];
  compounds: KanjiCompound[];
}

interface JLPTOptionalKanjiLevel {
  N4_kanji?: KanjiEntry[]; // N4レベルはオプショナル
  N5_kanji?: KanjiEntry[]; // N5レベルはオプショナル
}

// JSON全体の型
export type JLPTKanjiList = JLPTOptionalKanjiLevel;

// もしN4とN5のどちらか一方しか存在しない場合もあるなら、上記のJLPTOptionalKanjiLevelで十分です。
// もし必ずN4_kanjiとN5_kanjiの両方が存在するJSONを想定するなら、以下のように定義できます。
export interface JLPTRequiredKanjiLevel {
  N4_kanji: KanjiEntry[];
  N5_kanji: KanjiEntry[];
}