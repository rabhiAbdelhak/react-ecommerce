import {css} from 'styled-components';

export const mobile = (style) => {
    
    return css`@media (max-width: 450px) {
        ${style}
    }`
}

export const tablette = (style) => {
    
    return css`@media (max-width: 992px) {
        ${style}
    }`
}

export const largescreen = (style) => {
    
    return css`@media (min-width: 992px) {
        ${style}
    }`
}

