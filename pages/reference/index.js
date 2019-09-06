import {Button} from 'rbx'
import bugsnagClient from '../../lib/bugsnag'
function Reference() {
  return (
    <div>
      <p>Reference</p>
      <Button onClick={() => bugsnagClient.notify(new Error('bad!'))}>Send to bugsnag</Button>
    </div>
  )
}

export default Reference
