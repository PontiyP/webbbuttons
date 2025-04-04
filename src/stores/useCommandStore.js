import { create } from "zustand";
import { saveCommandState } from "../utils/stateIO.js";

const useCommandStore = create((set) => ({
    commands: {},
    lastResponse: null, // новое поле
    setLastResponse: (response) => set({ lastResponse: response }),

    setCommandType: (buttonId, type) => set((state) => {
        const newState = {
            ...state.commands,
            [buttonId]: {
                ...state.commands[buttonId],
                type,
                settings: {},
            },
        };
        saveCommandState(newState);
        return { commands: newState };
    }),

    setCommandSettings: (buttonId, settings) => set((state) => {
        const newState = {
            ...state.commands,
            [buttonId]: {
                ...state.commands[buttonId],
                settings,
            },
        };
        saveCommandState(newState);
        return { commands: newState };
    }),

    removeCommand: (buttonId) => set((state) => {
        const newState = { ...state.commands };
        delete newState[buttonId];
        saveCommandState(newState);
        return { commands: newState };
    }),
}));

export { useCommandStore };
