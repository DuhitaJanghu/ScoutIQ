import AsyncStorage from "@react-native-async-storage/async-storage";
import { Athlete } from "../types";

const KEY = "SHORTLIST";

export const saveShortlist = async (data: Athlete[]) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
};

export const getShortlist = async (): Promise<Athlete[]> => {
  const data = await AsyncStorage.getItem(KEY);

  return data ? JSON.parse(data) : [];
};
