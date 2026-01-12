// src/components/views/SettingsView.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function SettingsView() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-medium">설정</h3>
        <p className="text-sm text-muted-foreground">
          시스템 환경설정 및 내 계정 정보를 관리합니다.
        </p>
      </div>
      <Separator />
      
      {/* 프로필 섹션 */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">프로필 정보</h4>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" placeholder="admin@example.com" disabled />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">표시 이름</Label>
          <Input type="text" id="name" placeholder="관리자" />
        </div>
      </div>
      
      <Separator />

      {/* 알림 설정 */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">알림 설정</h4>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label className="text-base">이메일 알림</Label>
            <p className="text-sm text-muted-foreground">
              중요한 시스템 변경사항을 이메일로 받습니다.
            </p>
          </div>
          <Switch />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => alert("저장되었습니다!")}>변경사항 저장</Button>
      </div>
    </div>
  );
}