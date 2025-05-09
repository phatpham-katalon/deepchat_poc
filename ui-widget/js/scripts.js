
function addCopyButtonsToBotMessages() {

  document.querySelectorAll("deep-chat").forEach((chat) => {
    const shadow = chat.shadowRoot;
    if (!shadow) return;
  
    shadow.querySelectorAll(".ai-message-text").forEach((bubble) => {
      
      if (bubble.querySelector(".copy-btn")) return;
      
      const btn = document.createElement("button");
      btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
  </svg>
`;
      btn.className = "copy-btn";
      btn.style.display = "none";
      btn.style.marginLeft = "8px";
      btn.style.fontSize = "12px";
      btn.style.padding = "2px 8px";
      btn.style.borderRadius = "6px";
      btn.style.border = "1px solid #ccc";
      btn.style.background = "#f4f4f4";
      btn.style.cursor = "pointer";
      btn.style.transition="ease-in-out 0.5s";
      btn.onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(bubble.textContent.trim());
        btn.innerHTML = "Copied!";
        setTimeout(
          () =>
            (btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
  </svg>
`),
          1000
        );
      };
      bubble.appendChild(btn);
      bubble.addEventListener("mouseenter", () => {
        btn.style.display = "inline-block";
      });
      bubble.addEventListener("mouseleave", () => {
        btn.style.display = "none";
      });
    });
  });
}

setInterval(addCopyButtonsToBotMessages, 1000);
