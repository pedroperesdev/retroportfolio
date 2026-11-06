export type Screen = 'cmd' | 'booting' | 'login' | 'desktop' | 'turnoff' | 'none';
export type OpenableFoldersOrFiles = '' | 'web projects' | 'game projects' | 'Recycle Bin' | 'prayingpetals.pdf' | 'legau_internship.pdf' | 'Calculator' | 'Minesweeper' | 'Photos';
export type WindowStatus = 'normal' | 'maximized' | 'minimized';
export type IconType = 'folder' | 'recyclebin' | 'file' | 'apps' | 'calculator' | 'minesweeper' | 'photos';
export type IconPlace = 'desktop' | 'navbar' | 'infolder' | 'startbar';

export type Digit = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'.'
export type Operator = '/'|'*'|'%'|'-'|'+'
export type ImmediateOp = 'sqr'|'1/x'|'+/-'
export type Action = 'Back'|'C'|'='
export type CalcSymbol = Digit | Operator | ImmediateOp | Action

export type CellRealValue = 'mine'| 'mine_explode' | 'nothing' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export type CellAppearanceValue = 'hidden' | 'flag' | 'open'
export type MineSweeperFace = 'happy' | 'surprised' | 'dead' | 'sunglasses'
export type MineSweeperCell = {
  appearance: CellAppearanceValue
  value: CellRealValue
}

export interface WindowState {
    id: number,
    x: number, 
    y: number,
    z:number,
    name: OpenableFoldersOrFiles,
    icon: IconType,
    status: WindowStatus
    canMax : boolean,
}

export interface AppType {
    icon: IconType,
    fileName: OpenableFoldersOrFiles
}
