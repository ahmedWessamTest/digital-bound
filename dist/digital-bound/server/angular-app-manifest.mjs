
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 21154, hash: '2abc4593a7c8e5b2988c4e2eaa861aa551ba4a7b18d7063b3a8dda40fc7c1299', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12774, hash: 'b63565d3f54477eb1e4d4a929c79c432c0bebe448c21373cc3addc6b009fcc4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EUZMEDCW.css': {size: 38294, hash: '36VCnkLtYqc', text: () => import('./assets-chunks/styles-EUZMEDCW_css.mjs').then(m => m.default)}
  },
};
