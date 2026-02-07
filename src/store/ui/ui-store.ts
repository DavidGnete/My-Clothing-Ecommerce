import { create } from 'zustand'


interface State {
    isSideMenuOpen: boolean;
    isMobileMenuOpen: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;

    openMobileMenu: () => void;
    closeMobileMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    isMobileMenuOpen: false,

    openSideMenu: () => set({isSideMenuOpen: true}),
    closeSideMenu: () => set({isSideMenuOpen: false }),

    openMobileMenu: () => set({ isMobileMenuOpen: true }),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
