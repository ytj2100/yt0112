// src/components/views/DashboardView.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export default function DashboardView() {
  // 실제 데이터는 props로 받거나 API로 호출해야 하지만, 여기서는 UI 구조 위주로 작성합니다.
  const stats = [
    { title: "총 수익", value: "₩45,231,890", icon: DollarSign, desc: "전월 대비 +20.1%" },
    { title: "구독자", value: "+2350", icon: Users, desc: "전월 대비 +180.1%" },
    { title: "판매량", value: "+12,234", icon: CreditCard, desc: "전월 대비 +19%" },
    { title: "활성 사용자", value: "+573", icon: Activity, desc: "지난 1시간 기준" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">대시보드</h2>
      
      {/* 상단 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 하단 영역 (예: 차트나 최근 내역) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>매출 현황</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center bg-slate-100 rounded">
              차트 영역 (Recharts 등을 연동하세요)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">신규 가입</p>
                  <p className="text-sm text-muted-foreground">user@example.com</p>
                </div>
                <div className="ml-auto font-medium">방금 전</div>
              </div>
              {/* 추가 목록... */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}