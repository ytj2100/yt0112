/*
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
      {/* 1. 좌측 메뉴 /}
      <Sidebar />

      {/* 2. 우측 메인 영역 (헤더 + 탭 콘텐츠) /}
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col">
          <TabContent />
        </main>
      </div>
    </div>
  );
}
*/

// app/page.tsx
import Sidebar from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { TabContent } from "@/components/layout/TabContent";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LoginView from "@/components/views/LoginView";
// import DashboardView from "@/components/views/DashboardView";

export default async function HomePage() {
  // 1. 서버에서 세션(로그인 정보) 확인
  const session = await getServerSession(authOptions);

  // 2. 로그인이 안 되어 있다면 -> 로그인 화면 표시
  if (!session) {
    return <LoginView />;
  }

  // 3. 로그인이 되어 있다면 -> 대시보드 화면 표시
  // return <DashboardView />;
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