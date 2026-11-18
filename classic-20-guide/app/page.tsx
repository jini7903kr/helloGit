import { authConfigured, isUnlocked } from "@/lib/auth";
import { LoginForm } from "./login-form";
import { LogoutButton } from "./logout-button";

export const dynamic = "force-dynamic";

export default async function Page() {
  const unlocked = await isUnlocked();

  if (!unlocked) {
    return <LoginForm configured={authConfigured()} />;
  }

  return (
    <main>
      <div className="toolbar">
        <p className="eyebrow">쉬운 말 합본 · Classic 2.0</p>
        <LogoutButton />
      </div>

      <h1>클래식 2.0, 한눈에 보기</h1>
      <p className="lead">
        새로 바뀐 채점 룰·심판 역할과, 선수(A·B·C)가 점수를 올리는 방법을 한
        장으로 모았습니다. 어려운 말은 바로 옆에 쉬운 뜻을 붙였습니다.
      </p>

      <div className="callout warn">
        <strong>먼저 알아둘 것</strong>
        클래식 2.0은 PRO Skate 시험 규정입니다. 아직 World Skate 공식 룰북이
        아닙니다. 아래는 회의·훈련용 안내입니다.
      </div>

      <div className="stats">
        <div className="stat">
          <b>기술×연결</b>
          <span>점수 핵심</span>
        </div>
        <div className="stat">
          <b>×1.25</b>
          <span>연결 최고 배율</span>
        </div>
        <div className="stat">
          <b>2팀</b>
          <span>심판 편성</span>
        </div>
        <div className="stat">
          <b>A·B·C</b>
          <span>훈련 구분</span>
        </div>
      </div>

      <hr />

      <p className="part">PART 1 · 룰과 심판</p>
      <h2>무엇이 바뀌었나</h2>

      <h3>한 줄 공식</h3>
      <div className="card">
        <p>
          <strong>
            최종 점수 = (기술점수 × 연결 배율) + 예술점수 − 감점
          </strong>
        </p>
        <p className="muted">
          예전에는 기술 점수가 거의 60에 막히고, 연결(풋워크)이 기술 안에
          섞여 있었습니다. 지금은 연결이 기술 점수 전체에 곱해집니다.
        </p>
      </div>

      <h3>쉬운 용어</h3>
      <table>
        <thead>
          <tr>
            <th>말</th>
            <th>쉬운 뜻</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>기술점수 (TES)</td>
            <td>성공한 트릭을 하나씩 더해서 나온 점수</td>
          </tr>
          <tr>
            <td>연결 / 풋워크</td>
            <td>트릭과 트릭 사이 이어 타기. 전체에 곱함</td>
          </tr>
          <tr>
            <td>연결 배율</td>
            <td>0점 → ×0.95 … 5점 → ×1.25</td>
          </tr>
          <tr>
            <td>예술점수</td>
            <td>흐름 · 구성(음악 끔) · 표현(음악 켬)</td>
          </tr>
          <tr>
            <td>속성</td>
            <td>같은 트릭을 더 어렵게 타는 보너스 (예: 토)</td>
          </tr>
          <tr>
            <td>후반 보너스</td>
            <td>대략 90초 이후 성공 트릭 ×1.10</td>
          </tr>
          <tr>
            <td>QoE</td>
            <td>그 트릭을 ‘얼마나 깨끗하게’ 했는지 (−3~+3)</td>
          </tr>
          <tr>
            <td>스페셜리스트</td>
            <td>무엇이 나왔는지 이름을 부르는 사람</td>
          </tr>
          <tr>
            <td>품질 심판</td>
            <td>얼마나 잘했는지(품질·연결·예술)만 매기는 사람</td>
          </tr>
        </tbody>
      </table>

      <h3>예전 클래식 vs 클래식 2.0</h3>
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th>예전</th>
            <th>클래식 2.0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>기술 만점</td>
            <td>대략 60에서 막힘</td>
            <td>상한 없음. 성공·속성만큼 쌓임</td>
          </tr>
          <tr>
            <td>연결</td>
            <td>기술 점수 안에 섞임</td>
            <td>기술 전체에 곱함 (0.95~1.25)</td>
          </tr>
          <tr>
            <td>예술</td>
            <td>기술 ±10 가이드에 묶이기 쉬움</td>
            <td>기술과 분리. 3항목으로 채점</td>
          </tr>
          <tr>
            <td>순위</td>
            <td>심판별 순위 느낌</td>
            <td>최종 점수 숫자로 비교</td>
          </tr>
          <tr>
            <td>후반</td>
            <td>특별 보너스 거의 없음</td>
            <td>90초 이후 ×1.10</td>
          </tr>
          <tr>
            <td>심판</td>
            <td>한 패널이 식별+품질</td>
            <td>기술팀(식별) + 품질 심판(품질)</td>
          </tr>
        </tbody>
      </table>

      <h3>연결 점수 → 배율</h3>
      <table>
        <thead>
          <tr>
            <th>연결</th>
            <th>느낌</th>
            <th>배율</th>
            <th>기술 100일 때</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-bad">
            <td>0.0</td>
            <td>거의 없음</td>
            <td>×0.95</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1.0</td>
            <td>부족</td>
            <td>×1.00</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2.0</td>
            <td>보통</td>
            <td>×1.06</td>
            <td>106</td>
          </tr>
          <tr>
            <td>3.0</td>
            <td>좋음</td>
            <td>×1.10</td>
            <td>110</td>
          </tr>
          <tr>
            <td>4.0</td>
            <td>아주 좋음</td>
            <td>×1.18</td>
            <td>118</td>
          </tr>
          <tr className="row-ok">
            <td>5.0</td>
            <td>최고</td>
            <td>×1.25</td>
            <td>125</td>
          </tr>
        </tbody>
      </table>
      <p className="muted">
        기술이 클수록 연결 1점의 가치가 커집니다. 연결을 방치하면 손해입니다.
      </p>

      <h3>심판은 이렇게 나뉩니다</h3>
      <p className="muted">
        핵심: “무엇이 나왔는가”와 “얼마나 잘했는가”를 다른 사람이 봅니다.
      </p>
      <div className="grid2">
        <div className="card">
          <h3>기술팀 · 무엇이 나왔나</h3>
          <ul>
            <li>스페셜리스트: 기술 이름·속성·수준을 부름</li>
            <li>어시스턴트: 콜이 맞는지 확인, 감점 기록</li>
            <li>데이터 오퍼레이터: 태블릿에 실시간 입력</li>
            <li>컨트롤러(선택): 펜으로 교차 검증</li>
          </ul>
        </div>
        <div className="card">
          <h3>품질 심판 · 얼마나 잘했나</h3>
          <ul>
            <li>트릭마다 QoE (−3~+3)</li>
            <li>연결 0~5 → 배율</li>
            <li>예술 3요소 각 0~10</li>
            <li>치프는 품질 심판 중 1명이 겸임</li>
          </ul>
        </div>
      </div>

      <div className="grid2" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>최소 편성 · 4명</h3>
          <p className="muted">
            스페셜리스트 + 어시스턴트 + 데이터 오퍼레이터 + 품질 심판 1명.
            경기는 되지만 품질 평균은 약합니다.
          </p>
        </div>
        <div className="card">
          <h3>완전 편성 · 7명</h3>
          <p className="muted">
            기술팀 4 + 품질 심판 3. 품질은 세 명 평균. 기술팀과 심판은 떨어져
            앉습니다.
          </p>
        </div>
      </div>

      <div className="callout">
        <strong>기존 심판이 어디로 가면 좋은가</strong>
        기술 이름을 빨리 맞히면 → 스페셜리스트. 완성도·쇼를 잘 보면 → 품질
        심판. 계산·집계를 하던 분은 → 데이터 오퍼레이터(실시간 입력 연습
        필요).
      </div>

      <hr />

      <p className="part">PART 2 · 선수와 훈련</p>
      <h2>점수는 어떻게 올리나</h2>
      <p className="muted">
        A/B/C는 대회 공식 등급이 아니라 훈련용 구분입니다. 공통 1순위는
        연결(풋워크)입니다.
      </p>

      <div className="callout ok">
        <strong>전원 공통</strong>
        어려운 트릭을 더 넣는 것보다, 먼저 연결을 올려 기술점수에 곱해지는 값을
        키우세요.
      </div>

      <div className="grid3">
        <div className="card">
          <h3>A · 지키는 쪽</h3>
          <ul>
            <li>연결 2점대에 머물면 손해 큼</li>
            <li>같은 트릭 반복보다 속성으로 다른 카드</li>
            <li>큰 점수는 후반(90초 이후)에</li>
            <li>
              <strong>이번 달: 연결 4점 이상</strong>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>B · 따라잡는 쪽</h3>
          <ul>
            <li>A 기술의 70~85% + 연결 5 + 예술 우위</li>
            <li>깨끗한 B트릭 + 속성</li>
            <li>A도 연결 5면 추격 창이 닫힘</li>
            <li>
              <strong>이번 달: 연결 5점 도전</strong>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>C · 쌓아 올리는 쪽</h3>
          <ul>
            <li>화려한 실패보다 평범한 성공</li>
            <li>기술 종류 5가지 + 연결 4점 이상</li>
            <li>후반엔 제일 자신 있는 트릭</li>
            <li>
              <strong>이번 달: 낙상·콘 없애기</strong>
            </li>
          </ul>
        </div>
      </div>

      <h3>왜 B가 A를 따라갈 수 있나 (회의용 숫자)</h3>
      <p className="muted">
        아래 숫자는 환산값이 아니라 “이런 구도면” 하는 가정입니다.
      </p>
      <div className="grid2">
        <div className="card">
          <h3>예전 · A 120 : B 102</h3>
          <ul>
            <li>A 기술 58 + 예술 62</li>
            <li>B는 예술을 올려도 가이드에 막힘</li>
            <li>
              <strong>차이 18점 · 쇼만으로 메우기 어려움</strong>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>2.0 · A 131.4 : B 129.8</h3>
          <ul>
            <li>A: 기술 90 × 연결 2.0 + 예술 36</li>
            <li>B: 기술 63 × 연결 5.0 + 예술 51</li>
            <li>
              <strong>차이 1.65점 · B는 A 기술의 약 71%로 동점권</strong>
            </li>
          </ul>
        </div>
      </div>

      <h3>구성만으로도 점수 차이 (전부 성공 가정)</h3>
      <div className="callout">
        <strong>실패 때문이 아닙니다</strong>
        같은 기술군을 다 성공해도, 토·후반·콤보·거리를 붙였느냐에 따라 약 79 vs
        47처럼 갈라질 수 있습니다. 예술이 같아도 구성만으로 +30점대 차이.
      </div>
      <table>
        <thead>
          <tr>
            <th>구성</th>
            <th>최종(예)</th>
            <th>핵심</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-ok">
            <td>잘 짠 쪽</td>
            <td>약 79</td>
            <td>토 + 후반 + 콤보 + 거리</td>
          </tr>
          <tr className="row-warn">
            <td>기본 성공만</td>
            <td>약 47</td>
            <td>성공만, 속성·후반 거의 없음</td>
          </tr>
        </tbody>
      </table>

      <h3>이번 달 할 일</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1순위</td>
            <td>연결 4+</td>
            <td>연결 5</td>
            <td>감점 제거</td>
          </tr>
          <tr>
            <td>기술</td>
            <td>속성·후반</td>
            <td>깨끗한 B+속성</td>
            <td>5종류+자신 콤보</td>
          </tr>
          <tr>
            <td>예술</td>
            <td>분리 연습</td>
            <td>격차 벌리기</td>
            <td>버팀목</td>
          </tr>
          <tr>
            <td>피하기</td>
            <td>연결 방치</td>
            <td>미완성 A</td>
            <td>화려한 실패</td>
          </tr>
          <tr>
            <td>성공 신호</td>
            <td>동급과 점수 벌어짐</td>
            <td>A와 동점권</td>
            <td>감점≈0 + 연결 4</td>
          </tr>
        </tbody>
      </table>

      <h3>연습 체크리스트</h3>
      <table>
        <thead>
          <tr>
            <th>체크</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>□</td>
            <td>기술 종류 5가지 이상</td>
          </tr>
          <tr>
            <td>□</td>
            <td>낙상·콘 없이 한 바퀴</td>
          </tr>
          <tr>
            <td>□</td>
            <td>같은 트릭 반복 줄이기</td>
          </tr>
          <tr>
            <td>□</td>
            <td>90초 이후 ‘자신 트릭’ 배치</td>
          </tr>
          <tr>
            <td>□</td>
            <td>음악 105~120초(앱 기준 125까지 확인)</td>
          </tr>
          <tr>
            <td>□</td>
            <td>연결 구간을 따로 연습</td>
          </tr>
          <tr>
            <td>□</td>
            <td>흐름 / 구성 / 표현을 나눠 보기</td>
          </tr>
          <tr>
            <td>□</td>
            <td>감점 먼저 없애기</td>
          </tr>
          <tr>
            <td>□</td>
            <td>등급별 이번 달 1순위 지키기</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>한 줄로 기억하기</h2>
      <div className="grid2">
        <div className="card">
          <h3>룰 · 심판</h3>
          <p>식별과 품질을 나눈다. 연결은 기술 전체에 곱한다.</p>
        </div>
        <div className="card">
          <h3>선수</h3>
          <p>먼저 연결, 그다음 깨끗함·속성·후반. 화려한 실패보다 성공.</p>
        </div>
      </div>

      <p className="footer">
        근거: World Skate Inline Freestyle 규정(2027) · PRO Skate Classic 2.0
        시험 규정 · 공개 채점 프로그램 재현값. 기준일 2026-11-17 (Asia/Seoul).
        숫자 가정은 회의용이며 시즌 전 실제 프로그램으로 다시 합산하세요.
      </p>
    </main>
  );
}
