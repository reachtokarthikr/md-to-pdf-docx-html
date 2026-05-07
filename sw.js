const CACHE = 'md2pdf-v3';

const PRECACHE = [
  './',
  './index.html',
  './icon.svg',
  './logo.svg',
  /* Google Fonts */
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;600&family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Lato:wght@400;700&family=Montserrat:wght@400;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;700&display=swap',
  /* highlight.js */
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
  /* marked.js */
  'https://cdn.jsdelivr.net/npm/marked@12/marked.min.js',
  /* KaTeX */
  'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js',
  /* Mermaid */
  'https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js',
  /* html2pdf.js */
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  /* docx.js */
  'https://unpkg.com/docx@8.5.0/build/index.umd.js',
  /* FileSaver.js */
  'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
  /* CodeMirror 5 */
  'https://cdn.jsdelivr.net/npm/codemirror@5/lib/codemirror.css',
  'https://cdn.jsdelivr.net/npm/codemirror@5/lib/codemirror.js',
  'https://cdn.jsdelivr.net/npm/codemirror@5/mode/markdown/markdown.js',
  'https://cdn.jsdelivr.net/npm/codemirror@5/addon/edit/closebrackets.js',
  'https://cdn.jsdelivr.net/npm/codemirror@5/addon/display/placeholder.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(PRECACHE.map(url =>
        c.add(url).catch(() => {}) /* ignore individual failures */
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  /* Only intercept GET requests; skip chrome-extension and non-http */
  if(e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if(url.protocol !== 'http:' && url.protocol !== 'https:') return;

  /* Network-first for our own HTML/JS/CSS so updates apply immediately;
     cache-first for CDN libraries (they're version-pinned). */
  const sameOrigin = url.origin === self.location.origin;
  const isHtmlOrApp = sameOrigin && (
    url.pathname === '/' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('/sw.js') ||
    url.pathname.endsWith('/manifest.webmanifest')
  );

  if(isHtmlOrApp){
    e.respondWith(
      fetch(e.request).then(response => {
        if(response && response.ok){
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request).then(c => c || new Response('', {status: 408})))
    );
    return;
  }

  /* cache-first for everything else */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(response => {
        if(response && response.ok){
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached || new Response('', {status: 408}));
    })
  );
});
