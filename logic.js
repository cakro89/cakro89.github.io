// =========================================================================
// 1. CONFIG DATABASE (FORM & SCRIPT GENERATOR UNTUK MATING-MASING TOOL)
// =========================================================================
const TOOLS_CONFIG = {
  
  // -----------------------------------------------------------------------
  // TOOL 1: Add Admin User
  // ------------------------------------------------------------------------
  addAdminUser: {
    title: "Add Admin User",
    renderForm: () => `
      <div class="form-group"><label>USER</label><input type="text" id="v1" class="form-input" value="user"></div>
      <div class="form-group"><label>PASS</label><input type="text" id="v2" class="form-input" value="user123"></div>
      <div class="form-group"><label>GROUP</label>
        <select id="v3" class="form-select">
        <option value="full">Full</option>
          <option value="read">Read</option>
          <option value="write">Write</option>
        </select>
      </div>
      <div class="form-group"><label>COMMENT</label><input type="text" id="v4" class="form-input" value="user access"></div>
    `,
    generate: (getVal) => `/user add name="${getVal('v1')}" password="${getVal('v2')}" group=${getVal('v3')} comment="${getVal('v4')}"`
  },



   // -----------------------------------------------------------------------
  // TOOL 2: Add IP dhcp client
  // -----------------------------------------------------------------------
  dhcpclient: {
    title: "Add IP Dhcp-Client",
    renderForm: () => `
      <div class="form-group"><label>INTERFACE</label><input type="text" id="v2" class="form-input" value="ether2"></div>
    `,
    generate: (getVal) => `/ip dhcp-client add interface=${getVal('v2')} disabled=no`
  },
  // -----------------------------------------------------------------------
  // TOOL 2: Add IP Address
  // -----------------------------------------------------------------------
  addIpAddress: {
    title: "Add IP Address",
    renderForm: () => `
      <div class="form-group"><label>IP ADDRESS / SUBNET</label><input type="text" id="v1" class="form-input" value="192.168.1.1/24"></div>
      <div class="form-group"><label>INTERFACE</label><input type="text" id="v2" class="form-input" value="ether2"></div>
    `,
    generate: (getVal) => `/ip address add address=${getVal('v1')} interface=${getVal('v2')}`
  },

  // -----------------------------------------------------------------------
  // TOOL 3: Add IP Pool
  // -----------------------------------------------------------------------
  addIpPool: {
    title: "Add IP Pool",
    renderForm: () => `
      <div class="form-group"><label>POOL NAME</label><input type="text" id="v1" class="form-input" value="dhcp_pool1"></div>
      <div class="form-group"><label>ADDRESSES RANGE</label><input type="text" id="v2" class="form-input" value="192.168.1.10-192.168.1.100"></div>
    `,
    generate: (getVal) => `/ip pool add name="${getVal('v1')}" ranges=${getVal('v2')}`
  },

  // -----------------------------------------------------------------------
  // TOOL 4: Anti DDoS Attacks
  // -----------------------------------------------------------------------
  antiDdos: {
    title: "Anti DDoS Attacks",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Script ini akan menambahkan aturan Filter Firewall untuk memblokir SYN Flood & ICMP Flood DDoS.</p>`,
    generate: () => `/ip firewall filter add chain=forward protocol=tcp tcp-flags=syn connection-limit=30,32 action=drop comment="Anti DDoS SYN Flood"\n/ip firewall filter add chain=forward protocol=icmp icmp-options=8:0-255 limit=5,5:packet action=accept comment="Limit Ping DDoS"`
  },

  // -----------------------------------------------------------------------
  // TOOL 5: Block Website (Layer 7)
  // -----------------------------------------------------------------------
  blockWebsiteL7: {
    title: "Block Website (Layer 7)",
    renderForm: () => `
      <div class="form-group"><label>RULE NAME</label><input type="text" id="v1" class="form-input" value="block_judionline"></div>
      <div class="form-group"><label>REGEXP PATTERN</label><input type="text" id="v2" class="form-input" value=".*(slot|judionline).*"></div>
    `,
    generate: (getVal) => `/ip firewall layer7-protocol add name="${getVal('v1')}" regexp="${getVal('v2')}"\n/ip firewall filter add chain=forward layer7-protocol="${getVal('v1')}" action=drop comment="Block Website L7"`
  },

  // -----------------------------------------------------------------------
  // TOOL 6: Set Identity Router
  // -----------------------------------------------------------------------
  setIdentityRouter: {
    title: "Set Identity Router",
    renderForm: () => `
      <div class="form-group"><label>ROUTER NAME</label><input type="text" id="v1" class="form-input" value="MikroTik-Core"></div>
    `,
    generate: (getVal) => `/system identity set name="${getVal('v1')}"`
  },

  // -----------------------------------------------------------------------
  // TOOL 7: Setup NTP Client
  // -----------------------------------------------------------------------
  setupNtpClient: {
    title: "Setup NTP Client",
    renderForm: () => `
      <div class="form-group"><label>PRIMARY NTP SERVER</label><input type="text" id="v1" class="form-input" value="id.pool.ntp.org"></div>
      <div class="form-group"><label>TIME ZONE</label><input type="text" id="v2" class="form-input" value="Asia/Jakarta"></div>
    `,
    generate: (getVal) => `/system ntp client set enabled=yes servers=${getVal('v1')}\n/system clock set time-zone-name="${getVal('v2')}"`
  },

  // -----------------------------------------------------------------------
  // TOOL 8: Walled Garden Hotspot
  // -----------------------------------------------------------------------
  walledGarden: {
    title: "Walled Garden Hotspot",
    renderForm: () => `
      <div class="form-group"><label>DST HOST / DOMAIN</label><input type="text" id="v1" class="form-input" value="*.bca.co.id"></div>
    `,
    generate: (getVal) => `/ip hotspot walled-garden add dst-host="${getVal('v1')}" action=allow`
  },

  // -----------------------------------------------------------------------
  // TOOL 9: Clear DNS Flush
  // -----------------------------------------------------------------------
  clearDnsFlush: {
    title: "Clear DNS Flush",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `/ip dns cache flush`
  },

  // -----------------------------------------------------------------------
  // TOOL 9: Clear DNS Flush
  // -----------------------------------------------------------------------
  antiNetcut: {
    title: "Clear antiNetcut Flush",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `/ip dns cache flush`
  },

  // -----------------------------------------------------------------------
  // TOOL 9: Clear DNS Flush
  // -----------------------------------------------------------------------
  resetmik: {
    title: "Reset Mikrotik",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `/system reset-configuration no-defaults=yes skip-backup=yes`
  },

    // -----------------------------------------------------------------------
  // TOOL 9: Clear DNS Flush
  // -----------------------------------------------------------------------
  romon: {
    title: "Tool Romon Enable & print",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `# Enable RoMON Service
/romon set enabled=yes

# Tampilkan status RoMON
/romon print`
  },

   // -----------------------------------------------------------------------
  // TOOL 9: Clear DNS Flush
  // -----------------------------------------------------------------------
  cekmode: {
    title: "Cek Mode Mikrotik",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `/system/device-mode/print`
  },

 updatemode: {
    title: "Update Mode Mikrotik",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Proses pembersihan cache DNS MikroTik secara instan.</p>`,
    generate: () => `/system/device-mode/update mode=advanced`
  },




  
  // -----------------------------------------------------------------------
  // TOOL 10: Remove ARP Table
  // -----------------------------------------------------------------------
  removeArpTable: {
    title: "Remove ARP Table",
    renderForm: () => `<p style="font-size:13px; color:#aaa;">Menghapus seluruh daftar dynamic ARP table pada router.</p>`,
    generate: () => `/ip arp remove [find]`
  }
};

// =========================================================================
// 2. CORE LOGIC & MODAL CONTROLLER
// =========================================================================
let activeTool = '';

// Helper mengambil value input
const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : '';

function openModal(toolType) {
  activeTool = toolType;
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  // Ambil Konfigurasi dari Data Object
  const config = TOOLS_CONFIG[toolType] || {
    title: toolType.replace(/([A-Z])/g, ' $1').trim(),
    renderForm: () => `<div class="form-group"><label>INTERFACE</label><input type="text" id="v1" class="form-input" value="ether1"></div>`,
    generate: (getVal) => `# Script for ${toolType}`
  };

  title.textContent = config.title;

  // DAFTAR TOOL INSTAN (Langsung keluar area copas tanpa form)
  // Tinggal tambah nama key tool nya di dalam array ini:
  const instantTools = ['antiNetcut', 'clearDnsFlush', 'removeArpTable', 'romon', 'cekmode', 'updatemode', 'resetmik', 'antiDdos'];

  // Pengecekan apakah toolType yang diklik ada di daftar instantTools
  if (instantTools.includes(toolType)) {
    // Generasi script secara langsung
    const generatedScript = config.generate(getVal);
    
    // Tampilkan langsung area copas
    document.getElementById('scriptCode').textContent = generatedScript;
    document.getElementById('viewForm').style.display = 'none';
    document.getElementById('viewResult').style.display = 'block';
  } else {
    // UNTUK TOOL BIASA: Tampilkan form input terlebih dahulu
    body.innerHTML = config.renderForm();
    document.getElementById('viewForm').style.display = 'block';
    document.getElementById('viewResult').style.display = 'none';
  }

  // Tampilkan Modal
  document.getElementById('dynamicModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('dynamicModal').style.display = 'none';
}

function backToForm() {
  document.getElementById('viewForm').style.display = 'block';
  document.getElementById('viewResult').style.display = 'none';
}

function generateScript() {
  const config = TOOLS_CONFIG[activeTool];
  
  // Eksekusi generator berdasarkan tool terpilih
  const script = config 
    ? config.generate(getVal) 
    : `# Script for ${activeTool}\n/ip firewall filter add chain=input interface=${getVal('v1')} comment="${getVal('v2')}" action=accept`;

  document.getElementById('scriptCode').textContent = script;
  document.getElementById('viewForm').style.display = 'none';
  document.getElementById('viewResult').style.display = 'block';
}

function copyScript() {
  const code = document.getElementById('scriptCode').textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert('Script berhasil disalin! Tinggal paste ke Terminal MikroTik.');
  });
}

// =========================================================================
// 3. UI EVENT LISTENERS
// =========================================================================
document.getElementById('searchInput').addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  const tools = document.querySelectorAll('.tool-btn');
  
  tools.forEach(tool => {
    const text = tool.textContent.toLowerCase();
    tool.style.display = text.includes(filter) ? "flex" : "none";
  });
});

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.tool-btn').forEach(tool => tool.style.display = "flex");
}

window.onclick = function(e) {
  if (e.target === document.getElementById('dynamicModal')) closeModal();
};


function copyScript() {
  // Ambil elemen teks script
  const scriptElement = document.getElementById('scriptCode');
  const textToCopy = scriptElement.innerText || scriptElement.textContent;

  if (!textToCopy) return;

  // 1. Coba gunakan Clipboard API modern (Lancar di PC / HTTPS)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Script berhasil dicopy!');
      })
      .catch(() => {
        // Jika gagal di HP, lempar ke metode fallback
        fallbackCopyText(textToCopy);
      });
  } else {
    // 2. Gunakan Fallback untuk HP / HTTP Lokal
    fallbackCopyText(textToCopy);
  }
}

// Fungsi Cadangan Khusus HP / HTTP non-secure
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  
  // Sembunyikan elemen textarea agar tidak mengacak-acak layout
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      alert('Script berhasil dicopy!');
    } else {
      alert('Gagal menyalin script.');
    }
  } catch (err) {
    alert('Browser HP memblokir fitur copy.');
  }

  document.body.removeChild(textArea);
}


  // 1. Ambil IP Public via API
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('userPublicIp').innerText = data.ip;
    })
    .catch(() => {
      document.getElementById('userPublicIp').innerText = 'Tidak terdeteksi';
    });

  // 2. Ambil IP Local via WebRTC
  function getLocalIP() {
    return new Promise((resolve) => {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      pc.createOffer().then(pc.setLocalDescription.bind(pc));
      
      pc.onicecandidate = (ice) => {
        if (!ice || !ice.candidate || !ice.candidate.candidate) return;
        const ipMatch = ice.candidate.candidate.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/);
        if (ipMatch) {
          resolve(ipMatch[0]);
          pc.onicecandidate = () => {};
        }
      };

      setTimeout(() => resolve('Blocked'), 1500);
    });
  }

  getLocalIP().then(ip => {
    const localIpElement = document.getElementById('userLocalIp');
    if (ip === 'Blocked') {
      localIpElement.innerText = 'Hidden (Browser Privacy)';
      localIpElement.title = 'Browser menyembunyikan IP Lokal demi keamanan (mDNS Privacy).';
    } else {
      localIpElement.innerText = ip;
    }
  });
