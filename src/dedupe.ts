/**
 * In-memory dedupe for /hooks/app deliveries.
 *
 * The same event can arrive twice: Stripe retries until it gets a 2xx, and a second
 * enabled destination pointing at the same URL delivers a duplicate. Either way the
 * merchant gets a second invoice for one payment — there is no downstream idempotency
 * to catch it.
 *
 * Ids are remembered for the retry window (Stripe retries span minutes; 24h is generous)
 * with a hard cap, so a delivery burst cannot grow the map without bound.
 */
export function createEventDeduplicator(ttlMs = 24 * 60 * 60 * 1000, maxEntries = 5000) {
  const seen = new Map<string, number>();

  function prune(now: number): void {
    for (const [id, at] of seen) {
      if (now - at > ttlMs) seen.delete(id);
    }
  }

  return {
    /** True when this event id was already handled — the caller should ack and skip. */
    isDuplicate(id: string, now: number = Date.now()): boolean {
      prune(now);
      if (seen.has(id)) return true;
      if (seen.size >= maxEntries) {
        const oldest = seen.keys().next().value;
        if (oldest !== undefined) seen.delete(oldest);
      }
      seen.set(id, now);
      return false;
    },
    size(): number {
      return seen.size;
    },
  };
}
