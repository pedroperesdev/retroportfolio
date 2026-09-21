export type PossibleFolders = 'web projects' | 'game projects' | 'Calculator';
export type WindowStatus = 'normal' | 'maximized' | 'minimized';
export type IconType = 'folder' | 'file' | 'calculator'
export type IconPlace = 'desktop' | 'navbar' | 'infolder'
export type OpenableFiles = 'prayingpetals'

export interface WindowState {
    id: number,
    x: number, 
    y: number,
    z:number,
    name: PossibleFolders,
    icon: string,
    status: WindowStatus
}
