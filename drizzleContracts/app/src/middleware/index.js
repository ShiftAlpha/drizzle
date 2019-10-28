// ./app/middleware/index.js
//imports
import { generateStore, EventActions } from 'drizzle'
import drizzleOptions from '../drizzleOptions'
import { toast } from 'react-toastify'

//constructor - contract event 
//contains attributes/variables
const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
      const contract = action.name
      const contractEvent = action.event.event
      const message = action.event.returnValues._message
      const display = `${contract}(${contractEvent}): ${message}`
      //react-toastify 
      // to simulate external interaction
      toast.success(display, { position: toast.POSITION.TOP_RIGHT })
    }
    return next(action)
  }
  //registers the middleware with drizzle 
  const appMiddlewares = [ contractEventNotifier ]
  //return a redux store that you can use wherever there is a store
  const store = generateStore({
    drizzleOptions,
    appMiddlewares,
    disableReduxDevTools: false  // enable ReduxDevTools!
  })

  export default store