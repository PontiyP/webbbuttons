import {create} from "zustand";
import {saveButtonState} from "../utils/stateIO.js";
import {useCommandStore} from "./useCommandStore.js";

const useButtonStore = create((set) => ({
    buttons: {},
    selectedButton: null,
    isEditing: false,

    addButton: (id) => set((state) => {
        const newState = {
            ...state,
            buttons: {
                ...state.buttons,
                [id]: {
                    title: `Button ${id}`,
                    bgColor: "#3498db",
                    textColor: "#ffffff",
                    textSize: "clamp(10px, 3vw, 72px)",
                    brdrColor: "#2980b9",
                    hAlign: "justify-center",
                    vAlign: "items-center",
                    bgImg: null,
                    disable: false,
                    autoRepeat: false,
                    interval: 0,
                },
            },
            selectedButton: id,
        };
        saveButtonState(newState);
        return newState;
    }),

    setButton: (id, settings) => set((state) => {
        const newState = {
            ...state,
            buttons: {
                ...state.buttons,
                [id]: { ...state.buttons[id], ...settings },
            },
        };
        saveButtonState(newState);
        return newState;
    }),

    removeButton: (id) => set((state) => {
        const newButtons = { ...state.buttons };
        delete newButtons[id];

        const { removeCommand } = useCommandStore.getState();
        removeCommand(id);


        const newState = {
            buttons: newButtons,
            selectedButton: state.selectedButton === id ? null : state.selectedButton,
        };
        saveButtonState(newState);
        return newState;
    }),

    selectButton: (id) => set({ selectedButton: id }),
    clearSelection: () => set({ selectedButton: null }),
    setEditing: (editing) => set({ isEditing: editing }),

    uploadButtonImage: (id, file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            set((state) => {
                const newState = {
                    buttons: {
                        ...state.buttons,
                        [id]: { ...state.buttons[id], bgImg: event.target.result },
                    },
                };
                saveButtonState(newState);
                return newState;
            });
        };
        reader.readAsDataURL(file);
    },
}));

export {useButtonStore};
