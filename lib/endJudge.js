const ua = navigator.userAgent;
const iPad = ua.match(/(iPad).*OS\s([\d_]+)/),
iPhone = !iPad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
iPod = ua.match(/(iPod).*OS\s([\d_]+)/),
android = ua.match(/(Android)\s+([\d.]+)/)||ua.match(/Android/),
wp = ua.match(/Windows Phone ([\d.]+)/),
isMobile = iPad || iPhone || iPad || wp || android;