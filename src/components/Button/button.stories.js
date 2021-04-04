import React from 'react'
import Button from './index'

export default {
  title: 'UI/Button',
  component: Button,
}

export const Default = () => <Button>Primary</Button>

export const SuccessBtn = () => <Button type="success" shape="round">+</Button>

export const DangerBtn = () => <Button type="danger">Danger</Button>
