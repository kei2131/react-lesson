import React from 'react'

type Props = {
  contents: ToDoContent[]
}

export type ToDoContent = {
  id: number
  title: string
}

export const ListContents: React.FC<Props> = props => {

  return (
    <div>
      <ul>
        { props.contents.map(content => (
          <li>{ content.id } : { content.title }</li>
        ))}
      </ul>
    </div>
  )
}