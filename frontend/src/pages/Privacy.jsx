import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Privacy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.2)] backdrop-blur">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">개인정보처리방침</h1>
          <p className="text-sm text-slate-500 mb-8">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>

          <section className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">1. 개요</h2>
              <p>
                HealthWeb(이하 &quot;사이트&quot;)는 이용자의 개인정보를 소중히 하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
                본 방침은 사이트에서 수집하는 정보, 이용 목적, 보관 기간 및 이용자 권리에 대해 안내합니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">2. 수집하는 정보</h2>
              <p>사이트는 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                <li>회원가입·로그인 시: 이메일, 비밀번호(암호화 저장), 사용자명, 표시명, 역할(일반/트레이너 등)</li>
                <li>서비스 이용 과정: 매칭 정보, 주간 플랜(운동·식단), 커뮤니티 게시글·댓글, 리뷰, 채팅 내용</li>
                <li>접속 로그: IP 주소, 접속 시각, 브라우저 정보 등</li>
                <li>Google AdSense를 통한 광고 서비스 이용 시 관련 데이터(쿠키 등)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">3. 이용 목적</h2>
              <p>
                수집된 정보는 회원 관리, 맞춤 플랜·매칭·커뮤니티 서비스 제공, 서비스 개선, 통계 분석, 광고 게재 및 법령에 따른 요청 대응에 사용됩니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">4. 제3자 제공 및 광고</h2>
              <p>
                사이트에는 Google AdSense 등 제3자 광고가 포함될 수 있습니다. 이러한 서비스는 자체적인 개인정보처리방침과 쿠키 정책을 적용하며,
                Google의 정책은{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Google 개인정보처리방침
                </a>
                에서 확인할 수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">5. 보관 기간</h2>
              <p>
                법령에서 정한 경우를 제외하고, 수집 목적 달성 후 지체 없이 파기하거나 익명화 처리합니다. 회원 탈퇴 시 관련 개인정보는 정책에 따라 삭제됩니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">6. 이용자 권리</h2>
              <p>
                이용자는 개인정보 열람·정정·삭제·처리정지 요청 권리가 있으며, 문의는 아래 연락처 또는 사이트 소개 페이지를 통해 할 수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">7. 변경 사항</h2>
              <p>
                개인정보처리방침은 법령·서비스 변경에 따라 수정될 수 있으며, 변경 시 사이트 내에 공지합니다.
              </p>
            </div>
          </section>

          <div className="mt-10 pt-6 border-t border-slate-200">
            <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
