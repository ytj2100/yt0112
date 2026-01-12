// src/components/layout/Header.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Header() {
  // 실제 구현 시 SessionProvider 등에서 유저 정보를 가져옵니다.
  const user = { name: "관리자", email: "admin@example.com" };

  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-background">
      <h2 className="text-lg font-semibold">메인 화면</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {user.name}님 환영합니다
        </span>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <Button variant="outline" size="sm">로그아웃</Button>
      </div>
    </header>
  );
}