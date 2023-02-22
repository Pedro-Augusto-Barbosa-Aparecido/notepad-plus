import { CaretRight, File, Files, FileText, SignOut } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { EmptyRecentFile } from './components/EmptyRecentFile'
import {
  Container,
  Label,
  Menu,
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger
} from './styles'

export function Toolbar() {
  const colors = useTheme()

  return (
    <Container>
      <Menu>
        <MenuTrigger>File</MenuTrigger>
        <MenuPortal>
          <MenuContent>
            <MenuItem>
              <div>
                <FileText color={colors.gray[400]} size={16} />
                <Label>New File</Label>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuSub>
              <MenuSubTrigger>
                <div>
                  <Files color={colors.gray[400]} size={16} />
                  <Label>Open Recently</Label>
                </div>
                <CaretRight color={colors.gray[400]} size={16} />
              </MenuSubTrigger>
              <MenuPortal>
                <MenuSubContent>
                  <EmptyRecentFile />
                </MenuSubContent>
              </MenuPortal>
            </MenuSub>
            <MenuItem>
              <div>
                <File color={colors.gray[400]} size={16} />
                <Label>Open</Label>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <div>
                <File color={colors.gray[400]} size={16} />
                <Label>Save</Label>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem onClick={window.api.close}>
              <div>
                <SignOut color={colors.gray[400]} size={16} />
                <Label>Exit</Label>
              </div>
            </MenuItem>
          </MenuContent>
        </MenuPortal>
      </Menu>
      <Menu>
        <MenuTrigger>Tools</MenuTrigger>
        <MenuPortal>
          <MenuContent>
            <MenuItem>
              <Label>Close all documents</Label>
            </MenuItem>
            <MenuItem>
              <Label>Close all saved</Label>
            </MenuItem>
            <MenuItem>
              <Label>Close current document</Label>
            </MenuItem>
          </MenuContent>
        </MenuPortal>
      </Menu>
    </Container>
  )
}
