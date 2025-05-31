import { Leader } from "./leadersSlice";

export async function fetchLeadersCall(): Promise<Leader[]> {
  // Mocked leaders data with artificial delay
  return new Promise<Leader[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "ЛІДЕР ЛІДЕРЧУК",
          score: 88,
          supporters: [
            { name: "2ПЕТРЕНDКО ПЕТsdfРО", score: 23 },
            { name: "2ІВАН ІВDАНОВИЧfsd ІВАНОВ", score: 11 },
            { name: "2ВАСИЛЕDDНКО ВАСИsdfЛЬ", score: 4 },
            { name: "2СВІТЛDDАНsdЕНКО СВsdfІТЛАНА", score: 1 },
            { name: "2ПЕТРЕDDНКО ПЕfТРО", score: 1 },
          ],
        },
        {
          name: "LEADER 2",
          score: 66,
          supporters: [
            { name: "2ПЕТРЕНКО ПjЕТРО", score: 23 },
            { name: "LEADER LEADEROV", score: 11 },
            { name: "2ВАСИЛЕНКО ВАgСИЛЬ", score: 4 },
            { name: "2СВІТЛАНЕНКО cСВІТЛАНА", score: 1 },
            {
              name: "2ПЕТРЕНКО ПfЕТРО --->",
              score: 5,
              supporters: [
                { name: "3ПЕТРЕНКО ПaЕТРО", score: 23 },
                { name: "3ІВАН ІВАНОВИЧ ІvВАНОВ", score: 11 },
                { name: "3ВАСИЛЕНКО ВАСzИЛЬ", score: 4 },
                { name: "3СВІТЛАНЕНКО СВІcТЛАНА", score: 1 },
                { name: "3ПЕТРЕНКО ПЕТ РО", score: 1 },
              ],
            },
            { name: "ІВАН ІВАНОВИЧ ІВАcНОВ", score: 1 },
            {
              name: "ВАСИЛЕНКО ВАСИxЛЬ--->",
              score: 8,
              supporters: [
                { name: "ПЕТРЕНКО ПЕwТРО", score: 23 },
                { name: "ІВАН ІВАНОВИЧd ІВАНОВ", score: 11 },
                {
                  name: "ВАСИЛЕНКО ВАСhИЛЬ---->",
                  score: 4,
                  supporters: [
                    { name: "ПЕТРЕНКО ПdЕТРО", score: 23 },
                    { name: "ІВАН ІВАНОВfИЧ ІВАНОВ", score: 11 },
                    { name: "ВАСИЛЕНКО ВvАСИЛЬ", score: 4 },
                    { name: "СВІТЛАНЕНКО dСВІТЛАНА", score: 1 },
                    { name: "ПЕТРЕНКО ПЕТzРО", score: 1 },
                  ],
                },
                { name: "СВІТЛАНЕНКО СВІwТЛАНА", score: 1 },
                { name: "ПЕТРЕНКО ПЕТРgО", score: 1 },
              ],
            },
            { name: "СВІТЛАНЕНКО СВІТЛАfНА", score: 1 },
          ],
        },
        { name: "ПЕТРЕНКО ПЕТljРО", score: 66 },
        { name: "ІВАН ІВАНОgfВИЧ ІВАНОВ", score: 66 },
        { name: "ВАСИЛЕНfgКО ВАСИЛЬ", score: 66 },
        { name: "СВfgІТЛАНЕНКО СВІТЛАНА", score: 66 },
        { name: "ПЕТРЕgfНКО ПЕТРО", score: 66 },
        { name: "ІvcВАН ІВАНОВИЧ ІВАНОВ", score: 66 },
        { name: "vcВАСИЛЕНКО ВАСИЛЬ", score: 66 },
        { name: "СDFВІТЛАНЕНКО СВІТЛАНА", score: 66 },
        { name: "FПЕТРЕНКО ПЕТРО", score: 66 },
        { name: "FFІВАН ІВАНОВИЧ ІВАНОВ", score: 1 },
        { name: "ВАGFСИЛЕНКО ВАСИЛЬ", score: 1 },
        { name: "СВІТЛАGFНЕНКО СВІТЛАНА", score: 1 },
        { name: "ПЕТРЕНКDFGО ПЕТРО", score: 1 },
        { name: "ІВАН ІВАGDFНОВИЧ ІВАНОВ", score: 1 },
        { name: "ВАСИЛЕНFDКО ВАСИЛЬ", score: 1 },
        { name: "СВІТЛАНGFDЕНКО СВІТЛАНА", score: 1 },
        { name: "ПЕТРЕНКОDFG ПЕТРО", score: 1 },
        { name: "ІВАН ІВАНFDОВИЧ ІВАНОВ", score: 1 },
        { name: "ВАСИЛЕНКО ВDFАСИЛЬ", score: 1 },
        { name: "СВІТЛАНЕНКО СDFGВІТЛАНА", score: 1 },
        { name: "ПЕТРЕНКО ПGЕТРО", score: 1 },
        { name: "ІВАН ІВАНОFDВИЧ ІВАНОВ", score: 1 },
      ]);
    }, 500); // 500ms delay
  });
}
