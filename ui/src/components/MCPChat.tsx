import { useState, useEffect, useRef } from 'react';
import { DeepChat } from 'deep-chat-react';
import { api } from '../utils/api';

/* --- minimal Deep‑Chat message type --- */
type MessageContent = { role: 'user' | 'ai'; text: string };

interface HistMsg extends MessageContent {
  timestamp: string;
  metadata?: any;
}

const LS_KEY = 'katalon-chat-history';

export default function MCPChat() {
  const [hist, setHist] = useState<HistMsg[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<any>(null);

  /* ---------- load / save history ---------- */
  // useEffect(() => {
  //   const saved = localStorage.getItem(LS_KEY);
  //   if (saved) setHist(JSON.parse(saved));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(hist));
  // }, [hist]);

  const push = (m: HistMsg) => setHist((h) => [...h, m]);

  /* ---------- call back‑end ---------- */
  const ask = async (text: string): Promise<MessageContent> => {
    push({ role: 'user', text, timestamp: new Date().toISOString() });
    setLoading(true);
    try {
      const { data } = await api.post('/mcp-chat', { text });
      const aiMsg: HistMsg = {
        role: 'ai',
        text: data.text,
        timestamp: new Date().toISOString(),
        metadata: data.metadata,
      };
      push(aiMsg);
      return { role: 'ai', text: data.text };
    } catch (e: any) {
      const msg = e.response?.data?.text ?? e.message;
      setError(msg);
      const errMsg: HistMsg = {
        role: 'ai',
        text: `Error: ${msg}`,
        timestamp: new Date().toISOString(),
      };
      push(errMsg);
      return { role: 'ai', text: `Error: ${msg}` };
    } finally {
      setLoading(false);
    }
  };

  /* ---------- convert history ---------- */
  const dcHistory: MessageContent[] = hist.map(({ role, text }) => ({ role, text }));

  /* ---------- clear ---------- */
  const clear = () => {
    setHist([]);
    // localStorage.removeItem(LS_KEY);
    chatRef.current?.clearMessages?.();
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', height: '100%' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <button style={{display: "inline-block", width:"100px", height:"50px", borderRadius:"10px", backgroundColor:"green"}} onClick={clear}>Clear chat</button>
      </header>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Processing…</p>}

      <DeepChat
        ref={chatRef}
        style={{ height: 'calc(100vh - 350px)', borderRadius: 10 }}
        introMessage={{ text: 'Hello! Ask me anything about Katalon.' }}
        history={dcHistory}
        messageStyles={{
          default: { ai: { bubble: { backgroundColor: '#f0f7ff' } } },
        }}
        connect={{
          handler: async (
            { messages }: { messages: MessageContent[] },
            signals: { onResponse: (m: MessageContent) => Promise<void> }
          ) => {
            const last = messages.at(-1);
            if (!last?.text) return;
            const reply = await ask(last.text);
            await signals.onResponse(reply);
          },
        }}
      />
    </div>
  );
}
