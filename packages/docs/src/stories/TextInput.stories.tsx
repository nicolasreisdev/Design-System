import { Box, TextInput, TextInputProps, Text } from "@ignite-ui/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => {
            return(
                <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size="sm"> Email adress </Text>
                    {Story()}
                </Box>
            )
        }
    ],

} as Meta<TextInputProps> 

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your email',
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args:{
        disabled: true,
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args:{
        prefix: 'cal.com/',
        placeholder: 'your username',
    }
}