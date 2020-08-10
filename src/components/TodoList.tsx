import React, { useState, useCallback } from 'react'
import { ListContents, ToDoContent } from './ListContents'
import { AddContent } from './AddCotent'

export const ToDoList: React.FC = () => {

  // ToDoコンテンツ
  const ToDoContents: ToDoContent[] = []
  // ToDoコンテンツのステート
  const [ list, setList ] = useState<ToDoContent[]>(ToDoContents)

  // ToDoコンテンツのステートセット
  const handleAddContent = (title: string) => {
    const newContent: ToDoContent = createAddContent(title)
    setList(prev => prev.concat(newContent))
  }

  // 追加するToDoコンテンツ作成
  const createAddContent = ( title: string ): ToDoContent => {
    const newContent: ToDoContent = {
      id: list.length, title: title
    }
    return newContent
  }

  return (
    <div className="ToDoList">
      <div>
        <h1>リスト</h1>
      </div>
      <div className="list-contents">
        <ListContents contents={ list } />
      </div>
      <div className="add-form">
        <AddContent add={ handleAddContent } />
      </div>
    </div>
  )
}