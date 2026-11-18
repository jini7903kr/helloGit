# 클래식 2.0 한눈에 보기

룰·심판 + 선수 전략 쉬운 말 합본. 공개 링크로 열리지만 **비밀번호**가 있어야 본문이 보입니다.

## 필수 환경 변수

앱은 아래 값이 없으면 잠긴 채로 열리지 않습니다(파일에 기본 비밀번호 없음).

- `GUIDE_PASSWORD` — 안내문 잠금 해제 비밀번호
- `GUIDE_SESSION_SECRET` — 세션 쿠키 서명용 비밀값

로컬에서는 셸에서만 설정하세요. 배포 시에는 Cursor Secrets에 같은 이름을 넣습니다.

```bash
export GUIDE_PASSWORD='…'
export GUIDE_SESSION_SECRET='…'
npm install
npm run dev
```

http://127.0.0.1:4320
