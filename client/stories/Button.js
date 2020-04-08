import { storiesOf } from '@storybook/vue'

// import ButtonReadme from '../components/UI/buttons/README.md'
import ButtonUsage from '../components/UI/buttons/USAGE.md'
import MyButton from '../components/UI/buttons/LerniButton.vue'

storiesOf('Button', module)
  .addParameters({
    readme: {
      content: ButtonUsage,
      sidebar: `<!-- PROPS -->`
    }
  })
  .add('Button', () => {
    return {
      components: {
        MyButton
      },
      template: `<my-button>My Button</my-button>`
    }
  })

  .add('Success Button', () => {
    return {
      components: {
        MyButton
      },
      template: `<my-button variant="success">My Button</my-button>`
    }
  })
