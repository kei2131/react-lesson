import React, { useState, useCallback } from 'react'

type Props = {
  add: Function
}

export const AddContent: React.FC<Props> = props => {
  
  // ToDoコンテンツのタイトル入力値
  const [ title, setTitle ] = useState<string>("")

  const handleSetTitle = useCallback((e: any) => {

    const titleValue = e.target.value
    setTitle(titleValue)

  }, [])

  return (
    <div>
      <div className="input-title-form">
        <input id="input-title" type="text" onChange={e => handleSetTitle(e)}/>
        <button onClick={ () => props.add(title) }>追加</button>
      </div>
    </div>
  )
}