// components/view/RegisterView.tsx
"use client";

import { registerUser } from "@/actions/register"; // 어제 만든 액션 경로 확인 필요
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterView() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const result = await registerUser(formData);
    
    if (result.success) {
      alert("회원가입 완료! 로그인 페이지로 이동합니다.");
      router.push("/login");
    } else {
      setMessage(result.message || "오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-white p-8 shadow-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-gray-500">새로운 계정을 생성합니다.</p>
        </div>
        
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" name="name" type="text" placeholder="홍길동" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" name="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" name="password" type="password" required />
          </div>

          {message && <p className="text-sm text-red-500 font-medium">{message}</p>}

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            가입하기
          </Button>
        </form>

         <div className="text-center text-sm text-gray-600">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="font-semibold text-blue-600 hover:underline">
            로그인하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}