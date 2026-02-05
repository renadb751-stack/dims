// script.js - simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // Contact form: open mailto with content (simple, no backend)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const service = data.get('service') || '';
    const budget = data.get('budget') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('طلب خدمة من موقع ديم برمجه - ' + service);
    const body = encodeURIComponent('الاسم: ' + name + '\n' + 'البريد: ' + email + '\n' + 'الميزانية: ' + budget + '\n' + 'الرسالة: ' + message);
    // Change this email to your real email in index.html or here
    const mailTo = 'mailto:your-email@example.com?subject=' + subject + '&body=' + body;
    window.location.href = mailTo;
  });

  // WhatsApp button (floating)
  const waBtn = document.getElementById('waFloat');
  const waLink = document.getElementById('whatsappLink');

  function openWhatsApp(){
    // Replace YOUR_NUMBER with your actual phone number (with country code, e.g. 9665XXXXXXXX)
    const phone = 'YOUR_NUMBER';
    const text = encodeURIComponent('مرحبًا، أود الاستفسار عن خدمة من ديم برمجه');
    const url = 'https://wa.me/' + phone + '?text=' + text;
    // open in new tab
    window.open(url, '_blank');
  }

  waBtn.addEventListener('click', openWhatsApp);
  waLink.addEventListener('click', function(e){
    // let href be handled by anchor; if placeholder, prevent default and open with JS
    if (waLink.href.includes('YOUR_NUMBER')) {
      e.preventDefault();
      openWhatsApp();
    }
  });
});
