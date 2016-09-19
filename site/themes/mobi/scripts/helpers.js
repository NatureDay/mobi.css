/* global hexo */
/* eslint strict:0 */

'use strict';

console.log('------------');

hexo.extend.helper.register('url_for_lang', (path) => {
  const lang = this.page.lang;
  let url = this.url_for(path);

  if (lang !== 'en' && url[0] === '/') url = `/${lang}${url}`;

  return url;
});
