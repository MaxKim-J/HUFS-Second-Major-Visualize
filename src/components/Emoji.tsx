import React from 'react'

type EmojiProps = {
  label: string
  emoji: string
}

const Emoji = ({ label, emoji }: EmojiProps) => (
  <span role="img" area-label={label}>
    {emoji}
  </span>
)

export default Emoji
