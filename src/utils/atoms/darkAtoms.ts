import { atomWithStorage } from "jotai/utils";

export const darkAtom = atomWithStorage<boolean>("darkmode", false);

export const likeatom = atomWithStorage<boolean>("visible", false);
