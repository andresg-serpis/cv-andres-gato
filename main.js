// Toggle menú móvil
const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');

if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
}

// Simulación Ping a Servicios DNS / Incus
function pingService(serviceName, elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    const ms = Math.floor(Math.random() * 8) + 1;
    el.innerText = `Pinging ${serviceName}...`;
    el.className = "text-amberGold animate-pulse";
    
    setTimeout(() => {
        el.innerText = `Ping OK: ${ms}ms latency`;
        el.className = "text-emeraldNeon font-bold";
        addDiagLog(`[PING SUCCESS] Respuesta de ${serviceName} recibida en ${ms}ms (RTT).`, 'emeraldNeon');
    }, 700);
}

// Test de ejecución Script PowerShell
function runScriptTest() {
    const el = document.getElementById('script-status');
    if (!el) return;
    
    el.innerText = "Ejecutando ./net-config.ps1...";
    el.className = "text-amberGold animate-pulse";

    setTimeout(() => {
        el.innerText = "Execution Success: 0 errors";
        el.className = "text-emeraldNeon font-bold";
        addDiagLog(`[POWERSHELL] Script de automatización ejecutado correctamente en host AGATO-PC.`, 'cyberCyan');
    }, 1000);
}

// Escaneo completo de diagnóstico de red
function runNetworkDiagnostics() {
    const spinner = document.getElementById('diag-spinner');
    if (spinner) spinner.classList.add('animate-spin');

    addDiagLog(`[DIAGNOSTIC START] Iniciando escaneo completo de red y topología Packet Tracer...`, 'amberGold');
    
    setTimeout(() => {
        addDiagLog(`[BIND9 DNS] Resolución de nombres correcta (serpis.local -> 192.168.1.10).`, 'emeraldNeon');
    }, 600);

    setTimeout(() => {
        addDiagLog(`[DHCP SERVICE] Pool de direcciones asignadas activas sin conflictos de IP.`, 'emeraldNeon');
    }, 1200);

    setTimeout(() => {
        addDiagLog(`[HARDWARE DIAGNOSTIC] Test de alimentadores de portátiles comprobado (CEIP Eliseo Vidal standard).`, 'emeraldNeon');
        if (spinner) spinner.classList.remove('animate-spin');
    }, 1800);
}

// Registro de Logs en pantalla
function addDiagLog(msg, colorClass) {
    const container = document.getElementById('diag-log-container');
    if (!container) return;
    
    const newLog = document.createElement('div');
    newLog.className = `text-${colorClass || 'slate-300'}`;
    newLog.innerText = msg;
    container.prepend(newLog);
    
    const now = new Date();
    const timestampEl = document.getElementById('log-timestamp');
    if (timestampEl) {
        timestampEl.innerText = now.toISOString().replace('T', ' ').substring(0, 19);
    }
}

// Copiar correo al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('Dirección de correo copiada al portapapeles');
}
