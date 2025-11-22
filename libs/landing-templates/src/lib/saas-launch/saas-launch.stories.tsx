import type { Meta, StoryObj } from '@storybook/react-vite';
import { SaasLaunch } from './saas-launch';
import { expect } from 'storybook/test';

const meta = {
  component: SaasLaunch,
  title: 'SaasLaunch',
} satisfies Meta<typeof SaasLaunch>;
export default meta;

type Story = StoryObj<typeof SaasLaunch>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/SaasLaunch/gi)).toBeTruthy();
  },
} satisfies Story;
