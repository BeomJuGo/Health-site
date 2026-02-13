# Health-site Vercel 배포 (프론트엔드)

백엔드는 이미 Render에 배포되어 있습니다: `https://healthcare-backend-dotj.onrender.com`  
프론트엔드만 Vercel에 한 번 배포하면 됩니다.

---

## 방법 1: Vercel 대시보드에서 Import (권장)

1. **아래 링크로 이동** (저장소가 미리 선택됩니다):
   - [Vercel에 Health-site Import](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBeomJuGo%2FHealth-site&project-name=health-site)

2. **설정 확인**
   - **Project Name**: `health-site` (그대로 두거나 원하는 이름)
   - **Root Directory**: **`frontend`** 로 반드시 설정 (Edit → Root Directory에 `frontend` 입력)
   - **Framework Preset**: Vite

3. **Environment Variable 추가**
   - Key: `VITE_API_BASE_URL`
   - Value: `https://healthcare-backend-dotj.onrender.com/api`
   - Environment: Production (및 Preview 원하면 체크)

4. **Deploy** 클릭 후 배포 완료 대기.

5. **CORS (이미 적용됨)**  
   Render 백엔드에는 아래 Vercel URL이 이미 CORS에 포함되어 있습니다.  
   배포 후 실제 URL이 다르면 Render → healthcare-backend → Environment에서 `CORS_ALLOWED_ORIGINS`에 해당 URL을 추가하세요.

---

## 방법 2: Vercel API 스크립트 (토큰 필요)

1. [Vercel 계정 → Token](https://vercel.com/account/tokens) 에서 토큰 발급.
2. PowerShell에서:
   ```powershell
   $env:VERCEL_TOKEN = "발급한_토큰"
   .\create-vercel-project.ps1
   ```
3. 성공 시 Vercel 대시보드에서 `health-site` 프로젝트와 첫 배포를 확인.

---

## 배포 후 확인

- 프론트: `https://health-site-*.vercel.app` (실제 URL은 Vercel 대시보드에서 확인)
- 백엔드: https://healthcare-backend-dotj.onrender.com
- API 연동: 프론트에서 로그인/API 호출이 되면 정상.
