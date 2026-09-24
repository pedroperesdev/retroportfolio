export type Screen = 'cmd' | 'booting' | 'login' | 'desktop' | 'none';
export type OpenableFoldersOrFiles = '' | 'web projects' | 'game projects' | 'prayingpetals' | 'calculator';
export type WindowStatus = 'normal' | 'maximized' | 'minimized';
export type IconType = 'folder' | 'file' | 'calculator' | 'apps';
export type IconPlace = 'desktop' | 'navbar' | 'infolder' | 'startbar';

export type Digit = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'.'
export type Operator = '/'|'*'|'%'|'-'|'+'
export type ImmediateOp = 'sqr'|'1/x'|'+/-'
export type Action = 'Back'|'C'|'='
export type CalcSymbol = Digit | Operator | ImmediateOp | Action


export interface WindowState {
    id: number,
    x: number, 
    y: number,
    z:number,
    name: OpenableFoldersOrFiles,
    icon: IconType,
    status: WindowStatus
}

export interface AppType {
    icon: IconType,
    fileName: OpenableFoldersOrFiles
}
