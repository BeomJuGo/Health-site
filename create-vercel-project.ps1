# Vercel API로 Health-site 프론트엔드 프로젝트 생성
# 사용 전: https://vercel.com/account/tokens 에서 토큰 발급 후
#   $env:VERCEL_TOKEN = "your_token_here"
# 실행: .\create-vercel-project.ps1

$token = $env:VERCEL_TOKEN
if (-not $token) {
    Write-Host "ERROR: VERCEL_TOKEN 환경 변수를 설정해 주세요." -ForegroundColor Red
    Write-Host "  https://vercel.com/account/tokens 에서 토큰 발급 후:" -ForegroundColor Yellow
    Write-Host '  $env:VERCEL_TOKEN = "your_token_here"' -ForegroundColor Cyan
    exit 1
}

$teamId = "team_3J6tTR8mdjrqKFx0EuNNgunE"
$apiUrl = "https://api.vercel.com/v11/projects?teamId=$teamId"
$backendUrl = "https://healthcare-backend-dotj.onrender.com/api"

$body = @{
    name = "health-site"
    framework = "vite"
    gitRepository = @{
        type = "github"
        repo = "BeomJuGo/Health-site"
    }
    rootDirectory = "frontend"
    buildCommand = "npm run build"
    installCommand = "npm install"
    outputDirectory = "dist"
    environmentVariables = @(
        @{
            key = "VITE_API_BASE_URL"
            value = $backendUrl
            target = "production"
            type = "plain"
        }
    )
} | ConvertTo-Json -Depth 10

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type"  = "application/json"
}

try {
    $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Headers $headers -Body $body
    Write-Host "SUCCESS: Vercel 프로젝트가 생성되었습니다." -ForegroundColor Green
    Write-Host "  프로젝트 이름: $($response.name)"
    Write-Host "  대시보드: https://vercel.com/beomjugos-projects/health-site"
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails.Message) { Write-Host $_.ErrorDetails.Message }
    exit 1
}
