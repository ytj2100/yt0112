// src/app/actions/userActions.ts
"use server";

import { prisma } from "@/lib/prisma";

//export async function getUsers() {
export const getUsers = async () => {
  try {
    // 실제 DB에서 사용자 목록 조회
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 100, // 최대 100명까지만 (예시)
    });
    return { success: true, data: users };
  } catch (error) {
    console.error("DB Error:", error);
    return { success: false, error: "사용자 정보를 불러오는데 실패했습니다." };
  }
}