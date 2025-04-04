
import { create } from "zustand";
import {saveAppModeState} from "../utils/stateIO.js";

const useAppModeStore = create((set) => ({
    mode: "edit",
    scaleFactor: 0.5,

    setMode: (mode) => {
        const newState = { mode, scaleFactor: mode === "edit" ? 0.5 : 1 };
        saveAppModeState(newState);
        set(newState);
    },
}));

export {useAppModeStore};
