type RateLimitResult = { allowed: true } | { allowed: false; retryAfterSeconds: number };

export interface RateLimiter {
  check(key: string): Promise<RateLimitResult>;
}

export type RateLimitRule = { limit: number; windowMs: number };

const SWEEP_THRESHOLD = 5000;

export function createSlidingWindowLimiter(rules: readonly RateLimitRule[]): RateLimiter {
  const longest = Math.max(...rules.map((r) => r.windowMs));
  const hits = new Map<string, number[]>();

  function sweep(now: number) {
    for (const [key, times] of hits) {
      if (now - times[times.length - 1] >= longest) hits.delete(key);
    }
  }

  return {
    async check(key) {
      const now = Date.now();
      if (hits.size > SWEEP_THRESHOLD) sweep(now);

      const times = (hits.get(key) ?? []).filter((t) => now - t < longest);
      let retryAfterMs = 0;
      for (const { limit, windowMs } of rules) {
        const inWindow = times.filter((t) => now - t < windowMs);
        if (inWindow.length >= limit) retryAfterMs = Math.max(retryAfterMs, inWindow[0] + windowMs - now);
      }
      if (retryAfterMs > 0) {
        hits.set(key, times);
        return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)) };
      }

      times.push(now);
      hits.set(key, times);
      return { allowed: true };
    },
  };
}
