var Color = require('color');

/* eslint-disable max-len */
var GRADIENT_STR = 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'$start\', endColorstr=\'$end\', GradientType=$type)';
/* eslint-enable max-len */

// 0.5 -> 80, 0.3 -> 4d
function getAlphaHex(alpha) {
    var num = Math.round(alpha * 255);
    var hex = num.toString(16);

    return hex.length === 1 ? '0' + hex : hex;
}

// color -> #AABBCCDD
function getColorStr(color) {
    var hex = color.hexString();
    var alpha = getAlphaHex(color.alpha());
    var colorStr = '#' + alpha + hex.slice(1);

    return colorStr.toLowerCase();
}

function getGradientString(startColor, endColor, type) {
    var startColorStr = getColorStr(startColor);
    var endColorStr = getColorStr(endColor);

    return GRADIENT_STR
        .replace('$type', type)
        .replace('$start', startColorStr)
        .replace('$end', endColorStr);
}

function filterGradient(start, end, type) {
    var startColor;
    var endColor;

    // fn(startColor) - It was used to generate rgba fallback
    if (arguments.length === 1) {
        end = start;
    }

    startColor = Color(start);
    endColor = Color(end);
    type = type || 0; // 0: vertical, 1: horizontal

    return getGradientString(startColor, endColor, type);
}

module.exports = filterGradient;
