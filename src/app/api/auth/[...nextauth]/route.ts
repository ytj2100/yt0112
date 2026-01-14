import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // authOptions가 정의된 경로를 맞춰주세요

const handler = NextAuth(authOptions);

// 중요: App Router에서는 GET과 POST로 내보내야 합니다.
export { handler as GET, handler as POST };