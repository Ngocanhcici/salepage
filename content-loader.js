document.addEventListener('DOMContentLoaded', function() {
  const data = localStorage.getItem('f5_homepage_content');
  if (!data) return; // Không có dữ liệu quản trị, dùng nội dung mặc định gốc

  try {
    const content = JSON.parse(data);
    
    // Hàm helper an toàn để map ID với dữ liệu
    const updateElement = (id, html) => {
      if (!html) return;
      const el = document.getElementById(id);
      if (el) el.innerHTML = html; // Cho phép HTML như thẻ <br>, <em>
    };

    // Hero Section
    updateElement('dyn-hero-badge', content.heroBadge);
    updateElement('dyn-hero-h1', content.heroH1);
    updateElement('dyn-hero-sub', content.heroSub);

    // For Whom Section
    updateElement('dyn-whom-label', content.whomLabel);
    updateElement('dyn-whom-h2', content.whomH2);
    
    updateElement('dyn-whom-c1-h3', content.whomC1H3);
    updateElement('dyn-whom-c1-p', content.whomC1P);
    
    updateElement('dyn-whom-c2-h3', content.whomC2H3);
    updateElement('dyn-whom-c2-p', content.whomC2P);
    
    updateElement('dyn-whom-c3-h3', content.whomC3H3);
    updateElement('dyn-whom-c3-p', content.whomC3P);

    // Pain Points Section
    updateElement('dyn-pain-label', content.painLabel);
    updateElement('dyn-pain-h2', content.painH2);
    updateElement('dyn-pain-sub', content.painSub);

    updateElement('dyn-pain-c1-h3', content.painC1H3);
    updateElement('dyn-pain-c1-p', content.painC1P);

    updateElement('dyn-pain-c2-h3', content.painC2H3);
    updateElement('dyn-pain-c2-p', content.painC2P);

    updateElement('dyn-pain-c3-h3', content.painC3H3);
    updateElement('dyn-pain-c3-p', content.painC3P);

  } catch (e) {
    console.error("Lỗi khi load dữ liệu homepage từ admin:", e);
  }
});
