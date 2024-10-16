[**@tevm/common**](../README.md) • **Docs**

***

[@tevm/common](../globals.md) / CustomCrypto

# Interface: CustomCrypto

## Properties

### ecdsaRecover()?

> `optional` **ecdsaRecover**: (`sig`, `recId`, `hash`) => `Uint8Array`

#### Parameters

• **sig**: `Uint8Array`

• **recId**: `number`

• **hash**: `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:74

***

### ecdsaSign()?

> `optional` **ecdsaSign**: (`msg`, `pk`) => `object`

#### Parameters

• **msg**: `Uint8Array`

• **pk**: `Uint8Array`

#### Returns

`object`

##### recid

> **recid**: `number`

##### signature

> **signature**: `Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:70

***

### ecrecover()?

> `optional` **ecrecover**: (`msgHash`, `v`, `r`, `s`, `chainId`?) => `Uint8Array`

#### Parameters

• **msgHash**: `Uint8Array`

• **v**: `bigint`

• **r**: `Uint8Array`

• **s**: `Uint8Array`

• **chainId?**: `bigint`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:67

***

### ecsign()?

> `optional` **ecsign**: (`msg`, `pk`, `chainId`?) => `ECDSASignature`

#### Parameters

• **msg**: `Uint8Array`

• **pk**: `Uint8Array`

• **chainId?**: `bigint`

#### Returns

`ECDSASignature`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:69

***

### keccak256()?

> `optional` **keccak256**: (`msg`) => `Uint8Array`

Interface for providing custom cryptographic primitives in place of `ethereum-cryptography` variants

#### Parameters

• **msg**: `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:66

***

### kzg?

> `optional` **kzg**: `Kzg`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:75

***

### sha256()?

> `optional` **sha256**: (`msg`) => `Uint8Array`

#### Parameters

• **msg**: `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+common@4.4.0/node\_modules/@ethereumjs/common/dist/esm/types.d.ts:68
