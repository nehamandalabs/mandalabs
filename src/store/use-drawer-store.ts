'use client'
import { create } from 'zustand'

export type UseDrawer = {
    navState: boolean,
    isPageDrawerOpen: boolean;
    setIsPageDrawerOpen: (value: boolean) => void;
    steNavState: (value: boolean) => void;

}

export const useDrawerStore = create<UseDrawer>((set) => ({
    isPageDrawerOpen: false,
    navState: false,
    setIsPageDrawerOpen: (value) => set(() => ({ isPageDrawerOpen: value })),
    steNavState :(value) => set(() => ({ navState: value })),
}))