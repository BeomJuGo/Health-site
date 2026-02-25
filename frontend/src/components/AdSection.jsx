import React from 'react'

/**
 * 애드센스 정책 준수: 광고는 메뉴·탐색과 구분된 본문 하단 전용 영역에만 표시합니다.
 * "사이트 행동: 탐색" 위반 방지를 위해 명시적 "광고" 라벨을 사용합니다.
 */
function AdSection() {
  return (
    <aside
      className="ad-section mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4"
      aria-label="광고 영역"
      role="complementary"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
        Advertisement · 광고
      </p>
      <div
        className="min-h-[90px] w-full rounded-lg border border-dashed border-slate-200 bg-white/60"
        style={{ minHeight: '90px' }}
      >
        {/* 승인 후 여기에 수동 광고 유닛을 배치할 수 있습니다. 헤더/메뉴/탑바에는 배치하지 마세요. */}
      </div>
    </aside>
  )
}

export default AdSection
