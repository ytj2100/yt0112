// src/components/layout/TabContent.tsx
"use client";

import { useTabStore } from "@/store/useTabStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";

// 탭 내부에 렌더링될 실제 컴포넌트 매핑
import DashboardView from "@/components/views/DashboardView"; // (직접 만드셔야 함)
import UserListView from "@/components/views/UserListView";   // (직접 만드셔야 함)
import SettingsView from "@/components/views/SettingsView";   // (직접 만드셔야 함)

const COMPONENT_MAP: Record<string, React.ReactNode> = {
  DashboardView: <DashboardView />,
  UserListView: <UserListView />,
  SettingsView: <SettingsView />,
};

export function TabContent() {
  const { tabs, activeTabId, setActiveTab, removeTab } = useTabStore();

  if (tabs.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        좌측 메뉴를 선택하여 탭을 열어주세요.
      </div>
    );
  }

  return (
    <Tabs
      value={activeTabId || undefined}
      onValueChange={setActiveTab}
      className="flex-1 flex flex-col h-full overflow-hidden"
    >
      <div className="border-b px-4 bg-background">
        <TabsList className="h-12 bg-transparent justify-start gap-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative h-9 border data-[state=active]:bg-muted data-[state=active]:border-b-primary"
            >
              {tab.title}
              <span
                className="ml-2 cursor-pointer hover:bg-slate-200 rounded-full p-0.5"
                onClick={(e) => {
                  e.stopPropagation(); // 탭 변경 이벤트 방지
                  removeTab(tab.id);
                }}
              >
                <X className="w-3 h-3" />
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {/* 탭 내용 영역 */}
      <div className="flex-1 bg-slate-50 p-6 overflow-auto">
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0 h-full">
            <div className="h-full bg-white rounded-lg shadow p-6 border">
              {COMPONENT_MAP[tab.componentKey] || <div>준비 중...</div>}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}