// import * as fs from 'fs';
// import * as path from 'path';
// import * as os from 'os';
// import * as cp from 'child_process';

// // test path
// export function findPath(path1, path2): string {
//     return path.join(path1, path2);
// }

// // export function getDiff() {
// // 	return new Promise((c, e) => {
// // 		cp.exec('git diff', (err, stdout, stderr) => {
// // 			if (err) {
// // 				return e('error wehen getting diff');
// // 			}
// // 			return c({ diff: stdout.trim() });
// // 		});
// // 	});
// // }


// export interface IGit {
// 	path: string;
// 	version: string;
// }

// export interface Remote {
// 	name: string;
// 	url: string;
// }

// function parseVersion(raw: string): string {
// 	return raw.replace(/^git version /, '');
// }

// export interface IGitErrorData {
// 	error?: Error;
// 	message?: string;
// 	stdout?: string;
// 	stderr?: string;
// 	exitCode?: number;
// 	gitErrorCode?: string;
// 	gitCommand?: string;
// }

// // function findGitDarwin(onLookup: (path: string) => void): Promise<IGit> {
// // 	return new Promise<IGit>((c, e) => {
// // 		cp.exec('which git', (err, gitPathBuffer) => {
// // 			if (err) {
// // 				return e('git not found');
// // 			}

// // 			const path = gitPathBuffer.toString().replace(/^\s+|\s+$/g, '');

// // 			function getVersion(path: string) {
// // 				onLookup(path);

// // 				// make sure git executes
// // 				cp.exec('git --version', (err, stdout) => {

// // 					if (err) {
// // 						return e('git not found');
// // 					}

// // 					return c({ path, version: parseVersion(stdout.trim()) });
// // 				});
// // 			}

// // 			if (path !== '/usr/bin/git') {
// // 				return getVersion(path);
// // 			}

// // 			// must check if XCode is installed
// // 			cp.exec('xcode-select -p', (err: any) => {
// // 				if (err && err.code === 2) {
// // 					// git is not installed, and launching /usr/bin/git
// // 					// will prompt the user to install it

// // 					return e('git not found');
// // 				}

// // 				getVersion(path);
// // 			});
// // 		});
// // 	});
// // }

// // export function findGit(hint: string | undefined, onLookup: (path: string) => void): Promise<IGit> {
// // 	const first = hint ? findSpecificGit(hint, onLookup) : Promise.reject<IGit>(null);

// // 	return first
// // 		.then(void 0, () => {
// // 			switch (process.platform) {
// // 				case 'darwin': return findGitDarwin(onLookup);
// // 				// case 'win32': return findGitWin32(onLookup);
// // 				default: return findSpecificGit('git', onLookup);
// // 			}
// // 		})
// // 		.then(null, () => Promise.reject(new Error('Git installation not found.')));
// // }

// // function findSpecificGit(path: string, onLookup: (path: string) => void): Promise<IGit> {
// // 	return new Promise<IGit>((c, e) => {
// // 		onLookup(path);

// // 		const buffers: Buffer[] = [];
// // 		const child = cp.spawn(path, ['--version']);
// // 		child.stdout.on('data', (b: Buffer) => buffers.push(b));
// // 		child.on('error', cpErrorHandler(e));
// // 		child.on('exit', code => code ? e(new Error('Not found')) : c({ path, version: parseVersion(Buffer.concat(buffers).toString('utf8').trim()) }));
// // 	});
// // }

// // function cpErrorHandler(cb: (reason?: any) => void): (reason?: any) => void {
// // 	return err => {
// // 		if (/ENOENT/.test(err.message)) {
// // 			err = new GitError({
// // 				error: err,
// // 				message: 'Failed to execute git (ENOENT)',
// // 				gitErrorCode: GitErrorCodes.NotAGitRepository
// // 			});
// // 		}

// // 		cb(err);
// // 	};
// // }

// // export const GitErrorCodes = {
// // 	BadConfigFile: 'BadConfigFile',
// // 	AuthenticationFailed: 'AuthenticationFailed',
// // 	NoUserNameConfigured: 'NoUserNameConfigured',
// // 	NoUserEmailConfigured: 'NoUserEmailConfigured',
// // 	NoRemoteRepositorySpecified: 'NoRemoteRepositorySpecified',
// // 	NotAGitRepository: 'NotAGitRepository',
// // 	NotAtRepositoryRoot: 'NotAtRepositoryRoot',
// // 	Conflict: 'Conflict',
// // 	UnmergedChanges: 'UnmergedChanges',
// // 	PushRejected: 'PushRejected',
// // 	RemoteConnectionError: 'RemoteConnectionError',
// // 	DirtyWorkTree: 'DirtyWorkTree',
// // 	CantOpenResource: 'CantOpenResource',
// // 	GitNotFound: 'GitNotFound',
// // 	CantCreatePipe: 'CantCreatePipe',
// // 	CantAccessRemote: 'CantAccessRemote',
// // 	RepositoryNotFound: 'RepositoryNotFound',
// // 	RepositoryIsLocked: 'RepositoryIsLocked',
// // 	BranchNotFullyMerged: 'BranchNotFullyMerged',
// // 	NoRemoteReference: 'NoRemoteReference',
// // 	InvalidBranchName: 'InvalidBranchName',
// // 	BranchAlreadyExists: 'BranchAlreadyExists',
// // 	NoLocalChanges: 'NoLocalChanges',
// // 	NoStashFound: 'NoStashFound',
// // 	LocalChangesOverwritten: 'LocalChangesOverwritten',
// // 	NoUpstreamBranch: 'NoUpstreamBranch',
// // 	IsInSubmodule: 'IsInSubmodule'
// // };

// // export class GitError {

// // 	error?: Error;
// // 	message: string;
// // 	stdout?: string;
// // 	stderr?: string;
// // 	exitCode?: number;
// // 	gitErrorCode?: string;
// // 	gitCommand?: string;

// // 	constructor(data: IGitErrorData) {
// // 		if (data.error) {
// // 			this.error = data.error;
// // 			this.message = data.error.message;
// // 		} else {
// // 			this.error = void 0;
// // 			this.message = '';
// // 		}

// // 		this.message = this.message || data.message || 'Git error';
// // 		this.stdout = data.stdout;
// // 		this.stderr = data.stderr;
// // 		this.exitCode = data.exitCode;
// // 		this.gitErrorCode = data.gitErrorCode;
// // 		this.gitCommand = data.gitCommand;
// // 	}

// // 	toString(): string {
// // 		let result = this.message + ' ' + JSON.stringify({
// // 			exitCode: this.exitCode,
// // 			gitErrorCode: this.gitErrorCode,
// // 			gitCommand: this.gitCommand,
// // 			stdout: this.stdout,
// // 			stderr: this.stderr
// // 		}, null, 2);

// // 		if (this.error) {
// // 			result += (<any>this.error).stack;
// // 		}

// // 		return result;
// // 	}
// // }

