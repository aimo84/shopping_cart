export function convertToCdn (image) {
	return window.url.APP_ENV != 'local' ? window.url.CDN_ASSETS + image : image
}