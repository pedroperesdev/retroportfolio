export type Screen = 'cmd' | 'booting' | 'login' | 'desktop' | 'none';
export type OpenableFoldersOrFiles = '' | 'web projects' | 'game projects' | 'prayingpetals' | 'calculator';
export type WindowStatus = 'normal' | 'maximized' | 'minimized';
export type IconType = 'folder' | 'file' | 'calculator' | 'apps';
export type IconPlace = 'desktop' | 'navbar' | 'infolder' | 'startbar';

export interface WindowState {
    id: number,
    x: number, 
    y: number,
    z:number,
    name: OpenableFoldersOrFiles,
    icon: IconType,
    status: WindowStatus
}
