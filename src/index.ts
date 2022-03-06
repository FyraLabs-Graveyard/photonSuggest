import axios from "axios";
import { load } from "cheerio";

enum Engine {
  GOOGLE = "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=",
  DDG = "https://duckduckgo.com/ac/?kl=wt-wt&q=",
  BING = "https://www.bingapis.com/api/v7/suggestions?appid=6D0A9B8C5100E9ECC7E11A104ADD76C10219804B&q=",
  YAHOO = "https://api.search.yahoo.com/sugg/gossip/gossip-in-ura?output=sd1&command=",
  BRAVE = "https://search.brave.com/api/suggest?q=",
}

export type Result = string[]

export const google = async (query: string): Promise<Result> => {
  const { data } = await axios.get<string>(Engine.GOOGLE + query);
  const $ = load(data);
  return $("suggestion").toArray().map(x => x.attribs.data);
}

export const ddg = async (query: string): Promise<Result> => {
  const { data } = await axios.get<{ phrase: string }[]>(Engine.DDG + query);
  return data.map(x => x.phrase);
}

export const yahoo = async (query: string): Promise<Result> => {
  const { data } = await axios.get<{
    r: {
      k: string;
    }[]
  }>(Engine.YAHOO + query);
  return data.r.map(x => x.k);
}

export const brave = async (query: string): Promise<Result> => {
  const op = await axios.get<[string, string[]]>(Engine.BRAVE + query);
  return op.data[1];
}

export const all = async (query: string): Promise<Result> => {
  const all = [
    ...await google(query),
    ...await ddg(query),
    ...await yahoo(query),
    ...await brave(query),
  ];
  return [...new Set(all)];
}