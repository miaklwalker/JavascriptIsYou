import { operatorBlocks } from '../blocks/BlocksCache.js';

export function blockLogic() {
	operatorBlocks.forEach(block => {
		block.rules();
	});
}
