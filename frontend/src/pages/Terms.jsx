import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Terms() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.2)] backdrop-blur">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">이용약관</h1>
          <p className="text-sm text-slate-500 mb-8">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>

          <section className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제1조 (목적)</h2>
              <p>
                본 약관은 HealthWeb(이하 "사이트")이 제공하는 헬스케어 관련 서비스(운동·식단 플랜 관리, 트레이너 매칭,
                커뮤니티, 리뷰, AI 추천 등)의 이용 조건 및 절차, 이용자와 사이트 간의 권리·의무 관계를 규정함을 목적으로 합니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제2조 (서비스 내용)</h2>
              <p>
                사이트는 회원가입한 사용자에게 운동·식단 플랜 관리, 트레이너 매칭, 커뮤니티, 리뷰, AI 추천 등 기능을 제공합니다.
                제공되는 정보는 참고용으로, 실제 건강 상태나 의료 상담을 대체하지 않습니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제3조 (이용자의 의무)</h2>
              <p>
                이용자는 관련 법령과 본 약관을 준수해야 하며, 다음 각 호의 행위를 해서는 안 됩니다.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>허위 정보 등록 또는 타인의 계정 도용</li>
                <li>타인에 대한 비방, 욕설, 명예훼손, 혐오 표현 게시</li>
                <li>서비스 운영을 방해하거나 보안에 위협이 되는 행위</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제4조 (저작권 및 데이터)</h2>
              <p>
                사이트에 게시된 텍스트, 이미지, UI 등은 사이트 또는 정당한 권리자에게 저작권이 있습니다.
                이용자는 사이트의 사전 동의 없이 콘텐츠를 무단 복제·배포·수정할 수 없습니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제5조 (면책)</h2>
              <p>
                사이트는 제공되는 정보의 정확성·완전성·적시성을 보장하지 않습니다.
                이용자가 서비스 정보를 바탕으로 한 건강 관리, 운동·식단, 기타 의사결정에 대해 사이트는 법령이 허용하는 범위 내에서 책임을 지지 않습니다.
                건강 상태에 이상이 있거나 질환이 있는 경우 반드시 전문 의료진과 상의해야 합니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제6조 (약관 변경)</h2>
              <p>
                사이트는 필요한 경우 약관을 변경할 수 있으며, 변경 시 사이트 내 공지 또는 적절한 방법으로 안내합니다.
                변경된 약관은 공지 시점 이후 서비스 이용에 적용되며, 이용자가 계속 서비스를 이용하는 경우 변경된 약관에 동의한 것으로 봅니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">제7조 (문의)</h2>
              <p>
                이용약관 및 서비스 이용과 관련된 문의는 아래 이메일이나 사이트 소개 페이지를 통해 연락할 수 있습니다.
              </p>
              <p className="mt-1 text-slate-700 font-medium">
                이메일: <a href="mailto:lom0097@naver.com" className="text-indigo-600 hover:underline">lom0097@naver.com</a>
              </p>
            </div>
          </section>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
            <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">홈으로</Link>
            <Link to="/about" className="text-indigo-600 hover:text-indigo-700 font-medium">사이트 소개</Link>
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
