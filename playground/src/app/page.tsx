'use client'
import { Flex } from '@/styled-system/jsx'
import { Toolbar } from '../components/Toolbar'
import { Splitter, SplitterPanel, SplitterResizeTrigger } from '@ark-ui/react'
import { css } from '@/styled-system/css'
import { Editor } from '../components/Editor'

const Page = () => {
  return (
    <>
      <Toolbar />

      <Splitter
        className={css({ flex: '1' })}
        size={[
          { id: 'editor', size: 50 },
          { id: 'preview', size: 50 },
        ]}
      >
        <SplitterPanel id="editor" className={css({ display: 'flex', bg: 'red.100' })}>
          <Splitter
            className={css({ flex: '1' })}
            orientation="vertical"
            size={[
              { id: 'top', size: 80 },
              { id: 'bottom', size: 20 },
            ]}
          >
            <SplitterPanel id="top" className={css({ display: 'flex', bg: 'red.100' })}>
              Code
            </SplitterPanel>
            <SplitterResizeTrigger id="top:bottom">
              <div className={css({ background: 'gray.300', minWidth: '1px', minHeight: '1px' })} />
            </SplitterResizeTrigger>
            <SplitterPanel
              id="bottom"
              className={css({ display: 'flex', bg: 'yellow.100', minHeight: '16' })}
              snapSize={64}
            >
              <Flex>Generated</Flex>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
        <SplitterPanel id="preview" className={css({ display: 'flex', bg: 'blue.100' })}>
          <Flex>Preview</Flex>
        </SplitterPanel>
      </Splitter>
    </>
  )
}

export default Page
