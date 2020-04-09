import { storiesOf } from '@storybook/vue'

// import ButtonReadme from '../components/UI/buttons/README.md'
import ButtonUsage from '../components/UI/buttons/USAGE.md'
import LerniButton from '../components/UI/buttons/LerniButton.vue'

storiesOf('Style Guide/UI/Buttons', module)
  .addParameters({
    readme: {
      content: ButtonUsage,
      sidebar: `<!-- PROPS -->`
    }
  })
  .add('Button Color', () => {
    return {
      components: {
        LerniButton
      },
      template: `<div>
      <lerni-button>Primary</lerni-button>
      <lerni-button color="grey-500">grey</lerni-button>
      </div>
      `
    }
  })

  .add('Success Button', () => {
    return {
      components: {
        LerniButton
      },
      template: `<lerni-button variant="success">My Button</lerni-button>`
    }
  })
