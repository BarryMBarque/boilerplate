import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Main from './index'
export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('title', 'React avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS, e styled components'
    )}
  />
)
