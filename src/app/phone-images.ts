import { IMAGES } from './images';

export const PHONE_IMAGES = [];

IMAGES.forEach((value) => {
    PHONE_IMAGES.push(JSON.parse(JSON.stringify(value)));
});

PHONE_IMAGES.forEach((value) => {
    value.sources.shift();
    value.sources.unshift({
        media: '(min-width: 576px)',
        srcset: 'images/dummy.png'
    });
});