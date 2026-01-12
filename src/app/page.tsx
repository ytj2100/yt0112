// src/app/page.tsx
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { TabContent } from "@/components/layout/TabContent";
import { prisma } from "@/lib/prisma"; // (Prisma client 인스턴스)

export default async function DashboardPage() {
  // 예시: 서버 컴포넌트에서 초기 데이터(예: 로그인 사용자) 확인
  // const user = await prisma.user.findFirst({ ... });

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* 1. 좌측 메뉴 */}
      <Sidebar />

      {/* 2. 우측 메인 영역 (헤더 + 탭 콘텐츠) */}
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col">
          <TabContent />
        </main>
      </div>
    </div>
  );
}