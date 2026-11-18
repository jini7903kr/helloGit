"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!configured) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(data?.error || "비밀번호가 맞지 않습니다.");
        setBusy(false);
        return;
      }
      router.refresh();
    } catch {
      setError("잠시 후 다시 시도해 주세요.");
      setBusy(false);
    }
  }

  return (
    <div className="gate">
      <form className="gate-card" onSubmit={onSubmit}>
        <p className="eyebrow">Classic 2.0</p>
        <h1>비밀번호로 열기</h1>
        <p className="lead">
          공개 링크이지만, 안내문은 비밀번호를 입력한 뒤에만 볼 수 있습니다.
        </p>
        {!configured ? (
          <p className="error">
            잠금이 아직 설정되지 않았습니다. 배포 Secrets를 설정한 뒤 다시
            열어 주세요.
          </p>
        ) : null}
        {error ? <p className="error">{error}</p> : null}
        <label className="muted" htmlFor="password">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={!configured}
        />
        <button
          type="submit"
          disabled={busy || !configured}
          style={{ width: "100%" }}
        >
          {busy ? "확인 중…" : "열기"}
        </button>
      </form>
    </div>
  );
}
