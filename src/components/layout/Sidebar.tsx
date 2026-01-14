"use client"; // 1. 훅(hook)을 사용하려면 필수입니다.

import Link from "next/link";
import { usePathname } from "next/navigation"; // 현재 경로 확인용
import { signOut } from "next-auth/react";     // 로그아웃 기능
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  User 
} from "lucide-react"; // 아이콘 (사용하시는 걸로 바꾸세요)

export default function Sidebar() {
  const pathname = usePathname(); // 현재 페이지 주소 가져오기 (예: "/")

  // 2. 메뉴 아이템 정의
  const menuItems = [
    { name: "대시보드", href: "/dashboard", icon: LayoutDashboard },
    { name: "사용자 관리", href: "/users", icon: User },
    { name: "설정", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full bg-white border-r w-64">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">My App</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          // 3. 현재 경로와 메뉴의 href가 일치하면 '활성화' 상태로 판단
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium" // 선택되었을 때 스타일
                  : "text-gray-600 hover:bg-gray-100"      // 선택 안 되었을 때 스타일
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* 4. 로그아웃 버튼 영역 */}
      <div className="p-4 border-t">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })} // 로그아웃 후 로그인 페이지로 이동
          className="flex w-full items-center gap-3 px-4 py-3 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          로그아웃
        </button>
      </div>
    </div>
  );
}