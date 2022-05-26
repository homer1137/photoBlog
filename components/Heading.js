import React from 'react'

export default function Heading({tag, text}) {
    const Tag = tag || 'h1';
  return (
    <Tag>{text}</Tag>
  )
}
