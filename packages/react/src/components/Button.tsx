import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: 'small',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  padding: '$0 $4',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: 'White',
        backgroundColor: '$messier500',

        '&:not(:disabled):hover': {
          backgroundColor: '$messier300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$messier300',
        border: '2px solid $messier500',

        '&:not(:disabled):hover': {
          backgroundColor: '$messier500',
          color: '#FFF',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          backgroundColor: '$messier500',
          color: '$white',
        },

        '&:disabled': {
          color: '$white',
          borderColor: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
