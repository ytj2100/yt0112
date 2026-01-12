// src/components/views/UserListView.tsx
"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/app/actions/userActions"; // Server Action 임포트
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";

// 타입 정의 (Prisma 모델에 맞게 조정 필요)
interface User {
  id: string;
  name: string | null;
  email: string;
  createdAt: Date;
}

export default function UserListView() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // 데이터 불러오기 함수
  const fetchData = async () => {
    setLoading(true);
    const result = await getUsers();
    if (result.success && result.data) {
      setUsers(result.data);
    } else {
      alert(result.error);
    }
    setLoading(false);
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">사용자 관리</h2>
        <div className="flex items-center gap-2">
           <Input placeholder="이름 검색..." className="max-w-sm" />
           <Button variant="outline" size="icon" onClick={fetchData} disabled={loading}>
             <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
           </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>가입일</TableHead>
              <TableHead className="text-right">관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading && users.length === 0 ? (
               <TableRow><TableCell colSpan={5} className="text-center h-24">로딩 중...</TableCell></TableRow>
            ) : users.length === 0 ? (
               <TableRow><TableCell colSpan={5} className="text-center h-24">데이터가 없습니다.</TableCell></TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium truncate max-w-[100px]">{user.id}</TableCell>
                  <TableCell>{user.name || "미지정"}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">수정</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}