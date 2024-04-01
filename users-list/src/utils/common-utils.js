import { FALLBACK_PICTURE } from '../../src/constants/constants';

  
/**
 * Add a fallback picture if picture is not available
 * @param {*} event 
 */
export const handleImageError = (event) => {
    event.target.src = FALLBACK_PICTURE;
};
