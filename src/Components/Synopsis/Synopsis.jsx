import React from 'react'

const Synopsis = ({synopsis}) => {
  return (
    <div>
        <p className="text-sm">
                {synopsis.description}
              </p>
              <ol className="text-sm list-disc pl-5 py-5">
                {
                  synopsis.points.map((point,index)=>(
                    <li>
                  {point}
                </li>
                  ))
                }
              </ol>
              <p className="text-sm">
                {synopsis.finalComment}
              </p>
    </div>
  )
}

export default Synopsis