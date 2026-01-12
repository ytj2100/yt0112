// src/components/layout/Sidebar.tsx
"use client";

import { useTabStore } from "@/store/useTabStore";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// 실제로는 DB에서 fetching한 데이터를 props로 받을 수 있습니다.
const MENU_ITEMS = [
  { id: "dashboard", label: "대시보드", key: "DashboardView" },
  { id: "users", label: "사용자 관리", key: "UserListView" },
  { id: "settings", label: "시스템 설정", key: "SettingsView" },
];

export function Sidebar() {
  const { addTab } = useTabStore();

  return (
    <aside className="w-64 border-r bg-muted/40 h-full flex flex-col">
      <div className="p-6 font-bold text-xl border-b">My Admin</div>
      <ScrollArea className="flex-1 p-4">
        <nav className="flex flex-col gap-2">
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="justify-start"
              onClick={() =>
                addTab({
                  id: item.id,
                  title: item.label,
                  componentKey: item.key,
                })
              }
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}