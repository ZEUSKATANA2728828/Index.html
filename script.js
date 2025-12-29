document.addEventListener('DOMContentLoaded', function() {
    const warningModal = document.getElementById('warning-modal');
    const acceptBtn = document.getElementById('accept-btn');
    const refuseBtn = document.getElementById('refuse-btn');
    const scriptContent = document.getElementById('script-content');
    const copyBtn = document.getElementById('copy-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const scriptCode = document.getElementById('script-code');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            warningModal.classList.add('hidden');
            scriptContent.classList.remove('hidden');
        });
    }

    if (refuseBtn) {
        refuseBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const textToCopy = scriptCode.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(function() {
                copyFeedback.classList.remove('hidden');
                copyBtn.textContent = '✓ COPIADO!';
                copyBtn.style.backgroundColor = '#52b788';
                
                setTimeout(function() {
                    copyFeedback.classList.add('hidden');
                    copyBtn.textContent = 'COPIAR SCRIPT';
                    copyBtn.style.backgroundColor = '#4a9eff';
                }, 2000);
            }).catch(function() {
                alert('Erro ao copiar. Tente selecionar o texto manualmente.');
            });
        });
    }
});
```

---

## Estrutura Final do Projeto
```
script-executores/
├── index.html
├── executores.html
├── scripts.html
├── bloxfruits.html
├── fps-boost.html
├── estica-tela.html
├── readme.html
├── css/
│   └── style.css
└── js/
    └── script.js
