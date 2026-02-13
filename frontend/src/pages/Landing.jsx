import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './../index.css'

function Landing() {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-16 text-slate-800">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-12 h-80 w-80 rounded-full bg-blue-200/35 blur-[110px]" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-purple-100/60 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500 shadow">
          HealthWeb
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          건강한 라이프스타일과 함께
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-slate-500">
          맞춤형 플랜, 트레이너 매칭, 커뮤니티까지. 목표 달성을 한곳에서 관리하세요.
        </p>

        <ul className="flex flex-col gap-3 text-left text-sm text-slate-600">
          <li className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald-500" />
            개인 맞춤 주간 계획과 알림
          </li>
          <li className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-sky-500" />
            트레이너와의 채팅, 리뷰, 커뮤니티
          </li>
          <li className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-rose-500" />
            인증 시스템으로 목표 달성 현황 공유
          </li>
        </ul>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="bg-indigo-500 hover:bg-indigo-600">
            <Link to="/login">로그인</Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
            <Link to="/signup">회원가입</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Landing
