import React, { useState } from "react"
import { css } from "@emotion/core"

function Wave() {
  const [waves, setWaves] = useState(0)
  const wave = `👐 ${waves <= 1 ? "wave" : "waves"}`

  return (
    <button onClick={() => setWaves(waves + 1)}>
      {wave} {waves}
    </button>
  )
}

export default Wave
