import { Box, BoxProps, Text } from "@ignite-ui/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <h1>Box</h1>
                <Text>This is a box component</Text>
            </>
        ),
    },
    argTypes: {
        children: {
            control: {
                type: 'text',
            }
        }
    }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}
