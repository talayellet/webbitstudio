import type { Meta, StoryObj } from '@storybook/react-vite';
import { WebbitstudioLandingTemplates } from './landing-templates';
import { expect } from 'storybook/test';

const meta = {
  component: WebbitstudioLandingTemplates,
  title: 'WebbitstudioLandingTemplates',
} satisfies Meta<typeof WebbitstudioLandingTemplates>;
export default meta;

type Story = StoryObj<typeof WebbitstudioLandingTemplates>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(/WebbitstudioLandingTemplates/gi)
    ).toBeTruthy();
  },
} satisfies Story;
