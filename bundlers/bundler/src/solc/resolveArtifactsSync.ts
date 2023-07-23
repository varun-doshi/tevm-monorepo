import { Logger, ModuleInfo } from '../types'
import { compileContractSync } from './compileContracts'
import { ResolvedConfig } from '@evmts/config'

export type Artifacts = Record<
	string,
	{ contractName: string; abi: any; bytecode: string }
>

export const resolveArtifactsSync = (
	solFile: string,
	basedir: string,
	logger: Logger,
	config: ResolvedConfig,
): {
	artifacts: Artifacts
	modules: Record<'string', ModuleInfo>
} => {
	if (!solFile.endsWith('.sol')) {
		throw new Error('Not a solidity file')
	}
	const { artifacts, modules } = compileContractSync(
		solFile,
		basedir,
		config.compiler,
	)

	if (!artifacts) {
		logger.error(`Compilation failed for ${solFile}`)
		throw new Error('Compilation failed')
	}

	return {
		artifacts: Object.fromEntries(
			Object.entries(artifacts).map(([contractName, contract]) => {
				const abi = (contract as any).abi
				const bytecode = (contract as any).evm.bytecode.object
				return [contractName, { contractName, abi, bytecode }]
			}),
		),
		modules,
	}
}
