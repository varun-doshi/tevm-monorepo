import { describe, expect, it } from 'vitest'
import { blockNumberHandler } from './blockNumberHandler.js'

describe(blockNumberHandler.name, () => {
	it('should return the block number', async () => {
		const blockchain = {
			getCanonicalHeadBlock: () =>
				Promise.resolve({
					header: {
						number: 420n,
					},
				}),
		}
		expect(await blockNumberHandler({ getVm: () => ({ blockchain }) } as any)()).toBe(420n)
	})
})
