#!/usr/bin/env -S deno run --allow-read --allow-write

import { ensureDir } from "https://deno.land/std@0.208.0/fs/mod.ts";

interface KanjiCompound {
  word: string;
  reading: string;
}

interface KanjiEntry {
  kanji: string;
  readings: string[];
  compounds: KanjiCompound[];
  relatedContent: any[];
}

interface JLPTRequiredKanjiLevel {
  N4_kanji: KanjiEntry[];
  N5_kanji: KanjiEntry[];
}

const sourceFile = "../src/data/JapaneseLanguageProficiencyTestKanjiList.ts";

async function main() {
  console.log("Reading source file...");
  
  // Import the source data
  const { JapaneseLanguageProficiencyTestKanjiList } = await import(sourceFile);
  
  const data: JLPTRequiredKanjiLevel = JapaneseLanguageProficiencyTestKanjiList;
  
  // Create directories
  await ensureDir("../src/data/kanji-entry/N5_kanji");
  await ensureDir("../src/data/kanji-entry/N4_kanji");
  
  console.log("Separating N5 kanji entries...");
  
  // Separate N5 kanji
  for (let i = 0; i < data.N5_kanji.length; i++) {
    const kanjiEntry = data.N5_kanji[i];
    const fileName = `../src/data/kanji-entry/N5_kanji/${kanjiEntry.kanji}.ts`;
    
    const content = `import type { KanjiEntry } from "../../../types/Kanji";

export const ${kanjiEntry.kanji}_entry: KanjiEntry = ${JSON.stringify(kanjiEntry, null, 2)};
`;
    
    await Deno.writeTextFile(fileName, content);
    console.log(`Created: ${fileName}`);
  }
  
  console.log("Separating N4 kanji entries...");
  
  // Separate N4 kanji
  for (let i = 0; i < data.N4_kanji.length; i++) {
    const kanjiEntry = data.N4_kanji[i];
    const fileName = `../src/data/kanji-entry/N4_kanji/${kanjiEntry.kanji}.ts`;
    
    const content = `import type { KanjiEntry } from "../../../types/Kanji";

export const ${kanjiEntry.kanji}_entry: KanjiEntry = ${JSON.stringify(kanjiEntry, null, 2)};
`;
    
    await Deno.writeTextFile(fileName, content);
    console.log(`Created: ${fileName}`);
  }
  
  console.log("Creating index files...");
  
  // Create N5 index file
  const n5IndexContent = data.N5_kanji.map(entry => 
    `export { ${entry.kanji}_entry } from "./${entry.kanji}";`
  ).join('\n') + '\n';
  
  await Deno.writeTextFile("../src/data/kanji-entry/N5_kanji/index.ts", n5IndexContent);
  
  // Create N4 index file
  const n4IndexContent = data.N4_kanji.map(entry => 
    `export { ${entry.kanji}_entry } from "./${entry.kanji}";`
  ).join('\n') + '\n';
  
  await Deno.writeTextFile("../src/data/kanji-entry/N4_kanji/index.ts", n4IndexContent);
  
  console.log("Done! All kanji entries have been separated.");
  console.log(`Total N5 entries: ${data.N5_kanji.length}`);
  console.log(`Total N4 entries: ${data.N4_kanji.length}`);
}

if (import.meta.main) {
  main().catch(console.error);
}