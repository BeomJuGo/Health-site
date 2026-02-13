# Health-site 배포 실행 가이드 (한 번에 따라하기)

이 문서는 **Render(백엔드)** 와 **Vercel(프론트엔드)** 에 Health-site를 배포할 때 필요한 단계를 순서대로 정리한 것입니다.

---

## 사전 준비

- [ ] GitHub 저장소: `BeomJuGo/Health-site` (main 브랜치)
- [ ] Render 계정: https://dashboard.render.com
- [ ] Vercel 계정 (GitHub 연동): https://vercel.com
- [ ] Cloudinary 계정 (이미지 업로드용): https://cloudinary.com
- [ ] JWT 시크릿 2개 (각 32자 이상 랜덤 문자열) 준비

---

## 1단계: Render 백엔드 배포

### 1-1. PostgreSQL 생성

1. [Render Dashboard](https://dashboard.render.com) → **New +** → **PostgreSQL**
2. 설정:
   - **Name**: `healthcare-db`
   - **Region**: Singapore 또는 가까운 지역
   - **Plan**: Free (또는 유료)
3. **Create Database** 클릭
4. 생성 후 **Info** 탭에서 다음 값 확인/복사:
   - **Internal Database URL** (웹 서비스와 같은 Render 네트워크에서 사용 권장)
   - 또는 **External Database URL** (형식: `postgresql://user:password@host:port/database`)

### 1-2. Web Service(백엔드) 생성

1. **New +** → **Web Service**
2. **Connect a repository** → GitHub에서 `BeomJuGo/Health-site` 선택 후 연결
3. 설정:
   - **Name**: `healthcare-backend`
   - **Region**: DB와 동일 권장
   - **Branch**: `main`
   - **Root Directory**: 비움 (저장소 루트)
   - **Runtime**: **Java**
   - **Build Command**: `./gradlew build -x test`
   - **Start Command**: `java -jar build/libs/*.jar`
   - **Plan**: Free 또는 유료
4. **Advanced** → **Health Check Path**: `/api/health`
5. **Create Web Service** 클릭

### 1-3. 환경 변수 설정 (Render)

웹 서비스 **Environment** 탭에서 다음 변수 추가:

| Key | Value | 비고 |
|-----|--------|------|
| `SPRING_PROFILES_ACTIVE` | `production` | 필수 |
| `PORT` | `8080` | (기본값) |
| `DATABASE_URL` | *(1-1에서 복사한 Internal Database URL)* | PostgreSQL 연결 |
| `JWT_SECRET` | *(32자 이상 랜덤 문자열)* | 필수 |
| `APP_JWT_SECRET` | *(32자 이상 랜덤 문자열)* | 필수 |
| `CLOUDINARY_CLOUD_NAME` | *(Cloudinary 대시보드)* | 필수 |
| `CLOUDINARY_API_KEY` | *(Cloudinary 대시보드)* | 필수 |
| `CLOUDINARY_API_SECRET` | *(Cloudinary 대시보드)* | 필수 |
| `OPENAI_API_KEY` | *(선택) OpenAI 키* | AI 기능용 |
| `CORS_ALLOWED_ORIGINS` | `https://health-site.vercel.app` | 2단계 배포 후 실제 Vercel URL로 수정 |

**참고**: `DATABASE_URL`을 쓰면 앱이 자동으로 `jdbc:postgresql://...` 형태로 변환합니다. (코드: `DataSourceConfig`)

### 1-4. 배포 확인

- 배포 로그에서 빌드·시작 성공 확인
- 브라우저에서 **Health Check** 호출:
  - `https://healthcare-backend.onrender.com/api/health`  
  - (실제 서비스 URL은 Render 대시보드에서 확인)
- **백엔드 URL** 기록 (예: `https://healthcare-backend.onrender.com`) → 2단계에서 사용

---

## 2단계: Vercel 프론트엔드 배포

### 2-1. 프로젝트 Import

1. [Vercel Dashboard](https://vercel.com/dashboard) → **Add New...** → **Project**
2. **Import Git Repository** → `BeomJuGo/Health-site` 선택
3. **Configure Project** 화면에서:
   - **Framework Preset**: Vite (자동 감지될 수 있음)
   - **Root Directory**: **`frontend`** 로 변경 (반드시 설정)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2-2. 환경 변수 (Vercel)

**Environment Variables**에 추가:

| Name | Value |
|------|--------|
| `VITE_API_BASE_URL` | `https://healthcare-backend.onrender.com/api` |

*(1-4에서 기록한 백엔드 URL + `/api`)*

Production / Preview / Development 모두에 적용 권장.

### 2-3. Deploy

- **Deploy** 클릭 후 빌드 완료 대기
- 배포 후 **프론트엔드 URL** 확인 (예: `https://health-site-xxx.vercel.app`)

### 2-4. CORS 업데이트 (Render)

1. Render → `healthcare-backend` → **Environment**
2. `CORS_ALLOWED_ORIGINS` 값을 **실제 Vercel URL**로 수정:
   - 예: `https://health-site-xxx.vercel.app`
   - 여러 개면 쉼표로 구분
3. 저장 후 서비스가 자동 재배포됨

---

## 3단계: 최종 확인

- [ ] 백엔드 Health: `https://[backend-url]/api/health`
- [ ] Swagger UI: `https://[backend-url]/swagger-ui.html`
- [ ] 프론트엔드: Vercel URL에서 메인 페이지 로드
- [ ] 로그인/회원가입 등 API 연동 동작 확인 (브라우저 개발자 도구 Network 탭)

---

## 문제 해결

| 현상 | 확인 사항 |
|------|-----------|
| 백엔드 빌드 실패 | Java 21, Gradle 명령·환경 변수 확인 |
| DB 연결 실패 | `DATABASE_URL` 형식, Render Internal URL 사용 여부 |
| 프론트에서 API 호출 실패 | `VITE_API_BASE_URL` 값, CORS에 Vercel URL 포함 여부 |
| 401/403 | JWT_SECRET, APP_JWT_SECRET 동일한 값으로 설정했는지 |

---

*기존 상세 설명은 `DEPLOYMENT.md`를 참고하세요.*
