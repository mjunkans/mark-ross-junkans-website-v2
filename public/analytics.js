// MRJ Analytics - Lightweight self-hosted pageview tracker
// Add this script to every page on markrossjunkans.com
// <script src="/analytics.js" defer></script>

(function () {
  var CRM = "https://mrj-crm.vercel.app";
  var endpoint = CRM + "/api/analytics/ingest";

  // Generate a simple session ID (persists per tab/session)
  var sid = sessionStorage.getItem("_mrj_sid");
  if (!sid) {
    sid = String(Math.floor(Math.random() * 2147483647));
    sessionStorage.setItem("_mrj_sid", sid);
  }

  // Generate a device ID (persists across sessions)
  var did = localStorage.getItem("_mrj_did");
  if (!did) {
    did = String(Math.floor(Math.random() * 2147483647));
    localStorage.setItem("_mrj_did", did);
  }

  function getDeviceType() {
    var ua = navigator.userAgent;
    if (/Mobi|Android.*Mobile|iPhone|iPod/.test(ua)) return "mobile";
    if (/iPad|Android(?!.*Mobile)|Tablet/.test(ua)) return "tablet";
    return "desktop";
  }

  function getBrowser() {
    var ua = navigator.userAgent;
    if (ua.indexOf("Firefox") > -1) return "Firefox";
    if (ua.indexOf("Edg") > -1) return "Edge";
    if (ua.indexOf("OPR") > -1 || ua.indexOf("Opera") > -1) return "Opera";
    if (ua.indexOf("Chrome") > -1) return "Chrome";
    if (ua.indexOf("Safari") > -1) return "Safari";
    return "Other";
  }

  function getOS() {
    var ua = navigator.userAgent;
    if (ua.indexOf("Win") > -1) return "Windows";
    if (ua.indexOf("Mac") > -1) return "macOS";
    if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1) return "iOS";
    if (ua.indexOf("Android") > -1) return "Android";
    if (ua.indexOf("Linux") > -1) return "Linux";
    return "Other";
  }

  function getUTM() {
    var params = new URLSearchParams(window.location.search);
    var utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (k) {
      var v = params.get(k);
      if (v) utm[k] = v;
    });
    return utm;
  }

  function track() {
    var utm = getUTM();
    var data = {
      eventType: "pageview",
      path: window.location.pathname,
      origin: window.location.origin,
      queryParams: window.location.search || null,
      referrer: document.referrer || null,
      sessionId: parseInt(sid),
      deviceId: parseInt(did),
      deviceType: getDeviceType(),
      clientName: getBrowser(),
      osName: getOS(),
      timestamp: Date.now(),
    };

    // Merge UTM params
    if (utm.utm_source) data.utm_source = utm.utm_source;
    if (utm.utm_medium) data.utm_medium = utm.utm_medium;
    if (utm.utm_campaign) data.utm_campaign = utm.utm_campaign;
    if (utm.utm_term) data.utm_term = utm.utm_term;
    if (utm.utm_content) data.utm_content = utm.utm_content;

    // Use sendBeacon for reliability (won't block page unload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, JSON.stringify([data]));
    } else {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([data]),
        keepalive: true,
      }).catch(function () {});
    }
  }

  // Don't track bots or prerender
  if (navigator.webdriver) return;
  if (document.visibilityState === "prerender") {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") track();
    }, { once: true });
  } else {
    track();
  }
})();
