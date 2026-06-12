// COUNTDOWN to World Cup Final — 19 July 2026 18:00 UTC
  const finalDate = new Date('2026-07-19T18:00:00Z');
  function updateCountdown() {
    const now = new Date();
    const diff = finalDate - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // FORM SUBMIT
  // document.getElementById('wc-form').addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   const data = new FormData(this);
  //   const payload = Object.fromEntries(data.entries());
    // Encode payload into WhatsApp message and open
    // const msg = encodeURIComponent(
    //   `🏆 *New World Cup Enquiry — Bleval Inc*\n\n` +
    //   `*Name:* ${payload.name}\n` +
    //   `*Venue:* ${payload.venue}\n` +
    //   `*Type:* ${payload.venue_type || 'Not specified'}\n` +
    //   `*Email:* ${payload.email}\n` +
    //   `*Package:* ${payload.package}\n` +
    //   `*Message:* ${payload.message || 'None'}`
    // );
    // Open WhatsApp — replace 27XXXXXXXXX with your actual number
  //   window.open(`https://wa.me/27672572112?text=${msg}`, '_blank');
  //   document.getElementById('wc-form').style.display = 'none';
  //   document.getElementById('form-success').style.display = 'block';
  // });
