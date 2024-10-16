import * as CryptoJS from 'crypto-js';

export const generateHmacSha1Base64 = (path: string, key: string): string => {
    const hmacSha1 = CryptoJS.HmacSHA1(path, key);

    return  CryptoJS.enc.Base64.stringify(hmacSha1)
        .replace(/\//g, '_')
        .replace(/\+/g, '-')
        .replace(/=+$/, '');
}
export const generateImageThumborUrl = (path: string, size = '300x300'): string => {
    const key = process.env.NEXT_PUBLIC_RS_SECRET_KEY || '';
    return `${process.env.NEXT_PUBLIC_RS_CDN_URL}/pure/${generateHmacSha1Base64(`${size}/${path}`, key)}/${path}`;
}