const mediaZero = '(min-width: 1px)',
      mediaXs = '(min-width: 250px)',
      mediaSm = '(min-width: 576px)';

export const IMAGES = [
    {
      fallbackSrc: 'images/examples/Pastelportraitx1140w.jpg',
      fallbackAlt: 'Pastelporträt vom Foto',
      fallbackSrcset: 'images/examples/Pastelportraitx1140w.jpg 1x, images/examples/Pastelportraitx1912w.jpg 2x',
      sources: [{
          media: mediaSm,
          srcset: 'images/examples/Pastelportraitx1140w.jpg 1x, images/examples/Pastelportraitx1912w.jpg 2x'
        },{
          media: mediaXs,
          srcset: 'images/examples/Pastelportraitx575w.jpg 1x, images/examples/Pastelportraitx1140w.jpg 2x'
        },{
          media: mediaZero,
          srcset: 'images/examples/Pastelportraitx100h.jpg 1x, images/examples/Pastelportraitx300h.jpg 2x'
        }]
    },
    {
      fallbackSrc: 'images/examples/Bleistiftportrait3x1005w.jpg',
      fallbackAlt: 'Bleistiftporträt',
      fallbackSrcset: 'images/examples/Bleistiftportrait3x1005w.jpg',
      sources: [{
          media: mediaSm,
          srcset: 'images/examples/Bleistiftportrait3x1005w.jpg'
        },{
          media: mediaXs,
          srcset: 'images/examples/Bleistiftportrait3x575w.jpg 1x, images/examples/Bleistiftportrait3x1005w.jpg 2x'
        },{
          media: mediaZero,
          srcset: 'images/examples/Bleistiftportrait3x100h.jpg 1x, images/examples/Bleistiftportrait3x300h.jpg 2x'
        }]
    },
    {
      fallbackSrc: 'images/examples/Pastelportrait1x424w.jpg',
      fallbackAlt: 'Pastelporträt',
      fallbackSrcset: 'images/examples/Pastelportrait1x424w.jpg',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Pastelportrait1x150.jpg 99w, images/examples/Pastelportrait1x424w.jpg 424w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Bleistiftportrait6x150.jpg',
      fallbackAlt: 'Bleistiftporträt',
      fallbackSrcset: 'images/examples/Bleistiftportrait6x150.jpg 110w, images/examples/Bleistiftportrait6x640.jpg 470w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Bleistiftportrait6x150.jpg 110w, images/examples/Bleistiftportrait6x640.jpg 470w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Bleistiftportrait1x150.jpg',
      fallbackAlt: 'Bleistiftporträt',
      fallbackSrcset: 'images/examples/Bleistiftportrait1x150.jpg 195w, images/examples/Bleistiftportrait1x423.jpg 552w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Bleistiftportrait1x150.jpg 195w, images/examples/Bleistiftportrait1x423.jpg 552w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Pastelportrait4x150.jpg',
      fallbackAlt: 'Pastelporträt',
      fallbackSrcset: 'images/examples/Pastelportrait4x150.jpg 105w, images/examples/Pastelportrait4x640.jpg 552w, images/examples/Pastelportrait4x3583.jpg 2510w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Pastelportrait4x150.jpg 105w, images/examples/Pastelportrait4x640.jpg 552w, images/examples/Pastelportrait4x3583.jpg 2510w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Buntstiftportrait2x150.jpg',
      fallbackAlt: 'Buntstiftporträt',
      fallbackSrcset: 'images/examples/Buntstiftportrait2x150.jpg 111w, images/examples/Buntstiftportrait2x640.jpg 475w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Buntstiftportrait2x150.jpg 111w, images/examples/Buntstiftportrait2x640.jpg 475w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Pastelportrait2x150.jpg',
      fallbackAlt: 'Pastelporträt',
      fallbackSrcset: 'images/examples/Pastelportrait2x150.jpg 112w, images/examples/Pastelportrait2x640.jpg 479w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Pastelportrait2x150.jpg 112w, images/examples/Pastelportrait2x640.jpg 479w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Buntstiftportrait1x150.jpg',
      fallbackAlt: 'Buntstiftporträt',
      fallbackSrcset: 'images/examples/Buntstiftportrait1x150.jpg 199w, images/examples/Buntstiftportrait1x640.jpg 853w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Buntstiftportrait1x150.jpg 199w, images/examples/Buntstiftportrait1x640.jpg 853w'
        }]
    },
    { 
      fallbackSrc: 'images/examples/Bleistiftportrait5x150.jpg',
      fallbackAlt: 'Bleistiftporträt',
      fallbackSrcset: 'images/examples/Bleistiftportrait5x150.jpg 125w, images/examples/Bleistiftportrait5x640.jpg 534w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Bleistiftportrait5x150.jpg 125w, images/examples/Bleistiftportrait5x640.jpg 534w'
        }]
    },
    {
      fallbackSrc: 'images/examples/Bleistiftportrait4x150.jpg',
      fallbackAlt: 'Bleistiftporträt',
      fallbackSrcset: 'images/examples/Bleistiftportrait4x150.jpg 199w, images/examples/Bleistiftportrait4x640.jpg 853w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Bleistiftportrait4x150.jpg 199w, images/examples/Bleistiftportrait4x640.jpg 853w'
        }]
    },
    {
      fallbackSrc: 'images/Buntstiftportraitx150.jpg',
      fallbackAlt: 'Buntstiftporträt vom Foto',
      fallbackSrcset: 'images/examples/Buntstiftportraitx150.jpg 93w, images/examples/Buntstiftportraitx640.jpg 400w',
      sources: [{
          media: '(min-width: 1px)',
          srcset: 'images/examples/Buntstiftportraitx150.jpg 93w, images/examples/Buntstiftportraitx640.jpg 400w'
        }]
    } ];