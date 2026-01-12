// src/store/useTabStore.ts
import { create } from 'zustand';

export interface Tab {
  id: string;
  title: string;
  componentKey: string; // 어떤 컴포넌트를 렌더링할지 결정하는 키
}

interface TabState {
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [],
  activeTabId: null,
  addTab: (tab) =>
    set((state) => {
      // 이미 열려있으면 그 탭을 활성화
      if (state.tabs.find((t) => t.id === tab.id)) {
        return { activeTabId: tab.id };
      }
      return { tabs: [...state.tabs, tab], activeTabId: tab.id };
    }),
  removeTab: (id) =>
    set((state) => {
      const newTabs = state.tabs.filter((t) => t.id !== id);
      // 닫은 탭이 활성 탭이었다면, 마지막 탭을 활성화 (없으면 null)
      const nextActiveId =
        state.activeTabId === id
          ? newTabs.length > 0
            ? newTabs[newTabs.length - 1].id
            : null
          : state.activeTabId;
      return { tabs: newTabs, activeTabId: nextActiveId };
    }),
  setActiveTab: (id) => set({ activeTabId: id }),
}));