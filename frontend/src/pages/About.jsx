import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import '../index.css'

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">HealthWeb 소개</h1>
          <p className="text-lg text-slate-600">
            맞춤형 운동·식단 플랜과 트레이너 매칭으로 건강한 라이프스타일을 함께합니다.
          </p>
        </div>

        <Card className="border-slate-200/80 bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle className="text-slate-800">사이트 목적</CardTitle>
            <CardDescription className="text-slate-600">
              HealthWeb은 사용자와 트레이너를 연결하고, 주간 운동·식단 플랜을 관리할 수 있는 플랫폼입니다.
              AI 추천, 커뮤니티, 인증 기능을 통해 목표 달성을 한곳에서 이어갈 수 있도록 합니다.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-slate-200/80 bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle className="text-slate-800">제공 기능</CardTitle>
            <CardContent className="pt-0">
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>주간 운동·식단 플랜 작성 및 조회</li>
                <li>트레이너 매칭 및 채팅</li>
                <li>커뮤니티 게시글·댓글</li>
                <li>트레이너 리뷰</li>
                <li>일별 인증(목표 달성 체크)</li>
                <li>AI 기반 플랜 추천</li>
              </ul>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className="border-slate-200/80 bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle className="text-slate-800">문의</CardTitle>
            <CardDescription className="text-slate-600">
              서비스 관련 문의나 제안 사항이 있으시면 아래 연락처 또는 GitHub 저장소를 통해 연락해 주시면 감사하겠습니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 space-y-2">
            <p className="text-slate-700 font-medium">
              이메일:{' '}
              <a href="mailto:lom0097@naver.com" className="text-indigo-600 hover:underline">
                lom0097@naver.com
              </a>
            </p>
            <a
              href="https://github.com/BeomJuGo/Health-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              GitHub: BeomJuGo/Health-site
            </a>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            ← 홈으로
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            개인정보처리방침
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            이용약관
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
