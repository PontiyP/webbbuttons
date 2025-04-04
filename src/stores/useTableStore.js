import {create} from "zustand";
import {saveTableState} from "../utils/stateIO.js";

const useTableStore = create((set) => ({
    rows: 1,
    columns: 5,
    bgColor: "#0C0C30",
    width: 99,

    setRows: (rows) => set((state) => {
        const newState = { ...state, rows };
        saveTableState(newState)
        return newState;
    }),

    setColumns: (columns) => set((state) => {
        const newState = { ...state, columns };
        saveTableState(newState);
        return newState;
    }),

    setBgColor: (bgColor) => set((state) => {
        const newState = { ...state, bgColor };
        saveTableState(newState);
        return newState;
    }),

    setWidth: (width) => set((state) => {
        const newState = { ...state, width };
        saveTableState(newState);
        return newState;
    }),
}));

export {useTableStore};
